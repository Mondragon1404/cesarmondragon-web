const crypto = require('crypto');

function verifySignature(rawBody, header, secret) {
  const tPart = header.split(',').find(p => p.startsWith('t='));
  const v1Part = header.split(',').find(p => p.startsWith('v1='));
  if (!tPart || !v1Part) return false;

  const timestamp = tPart.slice(2);
  const received = v1Part.slice(3);
  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex');

  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(received));
  } catch {
    return false;
  }
}

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body;

  if (process.env.CALENDLY_WEBHOOK_SIGNING_KEY) {
    const rawBody = await getRawBody(req);
    const sigHeader = req.headers['calendly-webhook-signature'];
    if (!sigHeader || !verifySignature(rawBody.toString(), sigHeader, process.env.CALENDLY_WEBHOOK_SIGNING_KEY)) {
      return res.status(401).json({ error: 'Invalid signature' });
    }
    body = JSON.parse(rawBody.toString());
  } else {
    body = req.body;
  }

  if (!body || !body.event) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const { event, payload } = body;

  if (event !== 'invitee.created') {
    return res.status(200).json({ ok: true, skipped: true });
  }

  // In Calendly v2 webhooks, the invitee data is directly in payload
  const qa = payload?.questions_and_answers || [];

  const fields = { 'Fuente del lead': 'Calendly' };

  if (payload.name)                  fields['Nombre']   = payload.name;
  if (payload.email)                 fields['Email']    = payload.email;
  if (payload.text_reminder_number)  fields['WhatsApp'] = payload.text_reminder_number;

  for (const { question, answer } of qa) {
    if (!answer) continue;
    const q = question.toLowerCase();
    if (q.includes('empresa'))                                                         fields['Empresa']     = answer;
    else if (q.includes('whatsapp') || q.includes('teléfono') || q.includes('telefono') || q.includes('phone')) fields['WhatsApp'] = answer;
    else if (q.includes('presupuesto')) {
      if (answer.includes('<'))                                    fields['Presupuesto'] = '<500€';
      else if (answer.includes('500') && answer.includes('1500')) fields['Presupuesto'] = '500€–1500€';
      else if (answer.includes('1500'))                           fields['Presupuesto'] = '1500€–3000€';
      else if (answer.includes('3000'))                           fields['Presupuesto'] = '3000€–7000€';
      else if (answer.includes('7000') || answer.includes('+'))   fields['Presupuesto'] = '7000€+';
    }
    else if (q.includes('servicio'))                                                   fields['Servicios Interesados'] = answer.split(/[\n,]/).map(s => s.trim()).filter(Boolean);
    else if (q.includes('problema') || q.includes('necesidad'))                       fields['Mensaje']     = answer;
  }

  try {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          Authorization:  `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!airtableRes.ok) {
      const err = await airtableRes.json().catch(() => ({}));
      console.error('AIRTABLE_FAIL', JSON.stringify({ err, fields }));
      return res.status(500).json({ error: 'Error saving to Airtable', detail: err });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Internal error:', err.message);
    return res.status(500).json({ error: 'Internal error', detail: err.message });
  }
}

// Config must be set on the exported function, not before reassigning module.exports
handler.config = { api: { bodyParser: true } };
module.exports = handler;
