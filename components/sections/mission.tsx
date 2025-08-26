export default function Mission() {
  return (
    <section
      id="mission"
      className="relative isolate overflow-hidden bg-[url('/mission-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-24 py-24 text-center text-white">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur">
          Mission
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
          Finance that works for you
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-white/90">
          We exist to make finance simple and empowering. Fynora turns traditional banking into
          tailored, transparent tools that streamline operations and unlock growth for modern
          businesses.
        </p>
      </div>
    </section>
  );
}

