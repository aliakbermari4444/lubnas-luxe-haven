import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { formatPrice, services } from "@/data/salon";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 60);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return services
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-70 flex flex-col bg-ink/95 px-4 pt-24 pb-8 backdrop-blur-md sm:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Search services</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid h-10 w-10 place-items-center text-ivory hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <label className="mt-4 flex items-center gap-3 border-b border-gold/40 pb-3">
          <Search className="h-5 w-5 shrink-0 text-gold" />
          <span className="sr-only">Search for a service</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “bridal makeup”, “hydra facial”, “mehndi”…"
            className="w-full min-w-0 bg-transparent font-display text-2xl text-ivory placeholder:text-ivory/40 focus:outline-none sm:text-3xl"
          />
        </label>

        <div className="mt-6 max-h-[55vh] overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <p className="text-sm text-ivory/60">
              No service matches “{query}”. Try hair, skin, makeup, bridal or laser.
            </p>
          )}
          <ul className="space-y-2">
            {results.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate({ to: "/services", search: { focus: s.id } });
                  }}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border border-ivory/10 px-4 py-3 text-left transition-colors duration-300 hover:border-gold/50 hover:bg-ivory/5"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-display text-lg text-ivory">{s.name}</span>
                    <span className="block text-[0.65rem] tracking-[0.24em] text-gold/80 uppercase">
                      {s.category}
                    </span>
                  </span>
                  <span className="shrink-0 text-xs text-ivory/60">{formatPrice(s.price)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
