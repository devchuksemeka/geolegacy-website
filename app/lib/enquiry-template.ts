import { BUSINESS } from "./business";

export type EnquiryTemplateData = {
  name: string;
  email: string;
  phone?: string;
  project?: string;
  message: string;
  submittedAt: string;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const nl2br = (value: string): string =>
  escapeHtml(value).replace(/\r\n|\r|\n/g, "<br/>");

export function renderEnquiryHtml(data: EnquiryTemplateData): string {
  const rows = [
    { label: "Name", value: escapeHtml(data.name) },
    { label: "Email", value: escapeHtml(data.email) },
    data.phone
      ? { label: "Phone", value: escapeHtml(data.phone) }
      : null,
    data.project
      ? { label: "Survey type", value: escapeHtml(data.project) }
      : null,
    {
      label: "Submitted",
      value: escapeHtml(data.submittedAt),
    },
  ].filter(
    (row): row is { label: string; value: string } =>
      row !== null && row.value.length > 0,
  );

  const rowsMarkup = rows
    .map(
      (row) =>
        `<tr style="background:#ffffff;">
          <td style="padding:12px 20px;border-bottom:1px solid #eef1f6;font-size:13px;color:#66707f;text-transform:uppercase;letter-spacing:0.04em;font-weight:600;">${row.label}</td>
          <td style="padding:12px 20px;border-bottom:1px solid #eef1f6;font-size:14px;color:#15203a;font-weight:500;">${row.value}</td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
  </head>
  <body style="margin:0;padding:0;background:#f3f5f9;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f5f9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e2e7f0;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg,#0b143d,#1e3aa8);padding:28px 32px;">
                <h1 style="margin:0;font-size:20px;line-height:1.3;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">New survey enquiry</h1>
                <p style="margin:6px 0 0;font-size:13px;color:#aebcff;font-family:Arial,Helvetica,sans-serif;">
                  Via ${escapeHtml(BUSINESS.website)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:6px 20px 20px;font-family:Arial,Helvetica,sans-serif;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e7f0;border-radius:8px;overflow:hidden;">
                  ${rowsMarkup}
                </table>
                <p style="margin:24px 0 8px;font-size:13px;color:#66707f;text-transform:uppercase;letter-spacing:0.04em;font-weight:600;">Project details</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e7f0;border-radius:8px;overflow:hidden;">
                  <tr style="background:#fafbfd;">
                    <td style="padding:16px 20px;font-size:14px;line-height:1.6;color:#15203a;word-break:break-word;">${nl2br(data.message)}</td>
                  </tr>
                </table>
                <p style="margin:20px 0 0;font-size:12px;color:#93a0b4;font-family:Arial,Helvetica,sans-serif;">
                  Reply directly to the sender at <a href="mailto:${escapeHtml(data.email)}" style="color:#1e3aa8;">${escapeHtml(data.email)}</a> —
                  their address is set as the reply-to on this message.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#f7f9fc;padding:16px 32px;border-top:1px solid #e2e7f0;">
                <p style="margin:0;font-size:12px;color:#66707f;font-family:Arial,Helvetica,sans-serif;">
                  ${escapeHtml(BUSINESS.brandName)} &middot; ${escapeHtml(BUSINESS.phoneDisplay)} &middot; ${escapeHtml(BUSINESS.coverage)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderEnquiryText(data: EnquiryTemplateData): string {
  const lines = [
    `${BUSINESS.brandName} — NEW SURVEY ENQUIRY`,
    `Source: ${BUSINESS.website}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.project ? `Survey type: ${data.project}` : null,
    `Submitted: ${data.submittedAt}`,
    "",
    "PROJECT DETAILS",
    "---------------",
    data.message,
    "",
    `Reply to: ${data.email}`,
    BUSINESS.phoneDisplay,
    BUSINESS.coverage,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return lines;
}