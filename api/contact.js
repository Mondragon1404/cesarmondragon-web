async function sendEmail({ from, to, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    nombre,
    empresa,
    email,
    whatsapp,
    web_instagram,
    tipo_negocio,
    presupuesto,
    servicios,
    mensaje,
  } = req.body;

  const fields = {};
  fields['Fuente del lead']                          = 'Web';
  if (nombre)        fields['Nombre']               = nombre;
  if (empresa)       fields['Empresa']              = empresa;
  if (email)         fields['Email']                = email;
  if (whatsapp)      fields['WhatsApp']             = whatsapp;
  if (web_instagram) fields['Web o Instagram']       = web_instagram;
  if (tipo_negocio)  fields['Tipo de negocio']      = tipo_negocio;
  if (presupuesto)   fields['Presupuesto']          = presupuesto;
  if (mensaje)       fields['Mensaje']              = mensaje;
  if (servicios && (Array.isArray(servicios) ? servicios.length : servicios)) {
    fields['Servicios Interesados'] = Array.isArray(servicios) ? servicios : [servicios];
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

    const data = await airtableRes.json();

    if (!airtableRes.ok) {
      return res.status(500).json({ error: 'Error al guardar el lead' });
    }

    const from = process.env.RESEND_FROM_EMAIL;
    const serviciosStr = Array.isArray(servicios) ? servicios.join(', ') : (servicios || '—');

    // Los correos son secundarios — si fallan no mostramos error al cliente
    try {

    // Correo de confirmación al cliente
    if (email && from) {
      await sendEmail({
        from,
        to: email,
        subject: 'He recibido tu solicitud',
        html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#0A0A0A;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;padding:48px 16px">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">

        <!-- Logo -->
        <tr><td style="padding-bottom:40px">
          <span style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#FFFFFF;letter-spacing:0.05em">CM</span>
        </td></tr>

        <!-- Divisor rojo -->
        <tr><td style="padding-bottom:32px">
          <div style="width:32px;height:2px;background-color:#A61C1C"></div>
        </td></tr>

        <!-- Cuerpo -->
        <tr><td style="color:#FFFFFF;font-size:16px;line-height:1.75">
          <p style="margin:0 0 20px">Hola ${nombre || ''},</p>
          <p style="margin:0 0 20px">Gracias por escribirme. He recibido correctamente tu solicitud y revisaré la información de tu proyecto para entender mejor cómo puedo ayudarte.</p>
          <p style="margin:0 0 20px">Trabajo ayudando a marcas y negocios a mejorar su presencia digital mediante diseño, automatización e inteligencia artificial, por lo que cada proyecto requiere una solución adaptada a sus objetivos y necesidades.</p>
          <p style="margin:0 0 24px">Para avanzar más rápido y entender mejor tu caso, puedes reservar directamente una llamada conmigo:</p>
        </td></tr>

        <!-- Botón Calendly -->
        <tr><td style="padding-bottom:32px">
          <a href="https://calendly.com/cesar-cesarmondragon/30min" target="_blank"
            style="display:inline-block;background-color:#A61C1C;color:#FFFFFF;font-family:'Inter',sans-serif;font-size:15px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:4px">
            Reservar una llamada →
          </a>
        </td></tr>

        <!-- Lista -->
        <tr><td style="color:#FFFFFF;font-size:16px;line-height:1.75;padding-bottom:32px">
          <p style="margin:0 0 12px">Durante la llamada podremos revisar:</p>
          <table cellpadding="0" cellspacing="0">
            <tr><td style="color:#A61C1C;padding-right:10px;vertical-align:top">•</td><td style="color:#FFFFFF;padding-bottom:6px">Tu negocio y objetivos</td></tr>
            <tr><td style="color:#A61C1C;padding-right:10px;vertical-align:top">•</td><td style="color:#FFFFFF;padding-bottom:6px">Los principales problemas o bloqueos actuales</td></tr>
            <tr><td style="color:#A61C1C;padding-right:10px;vertical-align:top">•</td><td style="color:#FFFFFF;padding-bottom:6px">Posibles oportunidades de mejora</td></tr>
            <tr><td style="color:#A61C1C;padding-right:10px;vertical-align:top">•</td><td style="color:#FFFFFF;padding-bottom:6px">Qué solución podría encajar mejor para ti</td></tr>
          </table>
        </td></tr>

        <tr><td style="color:#FFFFFF;font-size:16px;line-height:1.75;padding-bottom:40px">
          <p style="margin:0">Mientras tanto, si quieres añadir más información sobre tu proyecto, puedes responder directamente a este correo.</p>
        </td></tr>

        <!-- Firma -->
        <tr><td style="border-top:1px solid #222222;padding-top:32px">
          <p style="margin:0 0 4px;color:#FFFFFF;font-size:15px;font-weight:600">César Mondragón</p>
          <p style="margin:0;color:#666666;font-size:13px">Diseño, automatización e inteligencia artificial para negocios que quieren crecer.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
      });
    }

    // Notificación al negocio
    const businessEmail = process.env.BUSINESS_EMAIL;
    if (businessEmail && from) {
      await sendEmail({
        from,
        to: businessEmail,
        subject: `Nuevo lead: ${nombre || 'sin nombre'} — ${empresa || email || ''}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#222">
            <h2 style="color:#111">Nuevo contacto desde la web</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:8px 0;color:#666;width:160px">Nombre</td><td><strong>${nombre || '—'}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#666">Empresa</td><td>${empresa || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td>${email || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">WhatsApp</td><td>${whatsapp || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Web / Instagram</td><td>${web_instagram || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Tipo de negocio</td><td>${tipo_negocio || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Presupuesto</td><td>${presupuesto || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Servicios</td><td>${serviciosStr}</td></tr>
              ${mensaje ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Mensaje</td><td>${mensaje}</td></tr>` : ''}
            </table>
          </div>
        `,
      });
    }

    } catch (emailErr) {
      console.error('Email error (non-fatal):', emailErr.message);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Error interno', detail: err.message });
  }
};
