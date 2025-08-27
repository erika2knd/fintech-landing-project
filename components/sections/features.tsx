import React from "react";

type Feature = { title: string; text: string; id?: string };
const FEATURES: Feature[] = [
  { id: "instant", title: "Instant Transfers", text: "Move money at the speed of your business. No delays, no friction — just instant access whenever you need it." },
  { id: "secure",  title: "Ironclad Security", text: "Your money deserves the highest protection. With Fynora, every transaction is shielded by cutting-edge encryption and rock-solid reliability." },
  { id: "smart",   title: "Smart & Simple Interface", text: "Finance shouldn’t feel complicated. Our sleek, intuitive design makes it effortless to stay in control — whether you’re a beginner or a pro." },
  { id: "global",  title: "Global Currency Freedom", text: "Think beyond borders. Pay, send, and receive in multiple currencies with zero hassle and total flexibility." },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-[url('/features-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[#2d0146]/55" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(0,0,0,0.35))]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-24 py-24">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs md:text-sm font-medium text-white backdrop-blur">
          Features
        </span>
        <h2 id="features-title" className="sr-only">
          Key features of Fynora
        </h2>

        <ul className="mt-8 md:mt-10 grid gap-6 md:gap-8 md:grid-cols-2 items-stretch">
  {FEATURES.map((f) => (
    <li key={f.id ?? f.title} className="h-full">
      <article
        className="
          group relative h-full flex flex-col rounded-2xl p-6 md:p-8
    bg-white/10 ring-1 ring-white/10
    backdrop-blur-sm
    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
    transition-all duration-300
    hover:bg-white/15 hover:ring-white/20 hover:shadow-[0_14px_38px_rgba(0,0,0,0.28)]
    focus-within:bg-white/15 focus-within:ring-white/20
    min-h-[200px] sm:min-h-[200px] md:min-h-[180px]
        "
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">
          <a
            href={`#${f.id ?? ""}`}
            className="outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d0146]/60 rounded"
          >
            {f.title}
          </a>
        </h3>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/80 flex-grow">
          {f.text}
        </p>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
        />
      </article>
    </li>
  ))}
</ul>
      </div>
    </section>
  );
}
