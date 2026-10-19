"use client";

import { inquiries } from "@/data/site";
import type { ReactNode } from "react";

export function InquiryForm() {
  return (
    <form
      className="mt-10 grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("inquiry-placeholder")?.focus();
      }}
    >
      <Field
        id="inquiry-name"
        label={inquiries.fields.name.label}
        helper={inquiries.fields.name.helper}
      >
        <input
          id="inquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-describedby="inquiry-name-help"
          className="field-input"
        />
      </Field>
      <Field
        id="inquiry-organization"
        label={inquiries.fields.organization.label}
        helper={inquiries.fields.organization.helper}
      >
        <input
          id="inquiry-organization"
          name="organization"
          type="text"
          autoComplete="organization"
          aria-describedby="inquiry-organization-help"
          className="field-input"
        />
      </Field>
      <Field
        id="inquiry-type"
        label={inquiries.fields.type.label}
        helper={inquiries.fields.type.helper}
      >
        <select
          id="inquiry-type"
          name="type"
          className="field-input"
          defaultValue="Speaking"
          aria-describedby="inquiry-type-help"
        >
          {inquiries.fields.type.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field
        id="inquiry-message"
        label={inquiries.fields.message.label}
        helper={inquiries.fields.message.helper}
      >
        <textarea
          id="inquiry-message"
          name="message"
          rows={5}
          placeholder={inquiries.fields.message.placeholder}
          aria-describedby="inquiry-message-help"
          className="field-input min-h-36 resize-y"
        />
      </Field>
      <p
        id="inquiry-placeholder"
        tabIndex={-1}
        className="rounded-2xl border border-dashed border-copper/80 bg-copper/5 px-4 py-3 text-sm leading-6 text-foreground"
      >
        {inquiries.placeholder}
      </p>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-copper hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
        aria-describedby="inquiry-placeholder"
      >
        {inquiries.submit}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  helper,
  children,
}: {
  id: string;
  label: string;
  helper: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {children}
      <p id={`${id}-help`} className="text-sm leading-6 text-muted-foreground">
        {helper}
      </p>
    </div>
  );
}
