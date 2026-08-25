import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks, salon } from "@/data/salon";
import { SearchOverlay } from "@/components/SearchOverlay";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const overlayMode = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          overlayMode
            ? "bg-gradient-to-b from-ink/70 to-transparent"
            : "bg-ink/95 shadow-lux backdrop-blur-md"
        }`}
      >
        <div className="shell">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
            <Link to="/" className="flex min-w-0 items-center gap-3">
              <img
                src={logoMark}
                alt="Lubna's Beauty Salon logo"
                width={512}
                height={512}
                className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
              />
              <span className="min-w-0">
                <span className="block truncate font-display text-lg leading-tight text-ivory sm:text-xl">
                  Lubna&apos;s Beauty Salon
                </span>
                <span className="hidden text-[0.6rem] tracking-[0.3em] text-gold/80 uppercase sm:block">
                  {salon.city}, Sindh
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-1 sm:gap-2">
              <nav className="mr-2 hidden items-center xl:flex" aria-label="Main">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="px-3 py-2 text-[0.7rem] tracking-[0.2em] text-ivory/80 uppercase transition-colors duration-300 hover:text-gold"
                    activeProps={{ className: "text-gold" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search services"
                className="grid h-11 w-11 place-items-center text-ivory/85 transition-colors duration-300 hover:text-gold"
              >
                <Search className="h-5 w-5" />
              </button>

              <a
                href={salon.phoneHref}
                aria-label={`Call ${salon.phone}`}
                className="hidden h-11 w-11 place-items-center text-ivory/85 transition-colors duration-300 hover:text-gold sm:grid"
              >
                <Phone className="h-5 w-5" />
              </a>

              <Link
                to="/book-appointment"
                className="btn-base btn-gold hidden lg:inline-flex"
              >
                Book Appointment
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="grid h-11 w-11 place-items-center text-ivory transition-colors duration-300 hover:text-gold xl:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / tablet drawer */}
      <div
        className={`fixed inset-0 z-60 xl:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/80 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-ink transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gold/20 px-6 py-4">
            <span className="font-display text-xl text-ivory">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center text-ivory hover:text-gold"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ivory/10 py-4 font-display text-2xl text-ivory transition-colors duration-300 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setMenuOpen(false)}
              className="btn-base btn-gold mt-6 w-full"
            >
              Book Appointment
            </Link>
            <a
              href={salon.phoneHref}
              className="btn-base btn-outline-gold mt-3 w-full"
            >
              Call {salon.phone}
            </a>
          </nav>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
