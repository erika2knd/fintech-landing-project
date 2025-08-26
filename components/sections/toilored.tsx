import Image from "next/image";
import Link from "next/link";

export default function Tailored() {
  return (
    <section id="contact" className="bg-[#eef0f2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-24 py-24">
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs md:text-sm font-semibold text-purple-800">
                Contact Us
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
                Financial Solutions
                <br /> Made for You
              </h2>

              <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-gray-600">
                Every business is unique. That’s why we design flexible payment
                solutions tailored to your goals, your industry, and your growth.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-transform scale-100 hover:scale-105"
              >
                GET CONSULTATION
              </Link>
            </div>

            <div className="ml-auto grid w-fit grid-cols-2 grid-rows-2 gap-2 md:gap-3">
              <div className="col-start-2 flex justify-center">
                <Image
                  src="/toilored2.png"
                  alt="Finance illustration 1"
                  width={300}
                  height={300}
                  className="w-24 md:w-36 rounded-2xl object-cover"
                />
              </div>

              <div className="row-start-2 col-start-1 flex justify-center">
                <Image
                  src="/toilored1.png"
                  alt="Finance illustration 2"
                  width={300}
                  height={300}
                  className="w-24 md:w-36 -mt-1 md:-mt-2 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

