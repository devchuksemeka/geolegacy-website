import { BUSINESS } from "../lib/business";
import ContactForm from "./ContactForm";

type ContactProps = {
  heading?: string;
  description?: string;
  formTitle?: string;
  formId?: string;
};

const DEFAULT_HEADING = "Ready to scope your next site investigation?";
const DEFAULT_DESCRIPTION =
  "Tell us about your project and we\u2019ll come back with a clear plan, timeline and quotation \u2014 usually within 48 hours.";

const CHANNELS = [
  {
    label: "Email us",
    value: BUSINESS.email,
    note: "Quotations, documents and deliverables",
    href: `mailto:${BUSINESS.email}`,
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 6l8 6 8-6" />
      </>
    ),
  },
  {
    label: "Call our team",
    value: BUSINESS.phoneDisplay,
    note: BUSINESS.officeHours,
    href: BUSINESS.phoneHref,
    icon: (
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat with a surveyor",
    note: "Quick questions or site photos",
    href: BUSINESS.whatsappHref,
    icon: (
      <path d="M21 11.5c0 4.7-3.9 8.5-8.7 8.5-1.6 0-3.1-.4-4.4-1.2L3 20l1.3-4.5C3.5 14.2 3 12.9 3 11.5 3 6.8 6.9 3 11.7 3S21 6.8 21 11.5zM8.5 9.4c-.5.9.2 1.6 1.1 2.3 1 1.2 2.4 2.1 3.9 2.4.8.1 2-.4 2.1-1.2 0-.4-.4-.6-.6-.8-.5-.3-.9-.5-1.1-.3-.3.3-.7 1-.9.9-.5-.2-1-.6-1.4-1-.7-.7-1.2-1.6-1.3-2.2 0-.2.4-.4.5-.7.2-.2.1-.8.1-1-.7-.3-1.3-.6-1.9-.7-.7-.1-1.2.1-1.5.6z" />
    ),
  },
  {
    label: "Coverage",
    value: BUSINESS.areaServed.join(" & "),
    note: "Onshore and offshore project delivery",
    href: null,
    icon: (
      <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />
    ),
  },
];

export default function Contact({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  formTitle = "Request a Survey",
  formId = "survey-request",
}: ContactProps = {}) {
  return (
    <section className="cta-band contact" id="contact">
      <div className="grid-field" style={{ opacity: 0.15 }} />
      <div className="wrap contact-grid">
        <div className="contact-info">
          <h2>{heading}</h2>
          <p>{description}</p>

          <div className="contact-channels">
            {CHANNELS.map((channel) => {
              const inner = (
                <>
                  <span className="contact-channel-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      {channel.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="contact-channel-label">
                      {channel.label}
                    </span>
                    <span className="contact-channel-value">
                      {channel.value}
                    </span>
                    <span className="contact-channel-note">
                      {channel.note}
                    </span>
                  </span>
                </>
              );

              return channel.href ? (
                <a
                  key={channel.label}
                  className="contact-channel"
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {inner}
                </a>
              ) : (
                <div key={channel.label} className="contact-channel">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <ContactForm title={formTitle} formId={formId} />
      </div>
    </section>
  );
}