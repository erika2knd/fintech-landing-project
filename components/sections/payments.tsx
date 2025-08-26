import Image from "next/image";

export default function Payments() {
  const basePill =
    "rounded-full bg-[#4d2a8a] px-4 py-1.5 text-xs font-semibold text-white shadow-sm md:text-sm text-center whitespace-nowrap";

  return (
    <section id="payments" className="bg-[#f3f4f6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-24 py-24">
        <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm">
          <h2 className="text-center text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            Growing your business takes focus.
            <br className="hidden sm:block" />
            <span className="block">Handling payments should be simple.</span>
          </h2>

          <div
            className="relative mx-auto mt-14 hidden max-w-3xl md:flex md:justify-center"
            aria-describedby="payments-desc"
          >
            <Image
              src="/phone.png"
              alt="Payments illustration"
              width={540}
              height={480}
              priority
              sizes="(min-width: 768px) 540px, 100vw"
              className="h-auto w-full max-w-[540px]"
            />

            <span
              className={`${basePill} absolute -top-3 left-1/2 -translate-x-1/2`}
            >
              Customisable Rules
            </span>

            <span
              className={`${basePill} absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[60%] sm:-translate-x-1/3`}
            >
              Optimised Dashboards
            </span>

            <span
              className={`${basePill} absolute top-1/2 right-0 -translate-y-1/2 translate-x-[60%] sm:translate-x-1/3`}
            >
              Effortless Transactions
            </span>

            <span
              className={`${basePill} absolute -bottom-5 left-1/2 -translate-x-1/2`}
            >
              Modular Reporting
            </span>
          </div>

          <p id="payments-desc" className="sr-only">
            Key features: customisable rules, optimised dashboards, effortless
            transactions, modular reporting.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 md:hidden">
            <div className="flex flex-wrap justify-center gap-3">
              <span className={basePill}>Customisable Rules</span>
              <span className={basePill}>Optimised Dashboards</span>
            </div>

            <Image
              src="/phone.png"
              alt="Payments illustration"
              width={320}
              height={280}
              priority
              sizes="100vw"
              className="h-auto w-[240px] xs:w-[260px] sm:w-[300px]"
            />

            <div className="flex flex-wrap justify-center gap-3">
              <span className={basePill}>Effortless Transactions</span>
              <span className={basePill}>Modular Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



