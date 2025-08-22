 import React from 'react'
 import {

    Github,
    Linkedin,
    Twitter,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import Link from "next/link";
  import Image from "next/image";
  import murad from "@/assets/team/murad.jpg";
  import matin from "@/assets/team/matin.jpg";
import ali from "@/assets/team/ali.jpg";
import nurxan from "@/assets/team/nurxan.jpg";

 const teamMembers = [
    {
      name: "Murad Balayev",
      role: "Founder & Front-End Developer",
      image: murad,
      social: {
        linkedin: "https://www.linkedin.com/in/murad-balazade/",
        github: "https://github.com/muradbalayev",
      },
    },
    {
      name: "Ali Aghayev",
      role: "Founder & FullStack Developer",
      image: ali,
      social: {
        linkedin: "https://www.linkedin.com/in/ali-aghayev",
        github: "https://github.com/AliAghayev132",
      },
    },
    {
      name: "Nurxan Quliyev",
      role: "UX/UI Designer",
      image: nurxan,
      social: {
        // twitter: "#",
        linkedin: "https://www.linkedin.com/in/nurkhanguliyev/",
        // github: "#",
      },
    },
    {
      name: "Matin Gafarov",
      role: "Project Manager",
      image: matin,
      social: {
        // twitter: "#",
        linkedin: "https://www.linkedin.com/in/matin-gafarov-8a572b340/",
        // github: "#",
      },
    },
  ];


 const Team = () => {
   return (
    <section className="py-16 md:py-24 bg-muted/10">
    <div className="container px-4 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Team</h2>
        <p className="text-muted-foreground">
          Meet the talented individuals behind Core Studio
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="group text-center">
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] mx-auto max-w-[250px]">
              <Image
                src={member.image} 
                alt={member.name}
                width={1500}
                height={1500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex gap-3">
                  {/* {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )} */}
                  {member?.social?.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member?.social?.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
   )
 }
 
 export default Team
 