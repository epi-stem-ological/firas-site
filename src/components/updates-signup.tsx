"use client";

import { updates } from "@/data/site";

export function UpdatesSignup() {
  return (
    <form
      className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end"
      onSubmit={(event) => {
        event.preventDefault();
        document.getElementById("updates-placeholder")?.focus();
      }}
    >
      <div className="grid gap-2">
        <label htmlFor="updates-email" className="text-sm font-semibold">
          {updates.fieldLabel}
        </label>
        <input
          id="updates-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-describedby="updates-placeholder"
          className="field-input"
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-copper hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-describedby="updates-placeholder"
      >
        {updates.button}
      </button>
      <p
        id="updates-placeholder"
        tabIndex={-1}
        className="rounded-2xl border border-dashed border-copper/80 bg-copper/5 px-4 py-3 text-sm leading-6 text-foreground sm:col-span-2"
      >
        {updates.placeholder}
      </p>
    </form>
  );
}
