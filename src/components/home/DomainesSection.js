"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function DomainesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const domaines = [
    {
      title: "PRIVÉ",
      items: ["Villas", "Résidences", "Appartements", "Immeubles"],
      image: "/images/agent2.webp",
      alt: "Agent de sécurité surveillant une villa",
    },
    {
      title: "PROFESSIONNEL",
      items: ["Bureaux", "Entrepôts", "Chantiers", "Événements"],
      image: "/images/agent-securite.jpg",
      alt: "Agent de sécurité surveillant un entrepôt",
    },
    {
      title: "PUBLIC",
      items: ["Sites sensibles", "Manifestations culturelles et sportives"],
      image: "/images/agent4.png",
      alt: "Agent de sécurité surveillant une manifestation publique en Suisse",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-black-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos Domaines{" "}
            <span className="text-yellow-500">D&apos;INTERVENTION</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-white/80 text-lg max-w-4xl mx-auto text-center">
            Forts de notre expertise et de notre savoir-faire, nous intervenons
            en Suisse et à l'étranger dans tous les domaines de la sécurité pour
            répondre à vos besoins spécifiques et vous garantir une protection
            optimale.
          </p>
          <p className="text-white/80 text-lg max-w-4xl mx-auto text-center mt-4">
            Que vous soyez un particulier, un professionnel ou une organisation
            publique, nous vous proposons des solutions de sécurité
            personnalisées et adaptées à vos exigences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => (
            <motion.div
              key={domaine.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg relative h-[400px]">
                <Image
                  src={domaine.image}
                  alt={domaine.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {domaine.title}
                  </h3>
                  <ul className="space-y-2">
                    {domaine.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-200"
                      >
                        <IoCheckmarkSharp className="text-yellow-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-12 p-8 bg-slate-900 rounded-lg shadow-sm border-l-4 border-yellow-500"
        >
          <p className="text-white/80 text-lg">
            Notre équipe d&apos;agents expérimentés et formés est à votre
            disposition pour une étude gratuite de vos besoins et vous proposer
            une solution de sécurité personnalisée.
          </p>
          <p className="text-white/80 text-lg font-medium mt-4">
            N&apos;hésitez pas à nous contacter pour plus d&apos;informations.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-md transition-colors"
          >
            CONTACTEZ-NOUS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
