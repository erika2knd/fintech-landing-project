import Image from "next/image";
import CookieClient from "./preferences";

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cookie-bg.jpg" 
          alt="Cookies background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-24 py-24 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Cookies Policy (Demo)
        </h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
          This page is a <strong>demo implementation</strong> to showcase cookie
          consent and preference management skills. All non-essential cookies are
          test-only and do not perform any real tracking.
        </p>

        <section className="mt-8 space-y-4 text-sm md:text-base">
          <h2 className="text-xl font-semibold">Your Preferences</h2>
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <CookieClient />
          </div>
        </section>

        <section className="mt-10 space-y-3 text-sm md:text-base">
          <h2 className="text-xl font-semibold">Types of Cookies</h2>
          <ul className="list-disc pl-5 space-y-2 text-white/85">
            <li>
              <strong>Necessary</strong> — required for basic site functionality.
            </li>
            <li>
              <strong>Analytics</strong> — demo cookies used to illustrate analytics
              integration.
            </li>
            <li>
              <strong>Marketing</strong> — demo cookies simulating marketing tools.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

