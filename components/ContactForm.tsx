"use client";
import * as React from "react";

type State = "idle" | "sending" | "sent" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message" | "company", string[]>>;

export default function ContactForm() {
  const [state, setState] = React.useState<State>("idle");
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;

    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      website: String(fd.get("website") || ""), 
    };

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.status === 400 && json.fieldErrors) {
        setErrors(json.fieldErrors as FieldErrors);
        setState("idle");
        return;
      }

      if (json.ok) {
        setState("sent");
        formRef.current?.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const err = (k: keyof FieldErrors) => errors[k]?.[0];

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-900">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            aria-invalid={!!err("name")}
            aria-describedby={err("name") ? "err-name" : undefined}
            className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20 ${
              err("name") ? "border-red-500" : "border-gray-300"
            }`}
          />
          {err("name") && (
            <p id="err-name" className="mt-1 text-xs text-red-600">{err("name")}</p>
          )}
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-900">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!err("email")}
            aria-describedby={err("email") ? "err-email" : undefined}
            className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20 ${
              err("email") ? "border-red-500" : "border-gray-300"
            }`}
          />
          {err("email") && (
            <p id="err-email" className="mt-1 text-xs text-red-600">{err("email")}</p>
          )}
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-900">Company (optional)</span>
        <input
          name="company"
          autoComplete="organization"
          aria-invalid={!!err("company")}
          aria-describedby={err("company") ? "err-company" : undefined}
          className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20 ${
            err("company") ? "border-red-500" : "border-gray-300"
          }`}
        />
        {err("company") && (
          <p id="err-company" className="mt-1 text-xs text-red-600">{err("company")}</p>
        )}
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-900">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          aria-invalid={!!err("message")}
          aria-describedby={err("message") ? "err-message" : undefined}
          className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20 ${
            err("message") ? "border-red-500" : "border-gray-300"
          }`}
        />
        {err("message") && (
          <p id="err-message" className="mt-1 text-xs text-red-600">{err("message")}</p>
        )}
      </label>

      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : state === "sent" ? "Sent ✓" : "Send"}
        </button>

        {state === "error" && (
          <p className="text-sm text-red-600">Failed to send. Please try again.</p>
        )}
        {state === "sent" && (
          <p className="text-sm text-green-600">Thanks! Your message was sent.</p>
        )}
      </div>
    </form>
  );
}

