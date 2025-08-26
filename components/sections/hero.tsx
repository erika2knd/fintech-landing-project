import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[url('/finora-hero.jpg')] bg-cover bg-center"
      aria-label="Empowering your financial journey"
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
            Welcome to Fynora
          </span>
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
            Your financial tool
          </span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <h1 className="max-w-[14ch] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Take Control
            <br />
            of Your Financial
            <br />
            Future
          </h1>

          <div className="md:justify-self-end md:self-end md:mt-48">
            <div className="max-w-sm text-white">
              <p className="text-base leading-relaxed text-white/90">
                We make managing your finances effortless—removing the stress, confusion, and wasted time—so you can focus on the goals, experiences, and opportunities that truly matter.
              </p>

              <div className="mt-6">
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Get started with Fynora"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

