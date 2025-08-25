import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#eef0f2] border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-end">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-gray-900">Fynora</span>
            </Link>
            <address className="mt-5 not-italic text-sm leading-6 text-gray-700">
              TRUSTPAY SP. Z O.O.<br />
              UL. Hoza 86/210, 00-682<br />
              Warszawa
            </address>
          </div>

          <div className="flex justify-center gap-x-8 text-sm">
            <Link href="/cookies" className="text-gray-800 hover:opacity-80">
              Cookies Policy
            </Link>
            <Link href="/privacy" className="text-gray-800 hover:opacity-80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-800 hover:opacity-80">
              Terms and Conditions
            </Link>
            <Link href="/handling" className="text-gray-800 hover:opacity-80">
              Handling
            </Link>
          </div>

          <div className="text-sm text-gray-800">
            Copyright © {year} Fynox
          </div>
        </div>
      </div>
    </footer>
  );
}

