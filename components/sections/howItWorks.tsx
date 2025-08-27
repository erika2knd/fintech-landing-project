import Image from "next/image";
import Link from "next/link";

const STEPS = [
  { id: "join",  title: "Join in Minutes",    icon: "/step-1.png" },
  { id: "topup", title: "Top Up Instantly",   icon: "/step-2.png" },
  { id: "tools", title: "Discover Tools",     icon: "/step-3.png" },
  { id: "ease",  title: "Transact with Ease", icon: "/step-4.png" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#eef0f2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-24 py-24">
        <div className="text-center">
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs md:text-sm font-semibold text-purple-800">
            How It Works?
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900">
            Getting Started Is Simple
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base leading-relaxed text-gray-600">
            Open your account in minutes, fund it instantly, and start managing payments with ease. Real-time tracking
            and smooth bank integration make every step effortless.
          </p>
        </div>

        <ul className="mt-8 md:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.id}>
              <article
                className="flex h-full items-center justify-between gap-4 rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-black/5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900">{s.title}</span>
                <Image
                  src={s.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain"
                  aria-hidden="true"
                />
              </article>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 md:mt-16 text-center text-3xl md:text-5xl font-extrabold text-gray-900">
          Go Global with Fynora
        </h3>

        <div className="mt-8 md:mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <Image
                src="/go-global.jpg"
                alt="Businesses can go global with Fynora"
                width={1280}
                height={720}
                className="h-[200px] w-full object-cover sm:h-[240px] lg:h-[280px]"
                sizes="(min-width:1024px) 960px, (min-width:768px) 720px, 100vw"
                priority
              />
            </div>

            <article className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
              <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                Expand Your Business Worldwide{" "}
                <br className="hidden sm:inline" />
                with Fynora Virtual IBAN
              </h4>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-600">
                Break barriers and simplify cross-border payments with a dedicated IBAN account built for your business.
                Fast, reliable, and effortless—empowering you to grow globally with confidence.
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-transform scale-100 hover:scale-105"
                >
                  Get Consultation
                </Link>
              </div>
            </article>
          </div>

          <aside className="rounded-3xl bg-[#4d2a8a] p-6 md:p-8 text-white shadow-sm ring-1 ring-white/10">
            <h4 className="text-lg md:text-xl font-semibold">
              Smarter Payment Options,<br className="hidden sm:inline" /> Zero Hassle
            </h4>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-white/85">
              Handle everyday expenses the modern way. Ditch the limitations of traditional banks and enjoy seamless
              alternative payment methods with Fynora.
            </p>

            <div className="mt-6 rounded-2xl p-4">
              <div className="mx-auto size-20 sm:size-32 md:size-56 lg:size-60">
                <div className="relative h-full w-full">
                  <Image
                    src="/orb.png"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(min-width:1024px) 240px, (min-width:768px) 224px, (min-width:640px) 192px, 160px"
                    draggable={false}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
