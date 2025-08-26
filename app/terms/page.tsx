import Image from "next/image";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/terms-bg.jpg" 
          alt="Terms background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-24 py-24 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">Terms & Conditions (Demo)</h1>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
          This page is a <strong>demo implementation</strong> intended to showcase how
          Terms & Conditions can be structured and styled in a production website.
          The content below is placeholder text and not a legal document.
        </p>

        <section className="mt-10 space-y-4 text-sm md:text-base text-white/85">
          <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using this demo website, you acknowledge that these Terms
            are illustrative only and do not create any legal obligations.
          </p>

          <h2 className="text-xl font-semibold text-white">2. Use of the Service</h2>
          <p>
            In a real product, this section would define permitted and prohibited uses,
            user responsibilities, and account requirements.
          </p>

          <h2 className="text-xl font-semibold text-white">3. Intellectual Property</h2>
          <p>
            Here you would typically describe ownership of content, trademarks, and
            licenses granted to users.
          </p>

          <h2 className="text-xl font-semibold text-white">4. Disclaimers & Liability</h2>
          <p>
            This demo includes no warranties. A real document would outline limitations
            of liability and disclaimers regarding the service.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Governing Law</h2>
          <p>
            Specify jurisdiction and applicable law in a production setup. This is
            placeholder text for demonstration.
          </p>

          <h2 className="text-xl font-semibold text-white">6. Changes to the Terms</h2>
          <p>
            In production, you would explain how updates are communicated and when
            changes take effect.
          </p>

          <h2 className="text-xl font-semibold text-white">7. Contact</h2>
          <p>
            Provide your company’s contact details for questions regarding these Terms
            in the real document.
          </p>
        </section>
      </div>
    </main>
  );
}
