import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";

import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/PageHero";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import { gallery, images, salon, serviceCategories, services, social, testimonials } from "@/data/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lubna's Beauty Salon — Premium Salon in Mirpurkhas, Sindh" },
      {
        name: "description",
        content:
          "Hair, skincare, makeup, grooming, laser and bridal packages in Mirpurkhas. Professional artistry, strict hygiene. Call 03288251926 to book.",
      },
      { property: "og:title", content: "Lubna's Beauty Salon — Premium Salon in Mirpurkhas" },
      {
        property: "og:description",
        content:
          "Premium hair, skin, makeup and bridal services in Mirpurkhas, Sindh. Book your appointment today.",
      },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    icon: Sparkles,
    title: "Expert Artistry",
    text: "Senior stylists and makeup artists trained in bridal, editorial and everyday looks.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Hygiene",
    text: "Single-use, fully disposable waxing materials and sanitised tools for every client.",
  },
  {
    icon: Star,
    title: "Personal Consultation",
    text: "Every service starts with a conversation about your features, skin and occasion.",
  },
];

function Index() {
  const featured = services.filter((s) =>
    [
      "bridal-makeup",
      "signature-makeup",
      "hydra-cellular-facial",
      "hair-treatment",
      "mehndi",
      "laser-hair-removal",
      "walima-makeup",
      "haircut",
    ].includes(s.id),
  );

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink">
        <img
          src={images.heroSalon}
          alt="Soft glam beauty portrait in warm golden salon light"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="shell relative py-32 sm:py-40">
          <div className="max-w-2xl reveal">
            <p className="eyebrow">{salon.city}, Sindh · Since day one</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Where beauty is treated as a craft.
            </h1>
            <div className="rule-gold mt-7" />
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
              Lubna&apos;s Beauty Salon brings premium hair, skincare, makeup, grooming and bridal
              artistry to Mirpurkhas — with professional care, honest advice and uncompromising
              hygiene.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/book-appointment" className="btn-base btn-gold">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-base btn-outline-gold">
                Explore Services
              </Link>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-[0.18em] text-ivory/60 uppercase">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href={salon.phoneHref} className="hover:text-gold">
                  {salon.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> {salon.city}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-cream/60 py-16 lg:py-20">
        <div className="shell grid gap-8 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-ink/10 bg-card p-8">
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={images.salonInterior}
              alt="Interior of Lubna's Beauty Salon with black and gold styling stations"
              loading="lazy"
              className="w-full object-cover shadow-lux"
            />
            <div className="absolute -right-4 -bottom-6 hidden border border-gold/40 bg-ink px-8 py-6 sm:block">
              <p className="font-display text-3xl text-gold">30+</p>
              <p className="mt-1 text-[0.6rem] tracking-[0.24em] text-ivory/70 uppercase">
                Services offered
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About the salon"
              title="A calm, professional space built around you"
              intro="From a quick threading appointment to a complete bridal journey, every service is delivered with the same attention to detail. We take time to understand your features, your skin and the occasion before we begin."
            />
            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Bridal & event specialists",
                "Disposable waxing materials",
                "Advanced laser treatments",
                "Guinot & hydra facials",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-base btn-outline-ink mt-9">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What we offer"
            title="Service categories"
            intro="Six focused categories covering everyday grooming through to complete bridal packages."
            align="center"
            tone="dark"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.name}
                to="/services"
                className="group relative isolate flex min-h-56 flex-col justify-end overflow-hidden border border-ivory/10 p-7 transition-colors duration-300 hover:border-gold/60"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="relative">
                  <h3 className="font-display text-2xl text-ivory">{cat.name}</h3>
                  <p className="mt-2 text-sm text-ivory/70">{cat.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CAROUSEL */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Signature services"
            title="Explore our most requested treatments"
            intro="Swipe through a selection of client favourites. Prices shown are placeholders."
          />
          <div className="mt-12">
            <ServiceCarousel items={featured} />
          </div>
          <Link to="/services" className="btn-base btn-outline-ink mt-10">
            View Full Service List
          </Link>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-cream/60 py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Gallery"
            title="A look at our work"
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {gallery.slice(0, 8).map((item) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-base btn-outline-ink">
              Open Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading eyebrow="Client words" title="What our clients say" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.name} className="flex h-full flex-col border border-ink/10 bg-card p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-display text-lg text-ink">{t.name}</span>
                  <span className="block text-[0.6rem] tracking-[0.22em] text-gold uppercase">
                    {t.service}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="btn-base btn-outline-ink">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="shell grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <p className="eyebrow">Follow along</p>
            <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
              See our latest looks on social media
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Book an appointment"
              title="Reserve your slot"
              intro="Send us your details and we'll confirm your appointment by phone. For same-day bookings, calling is fastest."
            />
            <a href={salon.phoneHref} className="btn-base btn-gold mt-8">
              <Phone className="h-4 w-4" /> Call {salon.phone}
            </a>
            <p className="mt-6 text-sm text-muted-foreground">{salon.hours}</p>
            <p className="mt-1 text-sm text-muted-foreground">{salon.address}</p>
          </div>
          <div className="border border-ink/10 bg-card p-6 sm:p-10">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
