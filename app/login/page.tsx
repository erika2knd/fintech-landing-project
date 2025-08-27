"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/Auth";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [state, setState] = React.useState<"idle"|"sending"|"error">("idle");
  const [error, setError] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setError("");
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const password = String(fd.get("password") || "");

    setState("sending");
    const res = await login(email, password);
    if (res.ok) {
      router.push("/"); 
    } else {
      setError(res.error);
      setState("idle");
    }
  }

  return (
    <main className="relative min-h-screen isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-purple-900 to-fuchsia-900 opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[url('/finora-hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="relative mx-auto max-w-md px-6 py-24 text-white">
        <h1 className="text-3xl font-extrabold">Welcome back</h1>
        <p className="mt-2 text-white/80 text-sm">Demo login — checks data stored in your browser.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10 text-gray-900">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Email</span>
            <input name="email" type="email" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20" required />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Password</span>
            <input name="password" type="password" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/20" required />
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-black disabled:opacity-60"
          >
            {state === "sending" ? "Logging in…" : "Log In"}
          </button>

          <p className="text-xs text-gray-600">
            No account yet?{" "}
            <Link href="/signup" className="underline">Create one</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
