export default function Mission() {
  return (
    <section
      id="mission"
      className="relative isolate"
      style={{
        backgroundImage: "url(/mission-bg.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32 text-center text-white">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur">
          Mission
        </span>

        <h2 className="mt-4 text-lg font-extrabold leading-tight sm:text-3xl md:text-5xl lg:text-5xl">
          Fynox was founded with the mission
          <br className="hidden md:block" />
          to empower businesses by providing
          <br className="hidden md:block" />
          tailored financial solutions that simplify
          <br className="hidden md:block" />
          the complexities of traditional banking.
        </h2>
      </div>
    </section>
  );
}
