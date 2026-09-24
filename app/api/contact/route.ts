import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail, isMailerConfigured } from "@/app/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  project?: string;
  message?: string;
};

function validate(payload: ContactPayload): string[] {
  const errors: string[] = [];
  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("name is required (minimum 2 characters)");
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.push("a valid email is required");
  }
  if (!payload.phone || payload.phone.trim().length < 7) {
    errors.push("a valid phone number is required");
  }
  if (!payload.project || !payload.project.trim()) {
    errors.push("a survey type is required");
  }
  if (payload.project && payload.project.trim().length > 300) {
    errors.push("survey type is too long");
  }
  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("message is required (minimum 10 characters)");
  }
  if (payload.message && payload.message.length > 5000) {
    errors.push("message is too long (maximum 5000 characters)");
  }
  return errors;
}

type CleanPayload = {
  name: string;
  email: string;
  phone?: string;
  project?: string;
  message: string;
};

function clean(payload: ContactPayload): CleanPayload {
  return {
    name: payload.name!.trim(),
    email: payload.email!.trim().toLowerCase(),
    phone: payload.phone?.trim() || undefined,
    project: payload.project?.trim() || undefined,
    message: payload.message!.trim(),
  };
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "GeoLegacy Survey contact API",
    methods: ["POST"],
    mailer: isMailerConfigured() ? "configured" : "not configured",
  });
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["Request body must be valid JSON"] },
      { status: 400 },
    );
  }

  const errors = validate(payload);
  if (errors.length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const data = clean(payload);

  if (!isMailerConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "Email dispatch is not configured on this server. Please email us directly.",
        ],
      },
      { status: 503 },
    );
  }

  try {
    console.log("Contact API: sending enquiry email", data);
    await sendEnquiryEmail({
      ...data,
      serviceName: data.project ?? "General enquiry",
      submittedAt: new Date().toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    });
  } catch (error) {
    console.error("Contact API: failed to send enquiry email", error);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "Your enquiry could not be sent at this time. Please try again or email us directly.",
        ],
      },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        "Thank you — your enquiry has been sent. GeoLegacy Survey will come back to you within 48 hours.",
      received: {
        email: data.email,
        phone: data.phone ?? null,
        project: data.project ?? null,
      },
    },
    { status: 200 },
  );
}
