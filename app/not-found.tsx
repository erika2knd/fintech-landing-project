"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center
                     bg-gradient-to-br from-gray-900 via-purple-900 to-fuchsia-900
                     text-white text-center px-6">
      <Player
        autoplay
        loop
        src="/404.json"                 // берём файл из /public по URL
        className="w-72 h-72 md:w-96 md:h-96"
      />

      <h1 className="mt-6 text-3xl md:text-5xl font-bold">Oops! Page not found</h1>
      <p className="mt-2 text-white/70 max-w-md">
        The page you’re looking for doesn’t exist or has moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3
                   text-sm font-semibold text-gray-900 hover:bg-white/90"
      >
        Go back home
      </Link>
    </main>
  );
}




