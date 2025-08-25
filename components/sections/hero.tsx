import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden bg-[url('/finora-hero.jpg')] bg-cover bg-center"
      aria-label="Empowering your financial journey"
    >
      <div className="pointer-events-none absolute inset-0 bg-black/30" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">
            Welcome to Fynora
          </span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">
            Your financial tool
          </span>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <h1 className="text-5xl font-extrabold tracking-tight text-white leading-[1.05] sm:text-6xl md:text-7xl">
            Take Control 
            <br />
            of Your Financial 
            <br />
            Future
          </h1>

          <div className="md:translate-y-48 md:justify-self-end">
            <div className="max-w-sm text-white">
              <p className="text-base leading-relaxed text-white/90">
                We make managing your finances effortless—removing the stress, confusion, and wasted time—so you can focus on the goals, experiences, and opportunities that truly matter.
              </p>

              <div className="mt-5">
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow transition-transform duration-300 scale-100 hover:scale-105"
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
