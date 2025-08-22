import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/hooks/ProjectDatas";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const item = CASE_STUDIES[slug];
  const title = item ? `${item.title} — CoreStudio` : `Case Study — CoreStudio`;
  return { title };
}

export default function CaseStudyPage({ params }) {
  const { slug } = params;
  const item = CASE_STUDIES[slug];

  if (!item) {
    return (
      <section className="wrapper mx-auto page-content">
        <div className="mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Case study not found
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The requested project doesn&apos;t exist yet.
          </p>
          <div className="mt-6">
            <Link href="/" className="underline">
              Go back home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="wrapper mx-auto page-content sm:mt-10">
      <div className="mx-auto px-0 sm:px-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex sm:flex-row flex-col items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              {item.title}
            </h1>
            {item.client && (
              <div className="mt-2 text-sm text-muted-foreground">
                {item.client}
              </div>
            )}
          </div>
          {item.link?.href && (
            <div className="shrink-0">
              <Link
                href={item.link.href}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.link.label || item.link.href}
              </Link>
            </div>
          )}
        </div>

        {/* Intro text two-column on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 text-sm sm:text-base leading-relaxed">
          <div className="md:col-start-2 text-muted-foreground space-y-4">
            {item.description.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Images stack */}
        <div className="mt-8 sm:mt-10 space-y-6">
          {item.images.map((src, idx) => {
            // Əgər src obyekt tipindədirsə (local şəkil), onun .src property-sini götür
            const imgSrc = typeof src === "string" ? src : src.src;
            return (
              <figure key={idx} className="overflow-hidden rounded-xl bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  alt={`${item.title} image ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
