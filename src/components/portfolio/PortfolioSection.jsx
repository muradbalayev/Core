import React from "react";
import Link from "next/link";

// Reusable badge (shadcn-like) using Tailwind tokens from globals.css
const TechBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-border">
    {children}
  </span>
);

// Card container (showcase style)
const Card = ({ children }) => (
  <div className="group relative overflow-hidden rounded-2xl  bg-card text-card-foreground transition-all">
    {children}
  </div>
);

const CardImage = ({ src, alt, children }) => {
  // Əgər obyekt gəlibsə (local import), .src property-sini götür
  const imgSrc = typeof src === "string" ? src : src?.src;

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted rounded-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
      {children}
    </div>
  );
};

const CardBody = ({ children }) => (
  <div className="space-y-3 p-4 sm:p-5">
    {children}
  </div>
);

const CardTitleRow = ({ title, type }) => (
  <div className="flex items-start justify-between gap-3">
    <h3 className="text-base sm:text-lg md:text-2xl font-semibold tracking-tight">{title}</h3>
    <span className="shrink-0 rounded-full border border-border bg-accent/60 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-accent-foreground">
      {type}
    </span>
  </div>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
);

const CardFooter = ({ tech = [], link }) => (
  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t, i) => (
        <TechBadge key={`${t}-${i}`}>{t}</TechBadge>
      ))}
    </div>
    {/* {link?.href && (
      <Link
        href={link.href}
        target={link.target || "_blank"}
        className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        {link.label || "View"}
      </Link>
    )} */}
  </div>
);

/**
 * PortfolioSection
 * props:
 * - title?: string
 * - subtitle?: string
 * - items: Array<{
 *     id: string|number,
 *     title: string,
 *     type: 'Mobile App' | 'Web App' | string,
 *     description: string,
 *     image: string, // URL
 *     tech: string[],
 *     link?: { href: string, label?: string, target?: string }
 *   }>
 */
const toSlug = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function PortfolioSection({ id = "portfolio", title = "Portfolio", subtitle = "Selected work by CoreStudio", items = [] }) {
  return (
    <section id={id} className=" mx-auto wrapper">
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/case-studies/${item.slug || toSlug(item.title)}`}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
          >
            <Card>
              <CardImage src={item.image} alt={item.title}>
                {/* optional small logo on image */}
                {item.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.logo}
                    alt="logo"
                    className="absolute left-3 top-3 h-6 w-6 rounded-md border border-border bg-background/80 p-1 shadow-sm backdrop-blur"
                  />
                )}
              </CardImage>
              <CardBody>
                <CardTitleRow title={item.title} type={item.type} />
                <CardDescription>{item.description}</CardDescription>
                <CardFooter tech={item.tech} link={item.link} />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
