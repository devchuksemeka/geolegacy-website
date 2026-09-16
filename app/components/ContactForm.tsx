"use client";

import { useState } from "react";
import { BUSINESS } from "../lib/business";

type FormState = {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  project: "",
  message: "",
};

const PROJECT_OPTIONS = [
  "Land Survey",
  "Hydrographic Survey",
  "Geophysical Survey",
  "Geotechnical Investigation",
  "Positioning, GIS & Remote Sensing",
  "Environmental & Data Studies",
  "Not sure yet — talk to me",
];

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; errors: string[] };

type FieldEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

type ContactFormProps = {
  title?: string;
  formId?: string;
};

export default function ContactForm({
  title = "Request a Survey",
  formId = "survey-request",
}: ContactFormProps = {}) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update =
    (field: keyof FormState) =>
    (event: FieldEvent) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ kind: "success", message: data.message });
        setForm(INITIAL);
      } else {
        setStatus({
          kind: "error",
          errors: Array.isArray(data.errors)
            ? data.errors
            : ["Something went wrong. Please try again."],
        });
      }
    } catch {
      setStatus({
        kind: "error",
        errors: ["Network error — please try again or email us directly."],
      });
    }
  };

  if (status.kind === "success") {
    return (
      <div
        className="form-card form-success"
        id={formId}
        role="status"
      >
        <span className="form-success-mark" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3>Enquiry received</h3>
        <p>
          {status.message} Meanwhile, reach us directly at{" "}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      id={formId}
      onSubmit={onSubmit}
      noValidate
    >
      <h3>{title}</h3>

      {status.kind === "error" && (
        <div className="form-errors" role="alert">
          <ul>
            {status.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="cf-name">
            Full name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">
            Email <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="cf-phone">
            Phone <span className="opt">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-project">Survey type</label>
          <select
            id="cf-project"
            name="project"
            value={form.project}
            onChange={update("project")}
          >
            <option value="">Select a service</option>
            {PROJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="cf-message">
          Project details <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          value={form.message}
          onChange={update("message")}
          placeholder="Location, scope and timelines — anything that helps us scope the survey."
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled
        title="Online enquiries open soon"
      >
        Send enquiry
      </button>
      <p className="form-note">
        The enquiry form opens soon. Reach us on WhatsApp or email{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
      </p>
    </form>
  );
}