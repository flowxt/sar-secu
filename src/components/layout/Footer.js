"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et présentation */}
          <div className="space-y-4">
            <Image
              src="/images/logo-sans-fond.png"
              alt="SAR Security Logo"
              width={180}
              height={60}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-gray-300">
              SAR Security est une société de sécurité polyvalente et dynamique
              basée à Genève en Suisse.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-yellow-500 pb-2 inline-block">
              Liens rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/bodyguard"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Bodyguard
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-yellow-500 pb-2 inline-block">
              Nos services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="/services#villas">
                  Surveillance villas et résidences
                </Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="/services#rapprochee">Garde rapprochée</Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="/services#chantiers">
                  Surveillance de chantiers
                </Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="/services#evenements">
                  Surveillance d&apos;événements
                </Link>
              </li>
              <li className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Link href="/services#boutiques">
                  Surveillance de boutiques
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-yellow-500 pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IoLocationOutline
                  size={24}
                  className="text-yellow-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  Rue Butini 15, 1202 Genève, Suisse
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IoCallOutline
                  size={24}
                  className="text-yellow-500 flex-shrink-0"
                />
                <a
                  href="tel:+41798501578"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  +41 79 850 15 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IoMailOutline
                  size={24}
                  className="text-yellow-500 flex-shrink-0"
                />
                <a
                  href="mailto:contact@sarsecurity.ch"
                  className="text-gray-300 hover:text-yellow-500"
                >
                  contact@sar-security.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} SAR Security. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
