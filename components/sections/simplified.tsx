import Image from "next/image";

const VALUES = [
  { title: "Trusted Worldwide" },
  { title: "Full Compliance" },
  { title: "Transparent & Clear" },
  { title: "Secure & Efficient" },
];

export default function Simplified() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/forest.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-24 py-24 text-white">
        <div className="grid items-start gap-6 md:grid-cols-[1.4fr_1fr]">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Simplifying Finance.
            <br /> Empowering Growth.
          </h2>

          <div className="md:justify-self-end">
            <p className="max-w-xs text-sm md:text-base leading-relaxed text-white/90 text-left md:text-right">
              With Fynora, businesses gain instant access to IBAN accounts and seamless SEPA/SWIFT payments. Built on security, compliance, and transparency—so you can manage finances with confidence in real time.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
          { VALUES.map((item, i) => (
            <li key={i}>
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-5 text-center text-base md:text-lg font-semibold shadow-lg ring-1 ring-white/20">
                {item.title}
              </div>
            </li>
          )) }
        </ul>
      </div>
    </section>
  );
}
