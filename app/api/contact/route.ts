import { NextRequest, NextResponse } from "next/server";

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
  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("message is required (minimum 10 characters)");
  }
  return errors;
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "GeoLegacy Survey contact API",
    methods: ["POST"],
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

  return NextResponse.json(
    {
      ok: true,
      message:
        "Thank you — your enquiry has been received. GeoLegacy Survey will come back to you within 48 hours.",
      received: {
        email: payload.email,
        phone: payload.phone ?? null,
        project: payload.project ?? null,
      },
    },
    { status: 200 },
  );
}