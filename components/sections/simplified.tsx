import Image from "next/image";

const VALUES = [
  { title: "Trusted Worldwide" },
  { title: "Full Compliance" },
  { title: "Transparent & Clear" },
  { title: "Secure & Efficient" },
];

export default function Simplified() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/forest.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-white">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] items-start">
  <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
    Simplifying Finance.
    <br /> Empowering Growth.
  </h2>

  <div className="flex md:justify-end">
    <p className="max-w-xs text-sm leading-relaxed text-white/90 text-right">
      With Fynora, businesses gain instant access to IBAN accounts and seamless SEPA/SWIFT payments. Built on security, compliance, and transparency—so you can manage finances with confidence in real time.
    </p>
  </div>
</div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {VALUES.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/10 backdrop-blur-xs px-6 py-5 text-center text-base font-semibold shadow-lg ring-1 ring-white/20"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
