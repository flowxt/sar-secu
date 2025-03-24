"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IoShieldCheckmarkOutline,
  IoHandRightOutline,
  IoPersonOutline,
  IoScaleOutline,
} from "react-icons/io5";
import Image from "next/image";

export default function EngagementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const engagements = [
    {
      icon: <IoShieldCheckmarkOutline size={40} />,
      title: "LA SÉCURITÉ",
      description: "de nos clients est notre priorité",
    },
    {
      icon: <IoHandRightOutline size={40} />,
      title: "UN SERVICE",
      description: "de sécurité fiable et efficace",
    },
    {
      icon: <IoPersonOutline size={40} />,
      title: "UNE RELATION",
      description: "de confiance avec nos clients",
    },
    {
      icon: <IoScaleOutline size={40} />,
      title: "UN RESPECT",
      description: "total des réglementations en vigueur",
    },
  ];

  return (
    <section ref={ref} className="py-20 relative bg-[#0a0a0a]">
      {/* Fond avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900 z-0"></div>

      {/* Éléments décoratifs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOTRE <span className="text-yellow-500">ENGAGEMENT</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagements.map((engagement, index) => (
            <motion.div
              key={engagement.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-all hover:translate-y-[-5px]"
            >
              <div className="bg-yellow-500 inline-flex items-center justify-center p-3 rounded-full text-black mb-6 mx-auto">
                {engagement.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {engagement.title}
              </h3>
              <p className="text-white/70">{engagement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="relative inline-block">
            <Image
              src="/images/logo-sans-fond.png"
              alt="Logo SAR Security"
              width={180}
              height={60}
              className="h-20 w-auto"
            />
            <p className="text-center text-white/80 mt-4 italic">
              La sécurité à votre service, jour et nuit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
