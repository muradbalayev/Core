import React from "react";
import bantik from "@/assets/partners/bantik.webp"
import evoacademy from "@/assets/partners/evo.png"
import valser from "@/assets/partners/valser.webp"
import coffeeme from "@/assets/partners/coffeeme.png"
import ddw from "@/assets/partners/ddw.png"
import cartop from "@/assets/partners/cartop.png"

const partners = [
  { name: "Bantik", logo: bantik, padding: 'p-6 sm:p-8 md:p-10 lg:p-12' },
  { name: "EvoAcademy", logo: evoacademy, padding: 'p-6 sm:p-8 md:p-10 lg:p-12' },
  { name: "Valser", logo: valser, padding: '' },
  { name: "CoffeeMe", logo: coffeeme, padding: '' },
  { name: "DDW", logo: ddw, padding: ' p-2 lg:p-6' },
  { name: "Cartop", logo: cartop, padding: '' },
  // { name: "GitHub", logo: "https://cdn.simpleicons.org/github/000000" },
];

export default function Partners() {
  return (
    <section className="wrapper mx-auto pt-10 pb-10 sm:pt-16 sm:pb-20">
      <div className="mx-auto px-4 sm:px-6">
        {/* Title like portfolio */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Partners</h1>
        </div>

        {/* Large square logo cards, 2 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-7 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl bg-card text-card-foreground transition-all"
            >
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-lg bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {typeof p.logo === "string" ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className={`${p.padding} h-full w-full object-contain opacity-90 transition-all duration-300 group-hover:opacity-100`}
                  />
                ) : (
                  <img
                    src={p.logo.src}
                    alt={p.name}
                    className={`${p.padding} h-full w-full object-contain opacity-90 transition-all duration-300 group-hover:opacity-100`}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight text-black/80">{p.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
