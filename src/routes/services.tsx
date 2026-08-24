import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHero, SectionHeading } from "@/components/PageHero";
import { ServiceCard, ServiceCarousel } from "@/components/ServiceCarousel";
import {
  bridalPackages,
  formatPrice,
  images,
  serviceCategories,
  services,
  type ServiceCategory,
} from "@/data/salon";

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>) => ({
    focus: typeof search.focus === "string" ? search.focus : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Services & Prices — Lubna's Beauty Salon, Mirpurkhas" },
      {
        name: "description",
        content:
          "Hair, grooming, skincare, makeup, bridal packages and laser treatments at Lubna's Beauty Salon in Mirpurkhas. Browse services and placeholder prices.",
      },
      { property: "og:title", content: "Services & Prices — Lubna's Beauty Salon" },
      {
        property: "og:description",
        content:
          "Explore hair, skin, makeup, grooming, bridal and advanced treatments with our service slider.",
      },
    ],
  }),
  component: ServicesPage,
});

const filters: ("All" | ServiceCategory)[] = [
  "All",
  ...serviceCategories.map((c) => c.name),
];

function ServicesPage() {
  const { focus } = Route.useSearch();
  const [active, setActive] = useState<"All" | ServiceCategory>("All");

  const filtered = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Every service, one place"
        intro="From everyday grooming to complete bridal packages. Swipe the slider, filter by category, then book the service you want. All prices shown are placeholders in PKR."
        image={images.makeup}
      />

      {/* MAIN SERVICE SLIDER */}
      <section className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Service slider"
            title="Browse our full service range"
            intro="Use the arrows or dots to move through services, then book the one you need."
          />
          <div className="mt-12">
            <ServiceCarousel items={services} focusId={focus} />
          </div>
        </div>
      </section>

      {/* FILTERABLE GRID */}
      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Full list" title="Filter by category" />
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`min-h-11 border px-5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  active === f
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/20 text-ink hover:border-gold hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* BRIDAL PACKAGES */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Bridal packages"
            title="Complete bridal journeys"
            intro="Three curated packages covering every wedding event. Package prices are placeholders."
            align="center"
            tone="dark"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {bridalPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex h-full flex-col border border-ivory/10 transition-colors duration-300 hover:border-gold/60"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl text-ivory">{pkg.name}</h3>
                  <p className="mt-2 font-display text-xl text-gold">
                    {formatPrice(pkg.price)}{" "}
                    <span className="font-sans text-[0.55rem] tracking-[0.2em] text-ivory/50 uppercase">
                      (placeholder)
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/70">{pkg.description}</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm text-ivory/75">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/book-appointment"
                    search={{ service: pkg.id }}
                    className="btn-base btn-outline-gold mt-7 w-full"
                  >
                    Enquire & Book
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
