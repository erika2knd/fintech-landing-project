import Image from "next/image";

export default function Tailored() {
  return (
    <section className="bg-[#eef0f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 md:p-12 shadow-sm">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          
          <div>
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-800">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
              Tailored <br /> Financial <br /> Solutions
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-600">
              We know that one size doesn't fit all. That’s why we provide
              customized payment solutions designed to fit your specific business needs.
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800">
              GET CONSULTATION
            </button>
          </div>

          <div className="w-fit ml-auto grid grid-cols-[auto_auto] grid-rows-2 gap-2 md:gap-3">
  {/* верхняя справа — тянем к центру */}
  <div className="col-start-2">
    <Image
      src="/toilored2.png"
      alt="Finance Illustration 1"
      width={300}
      height={300}
      className="rounded-2xl object-cover w-24 h-auto md:w-36 justify-self-start"
    />
  </div>

  {/* нижняя слева — тянем к центру */}
  <div className="row-start-2 col-start-1">
    <Image
      src="/toilored1.png"
      alt="Finance Illustration 2"
      width={300}
      height={300}
      className="rounded-2xl object-cover w-24 h-auto md:w-36 justify-self-end -mt-1 md:-mt-2"
    />
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
