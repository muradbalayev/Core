import React from "react";

const partners = [
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "X", logo: "https://cdn.simpleicons.org/x" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/000000" },
];

export default function Partners() {
  return (
    <section className="wrapper mx-auto pt-6 sm:pt-10">
      <div className="mx-auto px-4 sm:px-6">
        {/* Title like portfolio */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Partners</h1>
        </div>

        {/* Large square logo cards, 2 columns on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-7 md:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl bg-card text-card-foreground transition-all"
            >
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-lg bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-full w-full object-contain p-10 sm:p-12 md:p-16 opacity-90 transition-all duration-300 group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight">{p.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
