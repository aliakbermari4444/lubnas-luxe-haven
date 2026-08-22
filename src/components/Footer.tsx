import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { navLinks, salon, social } from "@/data/salon";

const footerServices = ["Hair", "Skin Care", "Makeup", "Bridal", "Facials", "Grooming"];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/75">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <h2 className="font-display text-2xl text-ivory">Lubna&apos;s Beauty Salon</h2>
          <div className="rule-gold mt-4" />
          <p className="mt-5 text-sm leading-relaxed">
            A premium beauty salon in {salon.city}, Sindh — offering hair, skincare, makeup,
            grooming and bridal services with professional care and strict hygiene.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold/40 px-4 py-2 text-[0.65rem] tracking-[0.2em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[...navLinks, { label: "Book Appointment", to: "/book-appointment" as const }].map(
              (link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="transition-colors duration-300 hover:text-gold"
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "text-gold" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServices.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors duration-300 hover:text-gold">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{salon.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={salon.phoneHref} className="transition-colors hover:text-gold">
                {salon.phone}
              </a>
            </li>
            <li className="text-ivory/55">{salon.hours}</li>
          </ul>
          <Link to="/book-appointment" className="btn-base btn-outline-gold mt-6 w-full">
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col gap-2 py-6 text-center text-xs text-ivory/50 sm:flex-row sm:justify-between sm:text-left">
          <p>© Lubna&apos;s Beauty Salon. All rights reserved.</p>
          <p>{salon.address}</p>
        </div>
      </div>
    </footer>
  );
}
