"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMenuOutline, IoCloseOutline, IoCallOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isMenuOpen
      ? "bg-black py-2"
      : scrolled
        ? "bg-black/95 backdrop-blur-sm py-2 shadow-lg"
        : "bg-black/80 md:bg-transparent py-4"
  }`;

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.3 } },
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/bodyguard", label: "Bodyguard" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/" && pathname === "/") {
      return true;
    }
    if (href !== "/" && pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/images/logo-sans-fond.png"
            alt="SAR Security Logo"
            width={120}
            height={40}
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-white hover:text-yellow-500 transition-colors relative ${
                    isActive(link.href) ? "font-medium" : ""
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-yellow-500"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+41798501578"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-md transition-colors"
          >
            <IoCallOutline size={20} />
            Appelez-nous
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative z-10"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className="fixed inset-0 bg-black md:hidden flex flex-col pt-24 px-8 z-40"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          style={{ backgroundColor: "black" }}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <IoCloseOutline size={32} />
          </button>
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className={`text-white text-xl hover:text-yellow-500 transition-colors block py-2 border-b border-gray-800 ${
                    isActive(link.href) ? "text-yellow-500 font-medium" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-8 w-full">
              <a
                href="tel:+41798501578"
                className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-md transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoCallOutline size={20} />
                Appelez-nous
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}
