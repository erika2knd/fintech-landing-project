import Image from "next/image";
import Link from "next/link";

const STEPS = [
  { title: "Sign Up", icon: "/step-1.png" },
  { title: "Add Funds", icon: "/step-2.png" },
  { title: "Explore Features", icon: "/step-3.png" },
  { title: "Make Transactions", icon: "/step-4.png" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#eef0f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-purple-200 px-4 py-1 text-xs font-semibold text-black">
            How It Works?
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Quick And Easy
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Creating a Fynox account is simple. Easily top up, enjoy instant transfers,
            and track transactions in real-time with seamless integration across major banks.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="text-base font-semibold text-gray-900">{s.title}</span>
              <Image
                src={s.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-center text-3xl font-extrabold text-gray-900 md:mt-20 md:text-4xl">
          Go Global with Fynox
        </h3>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <Image
                src="/go-global.jpg"
                alt="Go global"
                width={1280}
                height={720}
                className="h-[160px] w-full object-cover md:h-[220px] lg:h-[260px]"
                priority
              />
            </div>
            <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h4 className="text-lg font-semibold text-gray-900">
                Take Your Business Global
                <br /> with Finora Virtual Accountorb
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Streamline your cross-border payments effortlessly with a dedicated IBAN account tailored
                for your business needs. Set up your IBAN today to revolutionize your payment processes.
              </p>
              <div className="mt-5">
                <Link
                  href="#get-started"
                  className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-black"
                >
                  Get Consultation
                </Link>
              </div>
            </article>
          </div>

          <aside className="rounded-3xl bg-[#4d2a8a] p-6 text-white shadow-sm ring-1 ring-white/10">
            <h4 className="text-lg font-semibold">
              Set Up Alternative
              <br /> Payment Methods
            </h4>
            <p className="mt-3 text-sm text-white/80">
              Manage your daily expenses easily—no more traditional banking hassles.
            </p>

            <div className="overflow-hidden rounded-2xl p-6">
              <Image
                src="/orb.png"
                alt=""
                width={1000}
                height={1000}
                className="h-100 w-auto md:h-120px md:w-120px"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
