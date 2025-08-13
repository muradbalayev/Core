import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/80 text-foreground">
      <div className="wrapper mx-auto">
        <div className="mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">CoreStudio</h4>
              <p className="text-sm text-muted-foreground">
                Web & Mobile product studio crafting elegant digital experiences.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold">Services</h5>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><span>Product Strategy</span></li>
                <li><span>UI/UX Design</span></li>
                <li><span>Web Development</span></li>
                <li><span>Mobile Development</span></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold">Company</h5>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link href="#portfolio" className="hover:text-foreground">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                {/* <li><Link href="#" className="hover:text-foreground">Careers</Link></li> */}
                <li><Link href="mailto:hello@core.studio" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold">Follow</h5>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Twitter</Link></li>
                <li><Link href="#" className="hover:text-foreground">Dribbble</Link></li>
                <li><Link href="#" className="hover:text-foreground">GitHub</Link></li>
                <li><Link href="#" className="hover:text-foreground">LinkedIn</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {year} Core Studio. All rights reserved.</p>
            {/* <div className="flex items-center gap-4">
              <span className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1">Next.js</span>
              <span className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1">React Native</span>
              <span className="rounded-md border border-border/60 bg-background/70 px-2.5 py-1">Tailwind</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
