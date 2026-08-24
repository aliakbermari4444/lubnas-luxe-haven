import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/PageHero";
import { images, salon } from "@/data/salon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Lubna's Beauty Salon, Mirpurkhas" },
      {
        name: "description",
        content:
          "Learn about Lubna's Beauty Salon in Mirpurkhas: our story, our values, our hygiene standards and the team behind every service.",
      },
      { property: "og:title", content: "About Lubna's Beauty Salon" },
      {
        property: "og:description",
        content:
          "Our story, values and hygiene standards at Lubna's Beauty Salon in Mirpurkhas, Sindh.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Sparkles,
    title: "Craft over shortcuts",
    text: "We take the time a service needs. No rushing, no one-size-fits-all looks.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene first",
    text: "Disposable waxing materials, sanitised tools and clean treatment rooms, always.",
  },
  {
    icon: HeartHandshake,
    title: "Honest advice",
    text: "If a treatment isn't right for your hair or skin, we'll tell you and suggest better.",
  },
  {
    icon: Users,
    title: "A comfortable space",
    text: "A calm, private and welcoming salon environment for women of all ages.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A premium salon built on skill, care and trust"
        intro={`Lubna's Beauty Salon is a full-service beauty destination in ${salon.city}, Sindh — bringing together hair, skincare, makeup, grooming and bridal artistry under one roof.`}
        image={images.salonInterior}
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our story" title="Beauty, done properly" />
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                The salon began with a simple frustration: too many appointments ended with a look
                that wasn&apos;t discussed, wasn&apos;t suited and didn&apos;t last. We wanted to
                build the opposite — a place where every service begins with a proper consultation
                and ends with a result you actually asked for.
              </p>
              <p>
                Today our team covers everything from a quick threading appointment to complete
                bridal journeys spanning mayoun, mehndi, bridal and walima events. We invest in
                professional products, advanced treatments like laser and hydra facials, and ongoing
                training so our work keeps pace with what our clients want.
              </p>
              <p>
                Above all, we take hygiene seriously. Waxing materials are single-use and fully
                disposable, tools are sanitised between clients, and treatment areas are cleaned
                after every appointment.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.bridalMakeup}
              alt="Bride with completed bridal makeup and gold jewellery"
              loading="lazy"
              className="aspect-3/4 w-full object-cover"
            />
            <img
              src={images.hydraFacial}
              alt="Hydra facial treatment in progress"
              loading="lazy"
              className="mt-8 aspect-3/4 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
            align="center"
            tone="dark"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-ivory/10 p-7">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-display text-xl text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-10 border border-ink/10 bg-cream/50 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Ready to book your appointment?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tell us what you need and we&apos;ll recommend the right service. {salon.hours}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book-appointment" className="btn-base btn-gold">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-base btn-outline-ink">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
