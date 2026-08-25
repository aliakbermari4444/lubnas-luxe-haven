import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { images, salon, services } from "@/data/salon";

export const Route = createFileRoute("/book-appointment")({
  validateSearch: (search: { service?: unknown }) => {
    const service = search.service;
    return typeof service === "string" ? { service } : {};
  },
  head: () => ({
    meta: [
      { title: "Book an Appointment — Lubna's Beauty Salon, Mirpurkhas" },
      {
        name: "description",
        content:
          "Request your appointment at Lubna's Beauty Salon in Mirpurkhas. Choose your service, pick a date and we'll confirm by phone.",
      },
      { property: "og:title", content: "Book an Appointment — Lubna's Beauty Salon" },
      {
        property: "og:description",
        content: "Send an appointment request for hair, skin, makeup, grooming or bridal services.",
      },
    ],
  }),
  component: BookAppointmentPage,
});

const steps = [
  { n: "01", title: "Send your request", text: "Share your name, phone, service and preferred date." },
  { n: "02", title: "We call you back", text: "We confirm availability and answer any questions." },
  { n: "03", title: "Your appointment", text: "Arrive a few minutes early for your consultation." },
];

function BookAppointmentPage() {
  const search = Route.useSearch();
  const selected = services.find((s) => s.id === search.service);

  return (
    <>
      <PageHero
        eyebrow="Book an appointment"
        title="Reserve your time with us"
        intro="Send your details below and we'll confirm your slot by phone. For same-day appointments, calling is fastest."
        image={images.hero ?? images.heroSalon}
      />

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="border border-ink/10 bg-card p-6 sm:p-10">
            {selected && (
              <p className="mb-6 border border-gold/50 bg-cream/60 px-5 py-3 text-sm text-ink">
                Selected service:{" "}
                <span className="font-display text-lg">{selected.name}</span>
              </p>
            )}
            <BookingForm {...(selected ? { defaultService: selected.id } : {})} />
          </div>

          <div>
            <h2 className="font-display text-3xl text-ink">How booking works</h2>
            <div className="rule-gold mt-5" />
            <ol className="mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl text-gold">{s.n}</span>
                  <span>
                    <span className="block font-display text-xl text-ink">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 border border-ink/10 bg-cream/50 p-7">
              <h3 className="text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                Salon details
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-ink">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href={salon.phoneHref} className="hover:text-gold">
                    {salon.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {salon.address}
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {salon.hours}
                </li>
              </ul>
              <a href={salon.phoneHref} className="btn-base btn-gold mt-7 w-full">
                Call to confirm
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
