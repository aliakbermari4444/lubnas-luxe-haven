import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { PageHero, SectionHeading } from "@/components/PageHero";
import { gallery, images, type GalleryCategory } from "@/data/salon";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bridal, Makeup & Hair Work | Lubna's Beauty Salon" },
      {
        name: "description",
        content:
          "Browse our gallery of bridal looks, party makeup, hair transformations, mehndi designs and skincare treatments at Lubna's Beauty Salon, Mirpurkhas.",
      },
      { property: "og:title", content: "Gallery — Lubna's Beauty Salon" },
      {
        property: "og:description",
        content: "Bridal, makeup, hair, mehndi and skincare work from our Mirpurkhas salon.",
      },
    ],
  }),
  component: GalleryPage,
});

const categories: ("All" | GalleryCategory)[] = [
  "All",
  "Bridal",
  "Makeup",
  "Hair",
  "Skin Care",
  "Mehndi",
  "Salon",
];

function GalleryPage() {
  const [active, setActive] = useState<"All" | GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (active === "All" ? gallery : gallery.filter((g) => g.category === active)),
    [active],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = lightbox === null ? null : items[lightbox];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work, up close"
        intro="A selection of bridal looks, makeup, hair transformations, mehndi artistry and treatment spaces from the salon."
        image={images.bridalMakeup}
      />

      <section className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Browse" title="Filter the gallery" />
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setActive(c);
                  setLightbox(null);
                }}
                aria-pressed={active === c}
                className={`min-h-11 border px-5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  active === c
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/20 text-ink hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <button
                key={item.alt}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block aspect-4/3 w-full overflow-hidden border border-ink/10"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 py-3 text-left text-[0.6rem] tracking-[0.22em] text-ivory uppercase">
                  {item.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {current && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute top-5 right-5 grid h-12 w-12 place-items-center text-ivory hover:text-gold"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[75vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ivory/70">
              {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
