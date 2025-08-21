"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "IBAN Accounts",
    description: "Dedicated IBAN accounts tailored for your business needs.",
  },
  {
    title: "SEPA & SWIFT Payments",
    description: "Seamless cross-border transfers via SEPA & SWIFT.",
  },
  {
    title: "Personalized Account Management",
    description:
      "Receive tailored financial strategies designed just for you by our dedicated account managers.",
  },
  {
    title: "24/7 Customer Support",
    description: "Access to 24/7 customer support for all your financial needs.",
  },
  {
    title: "Secure and Reliable",
    description:
      "Trust is the bedrock of Fynox. We prioritize your financial security by employing advanced encryption and robust security protocols to protect your transactions and personal data.",
  },
  
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold text-black">
            Benefits
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl text-black">
            Financial Solutions for Businesses
          </h2>
        </div>

        <div className="space-y-4">
          {benefits.map((item, i) => {
            const { ref, inView } = useInView({
              triggerOnce: true, 
              threshold: 0.3, 
            });

            return (
              <motion.div
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-2xl bg-white shadow-lg p-6"
              >
                <h3 className="font-semibold text-lg text-black">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
