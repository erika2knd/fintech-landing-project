import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#eef0f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid items-center gap-10 md:gap-12
            rounded-[28px] bg-white p-8 md:p-12
            shadow-sm ring-1 ring-black/5
            lg:grid-cols-2
          "
        >
          <div className="order-2 lg:order-1">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs md:text-sm font-semibold text-purple-800">
              About
            </span>

            <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-gray-700">
              At Fynora, we empower you to take control of your finances. Our next-gen
              e-wallet delivers speed, clarity, and seamless transactions, designed to
              simplify your financial life and unlock more freedom.
            </p>

            <h2 className="mt-8 md:mt-10 text-3xl md:text-5xl font-extrabold text-gray-900">
              Your Money <br className="hidden sm:block" />
              Made Smarter
            </h2>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
  <div className="relative w-full max-w-xl">
    <div className="rounded-[28px] bg-gradient-to-br from-white to-gray-50 ring-1 ring-black/5 shadow-sm p-px">
      <div className="relative overflow-hidden rounded-[27px] bg-white transform-gpu">
        <div className="relative aspect-[16/10] md:aspect-[16/9]">
          <Image
            src="/hand.png"
            alt="Hand holding a payment card with UI overlays"
            fill
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 600px, 100vw"
            className="object-cover md:object-cover md:scale-[1.01]"
            priority
            draggable={false}
          />
        </div>
      </div>
    </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
