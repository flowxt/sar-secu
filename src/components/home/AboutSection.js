"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IoShieldCheckmarkOutline,
  IoTimeOutline,
  IoEyeOutline,
} from "react-icons/io5";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    { name: "Professionnalisme", icon: <IoShieldCheckmarkOutline size={28} /> },
    { name: "Réactivité", icon: <IoTimeOutline size={28} /> },
    { name: "Discrétion", icon: <IoEyeOutline size={28} /> },
    { name: "Efficacité", icon: <IoShieldCheckmarkOutline size={28} /> },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SAR-Security :{" "}
            <span className="text-yellow-500">Qui sommes-nous ?</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-900 p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-3">
                UNE SOCIÉTÉ DE SÉCURITÉ
              </h3>
              <p className="text-white/80">
                Basée à Genève en Suisse dirigée par Sidnei Ribeiro, SAR
                Security est votre partenaire de confiance en matière de
                sécurité.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-3">
                NOTRE MISSION
              </h3>
              <p className="text-white/80">
                Protection des biens et des personnes avec un niveau d'exigence
                et de professionnalisme irréprochable.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-white mb-3">
                NOS VALEURS
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-yellow-500">{value.icon}</div>
                    <span className="text-white/80">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
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
                src="/images/agent-securite.jpg"
                alt="Directeur de SAR Security"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/50"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
                <h3 className="text-2xl font-bold text-white">
                  Sidnei Ribeiro
                </h3>
                <p className="text-yellow-500 mb-2">Directeur et fondateur</p>
                <p className="text-white/90 text-sm">
                  Ancien militaire de la Légion Étrangère et expert en sécurité
                </p>
              </div>
            </div>

            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
