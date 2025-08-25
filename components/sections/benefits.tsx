"use client";
import { motion } from "framer-motion";

type Benefit = { id: string; title: string; description: string };

const BENEFITS: Benefit[] = [
  { id: "iban",  title: "IBAN Accounts", description: "Dedicated IBAN accounts tailored for your business needs." },
  { id: "sepa",  title: "SEPA & SWIFT Payments", description: "Seamless cross-border transfers via SEPA & SWIFT." },
  { id: "pam",   title: "Personalized Account Management", description: "Receive tailored strategies from our dedicated account managers." },
  { id: "online",title: "Secure Online Banking", description: "Access your account from anywhere, at any time, with secure online banking." },
  { id: "comp",  title: "Compliance & Regulatory Compliance", description: "Compliance and regulatory compliance support for your business." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-800">Benefits</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-black">Financial Solutions for Businesses</h2>
        </div>

        <div className="space-y-4">
          {BENEFITS.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <h3 className="text-lg font-semibold text-black">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


