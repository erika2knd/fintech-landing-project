import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/privacy-bg.jpg" 
          alt="Privacy background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-24 py-24 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">Privacy Policy (Demo)</h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
          This Privacy Policy page is a <strong>demo implementation</strong>. It does not
          represent a real legal document, but is included to demonstrate the ability to
          structure, style, and build legal pages within a website.
        </p>

        <section className="mt-10 space-y-4 text-sm md:text-base text-white/85">
          <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting your personal
            information. This demo policy explains how personal data could be collected,
            used, and safeguarded.
          </p>

          <h2 className="text-xl font-semibold text-white">2. Information Collection</h2>
          <p>
            In a real application, we might collect information you provide directly (such
            as your name and email), as well as technical data through cookies or analytics
            tools — subject to your consent.
          </p>

          <h2 className="text-xl font-semibold text-white">3. Use of Information</h2>
          <p>
            The data could be used to provide services, improve performance, and ensure
            security. In this demo, no actual data is collected or processed.
          </p>

          <h2 className="text-xl font-semibold text-white">4. Data Protection</h2>
          <p>
            Appropriate technical and organizational measures would normally be applied to
            protect your information from unauthorized access. This demo does not implement
            such measures, as no real data is handled.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Contact</h2>
          <p>
            For demo purposes, please imagine this section contains contact information of
            a Data Protection Officer or company representative.
          </p>
        </section>
      </div>
    </main>
  );
}
