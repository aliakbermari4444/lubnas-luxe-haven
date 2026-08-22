import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { formatPrice, type Service } from "@/data/salon";

export function ServiceCarousel({
  items,
  focusId,
}: {
  items: Service[];
  focusId?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !focusId) return;
    const index = items.findIndex((s) => s.id === focusId);
    if (index >= 0) emblaApi.scrollTo(index);
  }, [emblaApi, focusId, items]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((service) => (
            <div
              key={service.id}
              className="min-w-0 shrink-0 grow-0 basis-full pr-5 sm:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 flex-wrap gap-2" role="tablist" aria-label="Service slides">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === selected}
              role="tab"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected ? "w-8 bg-gold" : "w-3 bg-ink/20 hover:bg-gold/50"
              }`}
            />
          ))}
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous service"
            className="grid h-12 w-12 place-items-center border border-ink/20 text-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next service"
            className="grid h-12 w-12 place-items-center border border-ink/20 text-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col border border-ink/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lux">
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.65rem] tracking-[0.24em] text-gold uppercase">{service.category}</p>
        <h3 className="mt-2 font-display text-2xl text-ink">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <p className="mt-5 font-display text-xl text-ink">
          {formatPrice(service.price)}{" "}
          <span className="font-sans text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
            (placeholder)
          </span>
        </p>
        <Link
          to="/book-appointment"
          search={{ service: service.id }}
          className="btn-base btn-outline-ink mt-5 w-full"
        >
          Book This Service
        </Link>
      </div>
    </article>
  );
}
