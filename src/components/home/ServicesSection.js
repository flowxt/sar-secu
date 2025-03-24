"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBusinessOutline,
  IoCalendarOutline,
  IoWalkOutline,
  IoGlassesOutline,
  IoAlarmOutline,
} from "react-icons/io5";
import Link from "next/link";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <IoHomeOutline size={36} />,
      title: "SURVEILLANCE DES VILLAS ET RÉSIDENCES",
      description:
        "Protection et surveillance de votre domicile pendant vos absences",
      link: "/services#villas",
    },
    {
      icon: <IoPersonOutline size={36} />,
      title: "GARDE RAPPROCHÉE",
      description: "Protection personnelle par des agents qualifiés",
      link: "/bodyguard",
    },
    {
      icon: <IoBusinessOutline size={36} />,
      title: "SURVEILLANCE DE CHANTIERS",
      description: "Sécurisation et contrôle d'accès pour vos chantiers",
      link: "/services#chantiers",
    },
    {
      icon: <IoCalendarOutline size={36} />,
      title: "SURVEILLANCE D'ÉVÉNEMENTS",
      description: "Sécurité discrète et efficace pour vos événements",
      link: "/services#evenements",
    },
    {
      icon: <IoWalkOutline size={36} />,
      title: "RONDES ET INTERVENTIONS",
      description: "Patrouilles régulières et interventions rapides",
      link: "/services#rondes",
    },
    {
      icon: <IoGlassesOutline size={36} />,
      title: "SERVICES ÉVÉNEMENTIELS",
      description: "Services spécialisés pour tout type d'événement",
      link: "/services#evenementiels",
    },
    {
      icon: <IoAlarmOutline size={36} />,
      title: "INSTALLATION DES DISPOSITIFS D'ALARMES",
      description: "Solutions de sécurité électronique personnalisées",
      link: "/services#alarmes",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
            NOS <span className="text-yellow-500">SERVICES</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Une large gamme de services de sécurité adaptés à vos besoins
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-slate-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full border-t-4 border-yellow-500 hover:translate-y-[-5px] hover:border-t-[6px] group"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="mt-auto text-yellow-500 hover:text-yellow-400 font-medium flex items-center transition-colors group-hover:font-bold"
              >
                En savoir plus
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            DES SOLUTIONS PERSONNALISÉES POUR CHAQUE CLIENT
          </h3>
          <p className="text-lg font-medium text-yellow-500">
            UN SERVICE DE QUALITÉ IRRÉPROCHABLE
          </p>
          <Link
            href="/services"
            className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-4 rounded-md transition-colors"
          >
            Découvrir tous nos services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
