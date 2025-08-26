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
    <section id="personalized" className="bg-[#eef0f2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-24 py-24">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-gray-900">
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
              <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-white/85">
                Unlock e-money services crafted to fit your unique goals. From seamless
                transactions to global expansion, <strong>Fynora</strong> gives you the
                tools to grow with confidence.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[18px]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/man.png"
                    alt="Business owner using Fynora"
                    fill
                    priority
                    sizes="(min-width:1024px) 640px, (min-width:768px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-20 -top-[-50px] hidden md:block">
                <div className="relative w-[220px] aspect-[11/7] overflow-hidden rounded-xl bg-white/10 backdrop-blur-md shadow-lg ring-1 ring-white/20">
                  <Image
                    src="/card.png"
                    alt="Fynora virtual card"
                    fill
                    priority={false}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <li key={i}>
              <article className="rounded-[24px] bg-white p-6 md:p-7 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
