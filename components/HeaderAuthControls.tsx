"use client";
import Link from "next/link";
import { useAuth } from "@/components/Auth";

type Props = {
  scrolled?: boolean;
  variant?: "desktop" | "mobile"; 
};

export default function HeaderAuthControls({ scrolled, variant = "desktop" }: Props) {
  const { user, logout } = useAuth();

  if (!user) {
    if (variant === "mobile") {
      return (
        <div className="flex flex-col gap-2">
          <Link
            href="/login"
            className={`w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
              scrolled ? "bg-gray-900 text-white hover:bg-black" : "bg-white text-gray-900 hover:bg-white/90"
            }`}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className={`w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium ${
              scrolled ? "text-gray-900 bg-gray-900/5 hover:bg-gray-900/10" : "text-white bg-white/15 hover:bg-white/25"
            }`}
          >
            Sign Up
          </Link>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-3">
        <Link
          href="/signup"
          className={`hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
            scrolled ? "text-gray-900 bg-gray-900/5 hover:bg-gray-900/10" : "text-white bg-white/15 hover:bg-white/25"
          }`}
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
            scrolled ? "bg-gray-900 text-white hover:bg-black" : "bg-white text-gray-900 hover:bg-white/90"
          }`}
        >
          Log In
        </Link>
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-2">
        <span className={`${scrolled ? "text-gray-700" : "text-white/80"} text-sm text-center`}>
          Hi, <b>{user.name}</b>
        </span>
        <button
          onClick={logout}
          className={`w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
            scrolled ? "bg-gray-900 text-white hover:bg-black" : "bg-white text-gray-900 hover:bg-white/90"
          }`}
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className={`hidden sm:inline text-sm ${scrolled ? "text-gray-700" : "text-white/80"}`}>
        Hi, <b>{user.name}</b>
      </span>
      <button
        onClick={logout}
        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
          scrolled ? "bg-gray-900 text-white hover:bg-black" : "bg-white text-gray-900 hover:bg-white/90"
        }`}
      >
        Log Out
      </button>
    </div>
  );
}

