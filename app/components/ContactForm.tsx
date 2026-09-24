"use client";

import { useState } from "react";

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

type FieldName = keyof FormState;

type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const project = form.project.trim();
  const message = form.message.trim();

  if (name.length < 2) {
    errors.name = "Enter your full name (at least 2 characters).";
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (phone.length < 7) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!project) {
    errors.project = "Select the survey type you need.";
  }
  if (message.length < 10) {
    errors.message = "Add a few details about your project (at least 10 characters).";
  }

  return errors;
}

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
  const [errors, setErrors] = useState<FieldErrors>({});

  const update =
    (field: FieldName) =>
    (event: FieldEvent) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
      setStatus((prev) => {
        if (prev.kind === "success") return { kind: "idle" };
        return prev;
      });
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus({ kind: "idle" });
      return;
    }
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setForm(INITIAL);
        setErrors({});
        setStatus({ kind: "success", message: data.message });
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

  return (
    <form
      className="form-card"
      id={formId}
      onSubmit={onSubmit}
      noValidate
    >
      <h3>{title}</h3>

      {status.kind === "success" && (
        <div className="form-success form-success-inline" role="status">
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
          <p>{status.message}</p>
        </div>
      )}

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
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            value={form.name}
            onChange={update("name")}
            className={errors.name ? "form-input-error" : undefined}
          />
          {errors.name && (
            <span className="form-field-error" id="cf-name-error">
              {errors.name}
            </span>
          )}
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
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            value={form.email}
            onChange={update("email")}
            className={errors.email ? "form-input-error" : undefined}
          />
          {errors.email && (
            <span className="form-field-error" id="cf-email-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="cf-phone">
            Phone <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "cf-phone-error" : undefined}
            value={form.phone}
            onChange={update("phone")}
            className={errors.phone ? "form-input-error" : undefined}
            placeholder="e.g. +234 800 000 0000"
          />
          {errors.phone && (
            <span className="form-field-error" id="cf-phone-error">
              {errors.phone}
            </span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="cf-project">
            Survey type <span className="req" aria-hidden="true">*</span>
          </label>
          <select
            id="cf-project"
            name="project"
            required
            aria-invalid={Boolean(errors.project)}
            aria-describedby={errors.project ? "cf-project-error" : undefined}
            value={form.project}
            onChange={update("project")}
            className={errors.project ? "form-input-error" : undefined}
          >
            <option value="">Select a service</option>
            {PROJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.project && (
            <span className="form-field-error" id="cf-project-error">
              {errors.project}
            </span>
          )}
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
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          value={form.message}
          onChange={update("message")}
          placeholder="Location, scope and timelines — anything that helps us scope the survey."
          className={errors.message ? "form-input-error" : undefined}
        />
        {errors.message && (
          <span className="form-field-error" id="cf-message-error">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={status.kind === "submitting"}
      >
        {status.kind === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="form-note">
        We respond within 48 hours.
      </p>
    </form>
  );
}