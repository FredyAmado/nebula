import { NextResponse } from "next/server";

const WA_TOKEN = process.env.WHATSAPP_TOKEN || "";
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_ID || "1124363420766635";
const WA_API = `https://graph.facebook.com/v22.0/${WA_PHONE_ID}/messages`;
const VERIFY_TOKEN = "nebula_webhook_2024";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }
  return new Response("Verification failed", { status: 403 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const entry = body?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const messages = value?.messages;

    if (!WA_TOKEN) {
      return NextResponse.json({ ok: false, error: "WHATSAPP_TOKEN no configurado" }, { status: 500 });
    }

    if (!messages || messages.length === 0) {
      return NextResponse.json({ ok: true });
    }

    const msg = messages[0];
    const from = msg.from;

    if (msg.type === "text") {
      const autoReply = {
        messaging_product: "whatsapp",
        to: from,
        type: "text",
        text: {
          body: "¡Gracias por contactarte con Nebula! Hemos recibido tu mensaje y te responderemos a la brevedad. Mientras tanto, visita nebula.agencia para conocer más sobre nuestros servicios.",
        },
      };

      const resp = await fetch(WA_API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WA_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(autoReply),
      });

      const respBody = await resp.text();
      console.log("WhatsApp API response", resp.status, respBody);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error", e);
    return NextResponse.json({ ok: true });
  }
}
