import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { images, salon, social } from "@/data/salon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Lubna's Beauty Salon, Mirpurkhas" },
      {
        name: "description",
        content:
          "Call 03288251926 or visit Lubna's Beauty Salon in Mirpurkhas, Sindh. Open daily 10:00 AM – 9:00 PM. Send an appointment request online.",
      },
      { property: "og:title", content: "Contact Lubna's Beauty Salon" },
      {
        property: "og:description",
        content: "Phone, address, opening hours and social channels for our Mirpurkhas salon.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and see us"
        intro={`We're in ${salon.address}. Call us for the fastest response, or send an appointment request and we'll confirm by phone.`}
        image={images.salonInterior}
      />

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Salon details" title="Get in touch" />
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Phone / WhatsApp
                  </span>
                  <a href={salon.phoneHref} className="font-display text-xl text-ink hover:text-gold">
                    {salon.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Address
                  </span>
                  <span className="text-ink">{salon.address}</span>
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    Opening hours
                  </span>
                  <span className="text-ink">{salon.hours}</span>
                </span>
              </li>
            </ul>

            <h3 className="mt-10 text-[0.7rem] tracking-[0.26em] text-muted-foreground uppercase">
              Follow us
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline-ink"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <a href={salon.phoneHref} className="btn-base btn-gold w-full sm:w-auto">
                <Phone className="h-4 w-4" /> Call the salon
              </a>
            </div>
          </div>

          <div className="border border-ink/10 bg-card p-6 sm:p-10">
            <h2 className="font-display text-3xl text-ink">Send an appointment request</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fill in your details and we&apos;ll call you back to confirm the slot.
            </p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="shell">
          <div className="overflow-hidden border border-ink/10">
            <iframe
              title="Map showing Mirpurkhas, Sindh"
              src="https://www.google.com/maps?q=Mirpurkhas,%20Sindh,%20Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 sm:h-[460px]"
            />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Need directions or exact location details? Call us on{" "}
            <a href={salon.phoneHref} className="text-ink underline hover:text-gold">
              {salon.phone}
            </a>{" "}
            or{" "}
            <Link to="/book-appointment" className="text-ink underline hover:text-gold">
              book an appointment
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
