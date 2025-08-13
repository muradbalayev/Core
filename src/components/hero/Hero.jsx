import React from "react";
import Link from "next/link";
import Text from "../ui/Text";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.98_0_0)_0%,transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.2_0_0)_0%,transparent_60%)]" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent_60%,oklch(0_0_0/_0.02))] dark:bg-[linear-gradient(to_bottom,transparent,transparent_60%,oklch(1_0_0/_0.06))]" /> */}
        {/* subtle grid */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)] bg-[linear-gradient(to_right,oklch(0_0_0/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/_0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,oklch(1_0_0/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/_0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-[70vh] flex-col items-center justify-center py-20 sm:py-28 md:py-32 text-center">
          {/* eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            CoreStudio — Web & Mobile Development Studio
          </div>

          {/* heading */}
          <Text>
          <h1 className="relative mx-auto max-w-4xl text-4xl font-semibold leading-[1.3] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            We craft elegant web & mobile experiences
          </h1>
          </Text>

          {/* subheading */}
          <Text>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Strategy, design and development for ambitious brands. 
          </p>
          </Text>

          {/* ctas */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#portfolio"
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background shadow-sm transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Us
            </Link>
          </div>

          {/* meta row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1">Web Development</span>
            <span className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1">Mobile Development</span>
            <span className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1">Product Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
