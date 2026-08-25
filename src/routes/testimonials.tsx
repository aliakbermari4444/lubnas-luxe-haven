import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/PageHero";
import { images, salon, testimonials } from "@/data/salon";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — Lubna's Beauty Salon, Mirpurkhas" },
      {
        name: "description",
        content:
          "Read what clients say about bridal makeup, facials, haircuts and mehndi at Lubna's Beauty Salon in Mirpurkhas, Sindh.",
      },
      { property: "og:title", content: "Client Testimonials — Lubna's Beauty Salon" },
      {
        property: "og:description",
        content: "Real feedback from clients on our bridal, makeup, hair and skincare services.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Words from our clients"
        intro="The feedback below reflects the experiences our clients share with us after their appointments."
        image={images.walimaMakeup}
      />

      <section className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Reviews"
            title="Trusted by brides, students and families across Mirpurkhas"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col border border-ink/10 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lux"
              >
                <Quote className="h-7 w-7 text-gold/70" />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4">
                  <span className="block font-display text-lg text-ink">{t.name}</span>
                  <span className="block text-[0.6rem] tracking-[0.22em] text-gold uppercase">
                    {t.service}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Demo testimonials — to be replaced with verified client reviews.
          </p>
        </div>
      </section>

      <section className="bg-ink py-16 lg:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">
              Want an experience like this?
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ivory/70">
              {salon.hours} · {salon.address}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/book-appointment" className="btn-base btn-gold">
              Book Appointment
            </Link>
            <a href={salon.phoneHref} className="btn-base btn-outline-gold">
              Call {salon.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
