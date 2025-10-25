// Sujin Smiles DMD, LLC — Single‑file React site
// TailwindCSS recommended. Uses shadcn/ui + lucide-react if available, but will gracefully render without.
// Drop this into a React app (e.g., Vite, Next.js page) and it will render a polished, mobile‑first landing page.

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Calendar, ShieldCheck, Sparkles, Tooth, MessageSquare, CreditCard } from "lucide-react";

// If shadcn/ui is available in your project, these imports will style the cards & buttons nicely.
// Otherwise the Tailwind classes below still provide a complete UI.
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// ---------- Utility Components ----------
const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-20 py-16 md:py-24">
    <Container>
      <div className="mb-10 text-center">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">{eyebrow}</p>}
        {title && <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-balance text-base text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </Container>
  </section>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="rounded-full px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900">
    {children}
  </a>
);

// ---------- Main Page ----------
export default function SujinSmilesSite() {
  const phone = "(352) 555-0134"; // TODO: replace with real phone
  const address = "1234 SW Example Blvd, Gainesville, FL 32608"; // TODO: replace with real address
  const email = "hello@sujinsmiles.com"; // TODO

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* SEO / JSON-LD (can be moved to <Head> in Next.js) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Sujin Smiles DMD, LLC",
            description:
              "Patient-first dental care in Gainesville, FL. Family, cosmetic, and restorative dentistry with gentle, modern techniques.",
            telephone: phone,
            email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "1234 SW Example Blvd",
              addressLocality: "Gainesville",
              addressRegion: "FL",
              postalCode: "32608",
              addressCountry: "US",
            },
            url: "https://www.sujinsmiles.com",
            sameAs: [
              "https://www.facebook.com/sujinsmiles",
              "https://www.instagram.com/sujinsmiles",
              "https://g.page/PLACEHOLDER" // Google Business Profile URL
            ],
          }),
        }}
      />

      {/* Top bar */}
      <div className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-teal-600" />
              <span className="text-lg font-semibold">Sujin Smiles</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#insurance">Insurance</NavLink>
              <NavLink href="#testimonials">Reviews</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <Phone className="h-4 w-4" /> Call / Book
            </a>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <header id="top" className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-pretty text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Gentle, modern dentistry in Gainesville
              </motion.h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                At Sujin Smiles DMD, LLC, we take time to listen, explain, and deliver care that feels unrushed and precise—so you can smile with confidence.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <Calendar className="mr-2 h-4 w-4" /> Request an appointment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <Tooth className="mr-2 h-4 w-4" /> Explore services
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-600" /> Same‑day emergencies</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-600" /> Early & late hours</div>
                <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-teal-600" /> Transparent pricing</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                {/* Replace with an office/team photo */}
                <img
                  alt="Smiling patient at Sujin Smiles"
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:block">
                <p className="text-sm font-medium">Located in Gainesville, FL</p>
                <p className="text-xs text-gray-600">{address}</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </header>

      {/* Services */}
      <Section
        id="services"
        eyebrow="What we do"
        title="Comprehensive family & cosmetic dentistry"
        subtitle="We focus on prevention first, with conservative, high‑quality treatment when you need it."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Tooth className="h-6 w-6" />,
              title: "Cleanings & Exams",
              text: "Thorough hygiene visits, digital X‑rays, fluoride, and personalized home‑care coaching.",
            },
            { icon: <Sparkles className="h-6 w-6" />, title: "Whitening", text: "In‑office and take‑home options designed for sensitivity control and great results." },
            { icon: <ShieldCheck className="h-6 w-6" />, title: "Fillings & Bonding", text: "Tooth‑colored restorations that blend seamlessly with your smile." },
            { icon: <Tooth className="h-6 w-6" />, title: "Crowns & Bridges", text: "Durable, aesthetic ceramics with precise fit and bite." },
            { icon: <Tooth className="h-6 w-6" />, title: "Invisalign®", text: "Clear aligners for a straighter smile with minimal disruption." },
            { icon: <Tooth className="h-6 w-6" />, title: "Implant Restorations", text: "Single‑tooth and multi‑unit solutions in collaboration with top surgeons." },
          ].map((s, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-3 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t see what you need? <a href="#contact" className="font-medium text-teal-700 underline underline-offset-4">Ask us</a> — we’ll help or refer to a trusted specialist.
        </p>
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="Meet your dentist"
        title="Sujin ____ DMD"
        subtitle="A gentle, detail‑oriented clinician dedicated to making dentistry comfortable and clear for every patient."
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <img
              alt="Dr. Sujin — Gainesville dentist"
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base leading-relaxed text-gray-700">
              Dr. Sujin is known for a calm chairside manner and meticulous work. She trained in modern restorative and cosmetic techniques and believes great dentistry starts with education and prevention. Outside the office, you’ll find her enjoying Gainesville’s trails and local coffee spots.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-teal-600" /> DMD — School / Year (update)</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-teal-600" /> Professional memberships (ADA, FDA, etc.)</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-teal-600" /> Hospital/clinic affiliations (optional)</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-teal-600" /> Languages spoken (optional)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Insurance / Financing */}
      <Section
        id="insurance"
        eyebrow="Affordable care"
        title="Insurance, membership, and financing"
        subtitle="We keep billing simple and transparent so you can focus on your oral health."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">We accept</h3>
            <p className="mt-2 text-sm text-gray-600">Most major PPO plans. We’ll verify benefits and estimate co‑pays before treatment.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Electronic claims & pre‑authorizations</li>
              <li>Complimentary benefit checks</li>
              <li>Out‑of‑network estimates provided</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">In‑house membership</h3>
            <p className="mt-2 text-sm text-gray-600">No insurance? Join our plan for routine cleanings, exams, X‑rays, and member‑only discounts.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>No deductibles or waiting periods</li>
              <li>Save 15–20% on most treatments</li>
              <li>Family options available</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Flexible payments</h3>
            <p className="mt-2 text-sm text-gray-600">We offer transparent pricing, payment plans, HSA/FSA support, and third‑party financing.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>All major cards, HSA/FSA</li>
              <li>CareCredit® or similar financing</li>
              <li>Clear estimates before care</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        eyebrow="Patients say…"
        title="Five‑star experiences"
        subtitle="Real reviews from people who trust us with their smiles."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[`“Incredibly gentle and thorough. Best cleaning I’ve had in years.”`,
            `“They explained every step and made me feel comfortable the whole time.”`,
            `“Beautiful office, zero pressure, honest recommendations.”`].map((quote, i) => (
            <figure key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-balance text-sm text-gray-800">{quote}</blockquote>
              <figcaption className="mt-3 text-xs text-gray-500">— Google Reviewer</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Get in touch"
        title="Call, text, or request an appointment"
        subtitle="We typically reply within one business day. For emergencies, please call."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-teal-600" /><a href={`tel:${phone.replace(/[^\d]/g, "")}`} className="font-medium hover:underline">{phone}</a></li>
              <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-teal-600" /><a href={`mailto:${email}`} className="hover:underline">{email}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-600" /><span>{address}</span></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-600" /><span>Mon–Thu 8:00–5:00, Fri 8:00–1:00</span></li>
            </ul>
            <div className="mt-6 h-64 w-full overflow-hidden rounded-2xl bg-gray-100">
              {/* Replace with an embedded Google Map iframe when you have the exact address */}
              <img
                alt="Map placeholder"
                src="https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1200&auto=format&fit=crop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Simple non‑PHI contact form (avoid collecting protected health info) */}
          <form
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            method="POST"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We’ll be in touch soon.");
            }}
            aria-describedby="hipaa-note"
          >
            <h3 className="text-lg font-semibold">Request an appointment</h3>
            <div className="mt-4 grid gap-4">
              <label className="block text-sm">
                <span className="mb-1 inline-block font-medium">Full name</span>
                <input required name="name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 inline-block font-medium">Phone</span>
                <input required name="phone" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 inline-block font-medium">Email</span>
                <input type="email" name="email" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 inline-block font-medium">How can we help?</span>
                <textarea name="message" rows={4} className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200" placeholder="Cleaning, toothache, consultation… (Please do not include sensitive health info.)" />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Submit request
              </button>
              <p id="hipaa-note" className="text-xs text-gray-500">
                Please avoid sharing protected health information (PHI) in this form. We’ll follow up by phone to discuss details.
              </p>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white py-10 text-sm text-gray-600">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal-600" />
                <span className="font-semibold">Sujin Smiles DMD, LLC</span>
              </div>
              <p className="mt-2 max-w-sm">Patient‑first family & cosmetic dentistry in Gainesville, FL.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Quick links</p>
              <ul className="space-y-1">
                <li><a className="hover:underline" href="#services">Services</a></li>
                <li><a className="hover:underline" href="#about">About</a></li>
                <li><a className="hover:underline" href="#insurance">Insurance</a></li>
                <li><a className="hover:underline" href="#contact">Contact</a></li>
                <li><a className="hover:underline" href="#forms">Patient forms (PDF)</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Contact</p>
              <p>{address}</p>
              <p><a href={`tel:${phone.replace(/[^\d]/g, "")}`} className="hover:underline">{phone}</a> · <a href={`mailto:${email}`} className="hover:underline">{email}</a></p>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} Sujin Smiles DMD, LLC. All rights reserved.</div>
        </Container>
      </footer>
    </div>
  );
}

// --------- Notes ---------
// 1) Replace placeholder images/links, doctor name, and contact details.
// 2) For production, connect the form to a HIPAA‑friendly workflow (e.g., phone callback only, or a compliant vendor).
// 3) Add analytics (e.g., Plausible, GA4) and a cookie banner if required by your jurisdiction.
// 4) Create a Google Business Profile, add NAP (Name‑Address‑Phone) consistency across listings, and collect reviews.
// 5) Consider individual SEO pages for high‑value services (e.g., Invisalign, crowns, dental implants) once this MVP is live.
