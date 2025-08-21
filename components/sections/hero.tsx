import React from "react";
import Link from "next/link";


export default function Hero() {
return (
<section
className="relative min-h-[86vh] w-full overflow-hidden"
style={{ backgroundImage: 'url(/finora-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
<div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden />
<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" aria-hidden />


<div className="relative mx-auto max-w-7xl px-6 pt-48 pb-16 md:pb-28">
<div className="mb-6 flex flex-wrap gap-3">
<span className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">Welcome to Fynox</span>
<span className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">Your financial tool</span>
</div>


<div className="grid items-start gap-8 md:grid-cols-2">
<h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
Empowering
<br />
Your Financial
<br />
Journey
</h1>


<div className="mt-12 md:mt-48 md:justify-self-end">
<div className="max-w-sm p-6 text-white shadow-xl ">
<p className="text-base leading-relaxed text-white/90">
With Fynox, you gain a partner who ensures your money moves as efficiently as you do minimizing complexity and maximizing potential.
</p>
<div className="mt-5">
<Link
href="#get-started"
className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-white/90"
>
GET STARTED
</Link>
</div>
</div>
</div>
</div>
</div>
</section>
);
}