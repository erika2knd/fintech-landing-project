import Image from "next/image";

export default function Payments() {
  return (
    <section id="payments" className="bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white px-6 py-12 shadow-sm">
        <h2 className="text-center text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
          Growing your business takes focus.<br className="hidden sm:block" />
          <span className="block"> Handling payments should be simple.</span>
        </h2>

        <div className="relative mx-auto mt-14 flex max-w-3xl justify-center">
          <Image
            src="/phone.png"
            alt="Payments illustration"
            width={540}
            height={480}
            priority
            className="h-480px w-540px"
          />

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4d2a8a] px-4 py-1.5 text-xs font-semibold text-white shadow-sm md:text-sm">
            Customisable Rules
          </span>

          <span className="absolute top-1/2 -left-20 -translate-y-1/2 rounded-full bg-[#4d2a8a] px-4 py-1.5 text-xs font-semibold text-white shadow-sm md:text-sm">
            Optimised Dashboards
          </span>

          <span className="absolute top-1/2 -right-20 -translate-y-1/2 rounded-full bg-[#4d2a8a] px-4 py-1.5 text-xs font-semibold text-white shadow-sm md:text-sm">
            Effortless Transactions
          </span>

          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#4d2a8a] px-4 py-1.5 text-xs font-semibold text-white shadow-sm md:text-sm">
            Modular Reporting
          </span>
        </div>
      </div>
    </section>
  );
}
