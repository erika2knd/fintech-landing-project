import Image from "next/image";

const VALUES = [
  { title: "Globally Trusted" },
  { title: "100% Compliance" },
  { title: "Transparency You Can Trust" },
  { title: "Security & Efficiency" },
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
  {/* левый блок — заголовок */}
  <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
    Fynox Simplifies
    <br /> Your Financial <br /> Journey!
  </h2>

  {/* правый блок — абзац */}
  <div className="flex md:justify-end">
    <p className="max-w-xs text-sm leading-relaxed text-white/90 text-right">
      Fynox offers businesses easy access to personal IBAN accounts and secure
      SEPA/SWIFT payments, prioritizing security with strict compliance and
      real-time financial updates.
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
