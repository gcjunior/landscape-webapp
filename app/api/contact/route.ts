import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type ValidContactData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ValidationResult =
  | { ok: false; message: string }
  | { ok: true; data: ValidContactData };

function validatePayload(payload: ContactRequest): ValidationResult {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !phone || !message) {
    return { ok: false, message: "All fields are required." as const };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { ok: false, message: "Please provide a valid email address." as const };
  }

  return { ok: true as const, data: { name, email, phone, message } };
}

export async function POST(request: Request) {
  let payload: ContactRequest;
  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body. Please submit valid form data." },
      { status: 400 },
    );
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }
  const data = validation.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured yet. Please set RESEND_API_KEY and CONTACT_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New quote request from ${data.name}`,
      replyTo: data.email,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        "",
        "Request details:",
        data.message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch {
    return NextResponse.json(
      { message: "Unable to send message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
