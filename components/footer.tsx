import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#eef0f2] border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-24 py-12">
        <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] items-start md:items-end">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-gray-900">Fynora</span>
            </Link>
            <address
              className="mt-5 not-italic text-sm leading-6 text-gray-700"
              aria-label="Company address"
            >
              Company name<br />
              address<br />
              address
            </address>
          </div>

          <nav aria-label="Footer links" className="flex justify-center md:justify-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/cookie"
                  className="text-gray-800 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 rounded"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-800 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-800 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 rounded"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/handling"
                  className="text-gray-800 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40 rounded"
                >
                  Handling
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm text-gray-800 text-center md:text-right">
            © {year} Fynora. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


