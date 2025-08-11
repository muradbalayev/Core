import React from "react";
import Link from "next/link";
import evo1 from "@/assets/projects/evo/evo-1.png"
import evo2 from "@/assets/projects/evo/evo-2.png"
import evo3 from "@/assets/projects/evo/evo-3.png"

// Example data. Replace with real CMS/data source later.
const CASE_STUDIES = {
  evoacademy: {
    title: "Website for EvoAcademy",
    client: "EvoAcademy",
    link: { href: "https://evoacademy.az", label: "evoacademy.az" },
    description: [
      "In early 2022, we began our collaboration with the leading carrier and largest airline in Azerbaijan - AZAL.",
      "Throughout our partnership, we focused on developing a new website with a user-friendly interface. Recognizing the website's significance as a crucial sales platform for airlines, we prioritized creating a convenient, seamless and efficient user experience.",
      "We applied our expertise to elevate the website and ensure it met the standards of the best airline websites.",
    ],
    images: [
      evo1,
      evo2,
      evo3,
    ],
  },
  bp: {
    title: "Projects for BP Azerbaijan",
    client: "BP Azerbaijan",
    link: { href: "https://bp.com", label: "bp.com" },
    description: [
      "Jeykhun Imanov Studio successfully performed more than 300 projects of various categories for BP Azerbaijan.",
      "Our work spanned web presence, brand materials and internal comms systems.",
    ],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    ],
  },
};

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Case study not found</h1>
          <p className="mt-4 text-sm text-muted-foreground">The requested project doesn&apos;t exist yet.</p>
          <div className="mt-6">
            <Link href="/" className="underline">Go back home</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="wrapper mx-auto page-content">
      <div className="mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{item.title}</h1>
            {item.client && (
              <div className="mt-2 text-sm text-muted-foreground">{item.client}</div>
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
