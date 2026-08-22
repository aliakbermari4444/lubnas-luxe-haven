import { useState } from "react";
import { Check, Phone } from "lucide-react";

import { salon, services } from "@/data/salon";

const inputClass =
  "w-full min-w-0 border border-ink/15 bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";
const labelClass = "block text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "date", string>>;

export function BookingForm({
  defaultService,
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [service, setService] = useState(defaultService ?? "");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const next: Errors = {};

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[0-9+\-\s()]{8,}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!date) next.date = "Please choose a preferred date.";
    if (!service) next.service = "Please select a service.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/50 bg-cream/60 p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">Request noted</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your details have been captured in this form. Online booking is not yet connected, so
          please call us to confirm your slot — your appointment is not confirmed until we speak.
        </p>
        <a href={salon.phoneHref} className="btn-base btn-gold mt-6">
          <Phone className="h-4 w-4" /> Call {salon.phone}
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 block w-full text-xs tracking-[0.2em] text-muted-foreground uppercase hover:text-ink"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="bf-name">
          Full Name
        </label>
        <input id="bf-name" name="name" className={`${inputClass} mt-2`} placeholder="Your name" />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="bf-phone">
          Phone Number
        </label>
        <input
          id="bf-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          className={`${inputClass} mt-2`}
          placeholder="03XXXXXXXXX"
        />
        {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="bf-email">
          Email (optional)
        </label>
        <input
          id="bf-email"
          name="email"
          type="email"
          className={`${inputClass} mt-2`}
          placeholder="you@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="bf-service">
          Select Service
        </label>
        <select
          id="bf-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputClass} mt-2`}
        >
          <option value="">Choose a service…</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.category} — {s.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="bf-date">
          Preferred Date
        </label>
        <input id="bf-date" name="date" type="date" className={`${inputClass} mt-2`} />
        {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="bf-time">
          Preferred Time
        </label>
        <input id="bf-time" name="time" type="time" className={`${inputClass} mt-2`} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="bf-message">
          {compact ? "Message" : "Additional Message"}
        </label>
        <textarea
          id="bf-message"
          name="message"
          rows={compact ? 3 : 4}
          className={`${inputClass} mt-2 resize-y`}
          placeholder="Tell us about the occasion or anything we should prepare for."
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-base btn-gold w-full sm:w-auto">
          Book Appointment
        </button>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Prefer to talk? Call{" "}
          <a href={salon.phoneHref} className="text-ink underline decoration-gold">
            {salon.phone}
          </a>
          . Requests are confirmed by phone.
        </p>
      </div>
    </form>
  );
}
