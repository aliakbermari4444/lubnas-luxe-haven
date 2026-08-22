export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/60" />
      <div className="shell relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="rule-gold mt-6" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          tone === "dark" ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className={`rule-gold mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            tone === "dark" ? "text-ivory/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
