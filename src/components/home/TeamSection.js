"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoCheckmarkOutline } from "react-icons/io5";
import Image from "next/image";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const qualities = [
    "Avoir une expérience significative dans le domaine de la sécurité",
    "Formés aux dernières techniques et procédures",
    "Discrétion et professionnalisme en toute circonstance",
    "Expertise dans tous les domaines de la sécurité",
  ];

  return (
    <section ref={ref} className="py-20 bg-black-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            NOTRE <span className="text-yellow-500">ÉQUIPE</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              UN RESPONSABLE EXPÉRIMENTÉ
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Notre responsable d&apos;entreprise et formateur est un ancien
              militaire de la Légion Étrangère en France. Il bénéficie
              d&apos;une longue carrière dans la sécurité à Genève en tant que
              garde du corps et d&apos;une expérience de plusieurs années en
              Suisse et à l&apos;international. De plus, il possède un brevet
              fédéral Suisse d&apos;agent de Sécurité, des diplômes
              internationaux, ainsi que des recommandations et des certificats
              de bonnes conduites et d&apos;honorabilité.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              UNE ÉQUIPE RÉACTIVE ET PROFESSIONNELLE
            </h3>
            <h4 className="text-xl font-medium text-white mb-4">
              DES AGENTS EXPÉRIMENTÉS ET FORMÉS
            </h4>

            <ul className="space-y-3 mb-8">
              {qualities.map((quality, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IoCheckmarkOutline
                    size={24}
                    className="text-yellow-500 mt-1 flex-shrink-0"
                  />
                  <span className="text-white/80">{quality}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-medium text-center bg-yellow-500 text-black py-4 px-6 rounded-md mt-8">
              UN PERSONNEL DÉVOUÉ À VOTRE SÉCURITÉ
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/test-sidnei.png"
                alt="Directeur de SAR Security"
                fill
                className="object-cover"
              />
              {/* Overlay plus opaque pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white">
                  Sidnei Ribeiro
                </h3>
                <p className="text-yellow-500">Directeur et fondateur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
