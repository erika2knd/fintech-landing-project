import Image from "next/image";

export default function HandlingPage() {
  return (
    <main className="relative min-h-screen isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/handling-bg.jpg" 
          alt="Handling background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-24 py-24 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">Handling (Demo)</h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
          This page is a <strong>demo implementation</strong> to showcase content
          structure and styling for operational handling information. It is not a
          real policy and contains placeholder text only.
        </p>

        <section className="mt-10 space-y-4 text-sm md:text-base text-white/85">
          <h2 className="text-xl font-semibold text-white">1. Scope</h2>
          <p>
            This section would normally define what processes are covered (e.g., payment
            processing, dispute handling, support requests, uptime notifications).
          </p>

          <h2 className="text-xl font-semibold text-white">2. Processing & Turnaround</h2>
          <p>
            In production, you would describe expected timelines for onboarding, KYC
            reviews, payment settlements, and incident responses.
          </p>

          <h2 className="text-xl font-semibold text-white">3. Escalation & Support</h2>
          <p>
            Outline how customers can escalate issues, typical response SLAs, and contact
            channels (email, ticketing, emergency line).
          </p>

          <h2 className="text-xl font-semibold text-white">4. Data & Security</h2>
          <p>
            Summarize how operational data is handled securely and in compliance with
            applicable standards. (This demo does not process real data.)
          </p>

          <h2 className="text-xl font-semibold text-white">5. Changes</h2>
          <p>
            Explain how updates to handling procedures are communicated and tracked over time.
          </p>
        </section>
      </div>
    </main>
  );
}
