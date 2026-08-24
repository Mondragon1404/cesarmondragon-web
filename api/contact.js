function emailBase(nombre, bodyRows) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#0A0A0A;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;padding:48px 16px">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">
        <tr><td style="padding-bottom:40px">
          <span style="font-family:'Inter',sans-serif;font-size:18px;font-weight:700;color:#FFFFFF;letter-spacing:0.05em">CM</span>
        </td></tr>
        <tr><td style="padding-bottom:32px">
          <div style="width:32px;height:2px;background-color:#A61C1C"></div>
        </td></tr>
        <tr><td style="color:#FFFFFF;font-size:16px;line-height:1.75">
          <p style="margin:0 0 20px">Hola ${nombre || ''},</p>
          ${bodyRows}
        </td></tr>
        <tr><td style="border-top:1px solid #222222;padding-top:32px">
          <p style="margin:0 0 4px;color:#FFFFFF;font-size:15px;font-weight:600">César Mondragón</p>
          <p style="margin:0;color:#666666;font-size:13px">Diseño, automatización e inteligencia artificial para negocios que quieren crecer.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function emailPriority(nombre) {
  return emailBase(nombre, `
    <p style="margin:0 0 20px">Gracias por escribirme. He recibido correctamente tu solicitud y revisaré la información de tu proyecto para entender mejor cómo puedo ayudarte.</p>
    <p style="margin:0 0 20px">Trabajo ayudando a marcas y negocios a mejorar su presencia digital mediante diseño, automatización e inteligencia artificial, por lo que cada proyecto requiere una solución adaptada a sus objetivos y necesidades.</p>
    <p style="margin:0 0 24px">Para avanzar más rápido y entender mejor tu caso, puedes reservar directamente una llamada conmigo:</p>
    </td></tr>
    <tr><td style="padding-bottom:32px">
      <a href="https://cal.com/cesar-mondragon/30min" target="_blank"
        style="display:inline-block;background-color:#A61C1C;color:#FFFFFF;font-family:'Inter',sans-serif;font-size:15px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:4px">
        Reservar una llamada →
      </a>
    </td></tr>
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
  `);
}

function emailStandard(nombre) {
  return emailBase(nombre, `
    <p style="margin:0 0 20px">Gracias por escribirme. He recibido correctamente tu solicitud y la revisaré personalmente en las próximas horas.</p>
    <p style="margin:0 0 20px">Cada proyecto es diferente, así que antes de proponerte nada quiero entender bien tu situación y asegurarme de que lo que puedo ofrecerte tiene sentido real para ti.</p>
    <p style="margin:0 0 20px">Me pondré en contacto contigo directamente para hablar sobre tu caso. Si mientras tanto quieres contarme algo más sobre tu proyecto — contexto, urgencia, lo que sea — puedes responder directamente a este correo y lo tendré en cuenta.</p>
    <p style="margin:0 0 40px">Hablamos pronto.</p>
  `);
}

function isPriorityLead({ empresa, presupuesto, servicios }) {
  if (presupuesto === 'Menos de 500 EUR') return false;
  const serviciosList = Array.isArray(servicios) ? servicios : (servicios ? [servicios] : []);
  if (!empresa && serviciosList.length === 0) return false;
  return true;
}

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

// Valores que el <select> del formulario puede producir. Un navegador nunca puede
// enviar otra cosa: la opción placeholder es `disabled` y el campo es `required`.
const TIPOS_NEGOCIO = [
  'Ecommerce', 'Marca Personal', 'Clínica Estética', 'Clínica Dental', 'Inmobiliaria',
  'Restaurante / Cafetería', 'Agencia', 'Startup', 'SaaS', 'Coach / Mentor',
  'Academia / Formación', 'Negocio Local', 'Empresa de Servicios', 'Tienda Física',
  'Estudio Creativo', 'Consultoría', 'Arquitectura / Interiorismo', 'Fitness / Gym',
  'Belleza / Cosmética', 'Otro',
];

const PRESUPUESTOS = [
  'Menos de 500 EUR', '500-1500 EUR', '1500-3000 EUR', '3000-7000 EUR', '7000+ EUR',
];

// Devuelve el motivo del descarte, o null si el envío parece humano.
function motivoDeSpam({ website, ts, nombre, empresa, email, tipo_negocio, presupuesto }) {
  // 1. Honeypot: campo invisible para personas, irresistible para bots que rellenan todo.
  if (typeof website === 'string' && website.trim()) return 'honeypot relleno';

  // 2. Desplegables: el bot copia el texto del placeholder o se los inventa.
  if (!TIPOS_NEGOCIO.includes(tipo_negocio)) return `tipo_negocio invalido (${tipo_negocio})`;
  if (!PRESUPUESTOS.includes(presupuesto)) return `presupuesto invalido (${presupuesto})`;

  // 3. Obligatorios reales.
  if (!nombre || !String(nombre).trim()) return 'sin nombre';
  if (!empresa || !String(empresa).trim()) return 'sin empresa';
  if (!email || !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(String(email).trim())) return 'email malformado';

  // 4. Tiempo de relleno. Si falta `ts` no bloqueamos: puede ser una página cacheada
  //    de antes de este cambio. Si viene y es instantáneo, no lo ha escrito una persona.
  const inicio = Number(ts);
  if (Number.isFinite(inicio) && inicio > 0) {
    const segundos = (Date.now() - inicio) / 1000;
    if (segundos < 3) return `formulario enviado en ${segundos.toFixed(1)}s`;
  }

  return null;
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
    website,
    ts,
  } = req.body;

  // Se descarta antes de tocar n8n, Airtable o Resend: el spam no debe generar
  // ni registro ni correo de confirmación a una dirección inventada.
  const spam = motivoDeSpam({ website, ts, nombre, empresa, email, tipo_negocio, presupuesto });
  if (spam) {
    console.warn('SPAM_BLOCKED', JSON.stringify({ motivo: spam, nombre, email }));
    // 200 a propósito: si le devolvemos un error, el bot reintenta o se adapta.
    return res.status(200).json({ ok: true });
  }

  try {
    const n8nRes = await fetch(
      'https://mondragon-n8n.4ucpgb.easypanel.host/webhook/crm-lead-web',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          empresa,
          correo: email,
          email,
          whatsapp,
          web_instagram,
          tipo_negocio,
          presupuesto,
          servicios: Array.isArray(servicios) ? servicios : (servicios ? [servicios] : []),
          mensaje,
        }),
      }
    );

    if (!n8nRes.ok) {
      return res.status(500).json({ error: 'Error al guardar el lead' });
    }

    const from = process.env.RESEND_FROM_EMAIL;
    const serviciosStr = Array.isArray(servicios) ? servicios.join(', ') : (servicios || '—');

    // Los correos son secundarios — si fallan no mostramos error al cliente
    try {

    // Correo de confirmación al cliente
    if (email && from) {
      const priority = isPriorityLead({ empresa, presupuesto, servicios });
      const emailHtml = priority
        ? emailPriority(nombre)
        : emailStandard(nombre);

      await sendEmail({
        from,
        to: email,
        subject: 'He recibido tu solicitud',
        html: emailHtml,
      });
    }

    // Notificación al negocio
    const businessEmail = process.env.BUSINESS_EMAIL;
    if (businessEmail && from) {
      const priority = isPriorityLead({ empresa, presupuesto, servicios });
      await sendEmail({
        from,
        to: businessEmail,
        subject: `${priority ? '⭐ ' : ''}Nuevo lead: ${nombre || 'sin nombre'}${empresa ? ' · ' + empresa : ''}`,
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
