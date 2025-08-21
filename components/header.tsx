import React from "react";
import Link from "next/link";


export default function Header() {
return (
<header className="absolute inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-6">
<nav className="flex h-20 items-center justify-between">
<Link href="/" className="inline-flex items-center gap-2">
<span className="text-2xl font-bold text-white">Fynora</span>
</Link>


<ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
<li><Link href="#experience" className="hover:text-white">About</Link></li>
<li><Link href="#features" className="hover:text-white">Features</Link></li>
<li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
<li><Link href="#benefits" className="hover:text-white">Benefits</Link></li>
<li><Link href="#contacts" className="hover:text-white">Contacts</Link></li>
</ul>


<div className="flex items-center gap-3">
<Link
href="#signup"
className="hidden sm:inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/25"
>
Sign Up
</Link>
<Link
href="/login"
className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-white/90"
>
Log In
</Link>
</div>
</nav>
</div>
</header>
);
}
