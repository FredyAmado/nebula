import { NextResponse } from "next/server";

const WA_TOKEN = process.env.WHATSAPP_TOKEN || "";
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_ID || "1124363420766635";
const WA_RECIPIENT = process.env.WHATSAPP_RECIPIENT || "+573249082558";
const WA_API = `https://graph.facebook.com/v22.0/${WA_PHONE_ID}/messages`;
const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL || "http://96.44.175.39:5678/webhook/nebula-contact";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, consent } = await req.json();
    const results: string[] = [];

    // 1. Email via nodemailer
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
        await transporter.sendMail({
          from: `"Nebula Web" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || "contacto@nebula.agencia",
          subject: `Nuevo contacto de ${name} - Nebula`,
          html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Teléfono:</strong> ${phone}</p><p><strong>Mensaje:</strong></p><p>${message}</p>`,
        });
        results.push("email_sent");
      } catch {
        results.push("email_failed");
      }
    }

    // 2. WhatsApp via Graph API
    if (WA_TOKEN) {
      try {
        const waBody = {
          messaging_product: "whatsapp",
          to: WA_RECIPIENT,
          type: "template",
          template: {
            name: "contacto_nebula",
            language: { code: "es_CO" },
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: name },
                  { type: "text", text: email },
                  { type: "text", text: phone },
                  { type: "text", text: message },
                ],
              },
            ],
          },
        };
        const waResp = await fetch(WA_API, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${WA_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(waBody),
        });
        if (waResp.ok) results.push("whatsapp_sent");
        else results.push("whatsapp_failed");
      } catch {
        results.push("whatsapp_failed");
      }
    }

    // 3. n8n webhook (async — don't wait)
    fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, consent }),
    }).then(() => results.push("n8n_ok")).catch(() => {});

    const ok = results.includes("email_sent") || results.includes("whatsapp_sent");
    return NextResponse.json({ ok, results });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}