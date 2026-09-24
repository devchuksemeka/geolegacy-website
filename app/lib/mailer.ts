import nodemailer, { type Transporter } from "nodemailer";
import { renderEnquiryHtml, renderEnquiryText } from "./enquiry-template";

export type EnquiryPayload = {
  serviceName: string;
  name: string;
  email: string;
  phone?: string;
  project?: string;
  message: string;
  submittedAt: string;
};

const SMTP = {
  host: process.env.SMTP_HOST ?? "",
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  user: process.env.SMTP_USER ?? "",
  pass: process.env.SMTP_PASS ?? "",
};

let transporter: Transporter | null = null;
let mailerError: Error | null = null;

function createTransporter(): Transporter {
  if (!SMTP.host || !SMTP.user || !SMTP.pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.",
    );
  }
  return nodemailer.createTransport({
    host: SMTP.host,
    port: SMTP.port,
    secure: SMTP.secure,
    auth: { user: SMTP.user, pass: SMTP.pass },
  });
}

function getTransporter(): Transporter {
  if (transporter) return transporter;
  try {
    transporter = createTransporter();
  } catch (error) {
    mailerError = error instanceof Error ? error : new Error(String(error));
    throw mailerError;
  }
  return transporter;
}

export function isMailerConfigured(): boolean {
  return Boolean(SMTP.host && SMTP.user && SMTP.pass);
}

export function getMailerDiagnostics() {
  return {
    configured: isMailerConfigured(),
    host: SMTP.host ? SMTP.host.replace(/^(https?:\/\/)?/, "") : null,
    port: SMTP.port,
    secure: SMTP.secure,
    ready: Boolean(transporter),
    lastError: mailerError?.message ?? null,
  };
}

export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@geolegacy.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? `GeoLegacy Survey <${SMTP.user}>`;
  const subject = `New survey enquiry — ${payload.serviceName} (${payload.name})`;

  const transporter = getTransporter();

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      text: renderEnquiryText(payload),
      html: renderEnquiryHtml(payload),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to send enquiry email: ${message}`);
  }
}