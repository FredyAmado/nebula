import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, consent } = await req.json();
    const webhookUrl = process.env.N8N_WEBHOOK_URL || "http://96.44.175.39:5678/webhook/nebula-contact";
    const sendEmail = process.env.SMTP_USER && process.env.SMTP_PASS;
    const results: string[] = [];

    if (sendEmail) {
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

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, consent }),
      });
      results.push("webhook_sent");
    } catch {
      results.push("webhook_failed");
    }

    const ok = results.includes("email_sent") || results.includes("webhook_sent");
    return NextResponse.json({ ok, results });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}