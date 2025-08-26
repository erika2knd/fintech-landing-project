import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact-bg.jpg"         
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-24 py-24 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold">Get in touch</h1>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/90">
          Have a question or want a quick consultation? Send a message using the form below.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
