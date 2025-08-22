"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FlowButton } from "../ui/flow-button";

const menuLinks = [
  { path: "/", label: "Home" },
  // { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  // { path: "/lab", label: "Lab" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuBarRef = useRef();
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  // Handle scroll to show/hide menu bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show menu when at the top of the page
      if (currentScrollY <= 0) {
        setIsScrolled(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Scrolling down
      if (currentScrollY > lastScrollY && !isScrolled) {
        setIsScrolled(true);
      } 
      // Scrolling up
      else if (currentScrollY < lastScrollY && isScrolled) {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, lastScrollY]);

  return (
    <div className="menu-container" ref={container}>
      {/* menu-bar */}
      <div 
        ref={menuBarRef}
        className={`menu-bar ${isScrolled ? 'menu-bar--hidden' : ''}`}
        style={{
          transition: 'transform 0.3s ease-in-out',
          transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        <div className="menu-logo">
          <Link href="/">
          <Image src="/assets/images/logoBg.png" alt="logo" className="md:w-24 sm:w-20 w-16 object-contain" width={80} height={40}/>
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
        <FlowButton text="Menu" />
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">
            <Image src="/assets/images/logoBgWhite.png" alt="logo" className="md:w-24 sm:w-20 w-16 object-contain" width={80} height={40} />
            </Link>
          </div>
          <div className="menu-close sm:pr-8 pr-5 pt-2 font-medium">
            <p onClick={toggleMenu}>Close</p>
          </div>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon text-white" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link className="menu-link" href={link.path}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col text-white">
              <a href="https://www.instagram.com/corestudio0/">Instagram &#8599;</a>
              <a href="https://www.linkedin.com/company/core-studioaz/">LinkedIn &#8599;</a>
              {/* <a href="#">Behance &#8599;</a> */}
              {/* <a href="#">Dribbble &#8599;</a> */}
            </div>
            <div className="menu-info-col text-white">
              <p>corestudio007@gmail.com</p>
              <p>+994 70 740 50 80</p>
            </div>
          </div>
        </div>
        {/* <div className="menu-preview">
          <p>View ShowReel</p>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
