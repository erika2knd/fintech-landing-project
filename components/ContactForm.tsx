"use client";
import * as React from "react";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = React.useState<State>("idle");
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      website: String(fd.get("website") || ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState("error");
      return;
    }

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
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

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-900">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-gray-900">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-900">Company (optional)</span>
        <input
          name="company"
          autoComplete="organization"
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20"
        />
      </label>

      <label className="block">
        <span className="mb-1 block text-sm font-medium text-gray-900">Message</span>
        <textarea
          name="message"
          required
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2"
        />
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
      </div>
    </form>
  );
}
