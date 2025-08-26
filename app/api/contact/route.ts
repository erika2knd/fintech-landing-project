import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  company: z.string().max(120).optional(),
  website: z.string().max(0).optional(), 
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    const { name, email, message, company, website } = parsed.data;

    if (website && website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const subject = `New contact request from ${name}`;
    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;padding:16px">
        <h2 style="margin:0 0 12px">New contact request</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${company ? `<p><b>Company:</b> ${escapeHtml(company)}</p>` : ""}
        <p style="white-space:pre-wrap"><b>Message:</b> ${escapeHtml(message)}</p>
      </div>
    `;

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY is missing — skipping real send.");
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,     
      to: process.env.EMAIL_TO!,         
      replyTo: email,                     
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

