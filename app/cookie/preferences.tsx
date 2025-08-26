"use client";
import * as React from "react";

export default function CookieClient() {
  const [analytics, setAnalytics] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const [saved, setSaved] = React.useState<null | "ok" | "error">(null);

  React.useEffect(() => {
    const match = document.cookie.split("; ").find((c) => c.startsWith("consent="));
    if (match) {
      try {
        const value = decodeURIComponent(match.split("=")[1]);
        const json = JSON.parse(value);
        setAnalytics(!!json.analytics);
        setMarketing(!!json.marketing);
      } catch {}
    }
  }, []);

  async function save() {
    try {
      await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analytics, marketing }),
      });
      setSaved("ok");
      setTimeout(() => setSaved(null), 2000);
    } catch {
      setSaved("error");
    }
  }

  return (
    <div className="rounded-2xl p-4 md:p-6">
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm text-white">
          <input type="checkbox" checked readOnly /> Necessary (always on)
        </label>
        <label className="flex items-center gap-2 text-sm text-white">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
          Analytics (demo)
        </label>
        <label className="flex items-center gap-2 text-sm text-white">
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
          Marketing (demo)
        </label>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={save}
          className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
        >
          Save preferences
        </button>
        {saved === "ok" && <span className="text-sm text-green-600">Saved ✓</span>}
        {saved === "error" && <span className="text-sm text-red-600">Error</span>}
      </div>
    </div>
  );
}
