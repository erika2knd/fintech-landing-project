import React from "react";

type Feature = {
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    title: "Instant Internal Transfers",
    text:
      "Move your money swiftly and effortlessly within the Fynox ecosystem. With our instant transfer feature, your funds are always right where you need them, exactly when you need them.",
  },
  {
    title: "Secure and Reliable",
    text:
      "Trust is the bedrock of Fynox. We prioritize your financial security by employing advanced encryption and robust security protocols to protect your transactions and personal data.",
  },
  {
    title: "Intuitive User Interface",
    text:
      "Managing your digital finances is now simpler than ever. Our easy-to-navigate interface is designed to cater to everyone, from experienced investors to those just beginning their e-money journey.",
  },
  {
    title: "Multi-Currency Flexibility",
    text:
      "Navigate the global market seamlessly. Fynox supports a variety of currencies, allowing you to transact across borders effortlessly, without the hassle of conversions.",
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
