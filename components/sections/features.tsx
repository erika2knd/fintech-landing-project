import React from "react";

type Feature = {
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    title: "Instant Transfers",
    text:
      "Move money at the speed of your business. No delays, no friction — just instant access whenever you need it.",
  },
  {
    title: "Ironclad Security",
    text:
      "Your money deserves the highest protection. With Fynora, every transaction is shielded by cutting-edge encryption and rock-solid reliability.",
  },
  {
    title: "Smart & Simple Interface",
    text:
      "Finance shouldn’t feel complicated. Our sleek, intuitive design makes it effortless to stay in control — whether you’re a beginner or a pro.",
  },
  {
    title: "Global Currency Freedom",
    text:
      "Think beyond borders. Pay, send, and receive in multiple currencies with zero hassle and total flexibility.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/features-bg.jpg)", 
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#2d0146]/40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
          Features
        </span>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <article
              key={i}
              className="
                relative rounded-2xl 
                bg-white/10 p-8 text-white shadow-xl
                backdrop-blur-xs
                before:pointer-events-none before:absolute before:inset-0
                before:rounded-2xl before:border before:border-white/10
                "
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{f.text}</p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
