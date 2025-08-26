"use client";
import * as React from "react";

function readConsent(): boolean {
  return document.cookie.split("; ").some((c) => c.startsWith("consent="));
}

export default function CookieConsent() {
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(true);
  const [marketing, setMarketing] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setOpen(!readConsent());
  }, []);

  async function save(payload: { analytics: boolean; marketing: boolean }) {
    await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setOpen(false);
  }

  if (!mounted || !open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white/95 shadow-lg ring-1 ring-black/10 backdrop-blur p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-800">
            Мы используем необходимые cookies и, с вашего согласия, аналитические/маркетинговые. Настройки можно
            изменить позже на странице Cookies.
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 text-sm text-gray-900">
              <input type="checkbox" checked disabled /> Necessary
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-900">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />{" "}
              Analytics
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-900">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
              />{" "}
              Marketing
            </label>

            <button
              onClick={() => save({ analytics: true, marketing: true })}
              className="inline-flex justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Accept all
            </button>
            <button
              onClick={() => save({ analytics, marketing })}
              className="inline-flex justify-center rounded-full bg-gray-900/5 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-900/10"
            >
              Save
            </button>
            <button
              onClick={() => save({ analytics: false, marketing: false })}
              className="inline-flex justify-center rounded-full bg-gray-900/5 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-900/10"
            >
              Reject all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
