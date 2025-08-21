import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 rounded-3xl bg-white px-8 py-16 shadow-sm lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-purple-200 px-4 py-1 text-sm font-semibold text-black">
              About
            </span>

            <p className="mt-6 max-w-md text-base text-gray-600">
              At Fynox, we transform how you handle money. Our innovative
              e-wallet is built to offer seamless convenience, bringing a range
              of features that simplify your financial world and enhance your
              everyday transactions.
            </p>

            <h2 className="mt-10 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Experience the Freedom <br />
              of Digital Payments
            </h2>
          </div>

<div className="flex justify-center lg:justify-end">
  <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-sm overflow-hidden">
    <div className="relative aspect-[16/10]">
      <Image
        src="/hand.png"
        alt="Hand with card"
        fill                
        className="object-contain md:scale-110 md:-translate-x-2 md:-translate-y-2"
        priority
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
