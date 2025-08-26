"use client";
import { motion, useReducedMotion } from "framer-motion";

type Benefit = { id: string; title: string; description: string };

const BENEFITS: Benefit[] = [
  { id: "iban",   title: "IBAN Accounts",                 description: "Dedicated IBAN accounts tailored for your business needs." },
  { id: "sepa",   title: "SEPA & SWIFT Payments",         description: "Seamless cross-border transfers via SEPA & SWIFT." },
  { id: "pam",    title: "Personalized Account Management", description: "Receive tailored strategies from our dedicated account managers." },
  { id: "online", title: "Secure Online Banking",         description: "Access your account from anywhere, at any time, with secure online banking." },
  { id: "comp",   title: "Compliance & Regulatory Support", description: "Guidance and support to help you meet compliance and regulatory requirements." },
];

export default function Benefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="benefits" aria-labelledby="benefits-title" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-24 py-24 grid items-start gap-10 md:gap-12 md:grid-cols-2">
        <header>
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs md:text-sm font-semibold text-purple-800">
            Benefits
          </span>
          <h2 id="benefits-title" className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Financial Solutions for Businesses
          </h2>
          <p className="mt-3 max-w-prose text-sm md:text-base leading-relaxed text-gray-600">
            Everything you need to move money confidently and operate across borders.
          </p>
        </header>

        <ul className="space-y-4">
          {BENEFITS.map((b, i) => (
            <li key={b.id}>
              <motion.article
                initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.12 }}
                className="rounded-2xl bg-white p-6 md:p-7 shadow-sm ring-1 ring-black/5"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-600">{b.description}</p>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


