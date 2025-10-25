import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Calendar, ShieldCheck, Sparkles, Tooth, MessageSquare, CreditCard } from 'lucide-react';

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

export default function App() {
  const phone = "(352) 555-0134"; // TODO: replace with real phone
  const address = "1234 SW Example Blvd, Gainesville, FL 32608"; // TODO: replace with real address
  const email = "hello@sujinsmiles.com"; // TODO

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
              "https://g.page/PLACEHOLDER"
            ],
          }),
        }}
      />
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
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-600" /> Same-day emergencies</div>
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

      <Section
        id="services"
        eyebrow="What we do"
        title="Comprehensive family & cosmetic dentistry"
        subtitle="We focus on prevention first, with conservative, high-quality treatment when you need it."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Tooth className="h-6 w-6" />,
              title: "Cleanings & Exams",
              text: "Thorough hygiene visits, digital X-rays, fluoride, and personalized home-care coaching.",
            },
            { icon: <Sparkles className="h-6 w-6" />, title: "Whitening", text: "In-office and take-home options designed for sensitivity control and great results." },
            { icon: <ShieldCheck className="h-6 w-6" />, title: "Fillings & Bonding", text: "Tooth-colored restorations that blend seamlessly with your smile." },
            { icon: <Tooth className="h-6 w-6" />, title: "Crowns & Bridges", text: "Durable, aesthetic ceramics with precise fit and bite." },
            { icon: <Tooth className="h-6 w-6" />, title: "Invisalign®", text: "Clear aligners for a straighter smile with minimal disruption." },
            { icon: <Tooth className="h-6 w-6" />, title: "Implant Restorations", text: "Single-tooth and multi-unit solutions in collaboration with top surgeons." },
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
