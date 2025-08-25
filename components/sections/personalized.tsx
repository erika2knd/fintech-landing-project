import Image from "next/image";

const FEATURES = [
  {
    title: "Smart, Simple Interface",
    description:
      "Designed for every stage—from bold startups to global enterprises.",
  },
  {
    title: "Customized Solutions",
    description:
      "Flexible financial tools built to match your industry, scale, and ambitions.",
  },
];

export default function Personalized() {
  return (
    <section className="bg-[#eef0f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 md:text-5xl">
          Personalized Finance,
          <br className="hidden md:block" /> Built Around You
        </h2>

        <div className="mt-10 rounded-[28px] bg-[#4d2a8a] p-6 md:p-10 shadow-sm ring-1 ring-white/10">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
            <div className="text-white">
              <h3 className="text-xl md:text-2xl font-semibold">
                Power Your Business
                <br /> with a Fynora Account
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">
                Unlock e-money services crafted to fit your unique goals. From seamless transactions to global expansion, Fynox gives you the tools to grow with confidence.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[18px]">
                <Image
                  src="/man.png"
                  alt="Businessman"
                  width={960}
                  height={540}
                  className="h-[190px] w-full object-cover md:h-[220px] lg:h-[240px]"
                  priority
                />
              </div>

              <div className="absolute -left-24 -top-[-50px] hidden md:block">
                <div className="relative w-[220px] h-[140px] rounded-xl bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
                  <Image
                    src="/card.png"
                    alt="Bank Card"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <article
              key={i}
              className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
