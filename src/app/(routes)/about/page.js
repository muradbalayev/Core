"use client";

import {
  Code,
  Lightbulb,
  Smartphone,
  Globe,
  Users,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import murad from "@/assets/team/murad.jpg";
import matin from "@/assets/team/matin.jpg";
import Team from "./components/Team";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Happy Clients" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like Next.js and React.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications that work seamlessly on both iOS and Android.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development services from database design to frontend implementation.",
    },
  ];

 

  const values = [
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: "Innovation",
      description:
        "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      title: "Quality",
      description:
        "We deliver pixel-perfect, high-performance applications that exceed expectations.",
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their vision and bring it to life.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-background/70 text-sm text-muted-foreground mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              About Core Studio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              We turn ideas into digital experiences
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Core Studio is a web and mobile development studio dedicated to
              creating exceptional digital products that drive results for our
              clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#portfolio">View our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 ">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl border border-border/50"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Founded in 2024, Core Studio was born from a passion for
                creating exceptional digital experiences. What started as a
                small team of dedicated developers has grown into a full-service
                web and mobile development studio.
              </p>
              <p className="mb-6">
                We believe in the power of technology to transform businesses
                and create meaningful connections. Our approach combines
                technical expertise with creative thinking to deliver solutions
                that not only look great but also drive real results.
              </p>
              <p>
                Today, we&apos;re proud to work with businesses of all sizes,
                from ambitious startups to established enterprises, helping them
                navigate the digital landscape and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              We offer comprehensive digital solutions tailored to your business
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <Team />

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
              Our Values
            </h2>
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to start your project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s work together to bring your ideas to life. Get in touch
              with us today to discuss your project.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
