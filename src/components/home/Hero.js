"use client";

import { motion } from "framer-motion";
import { IoChevronDownOutline, IoCallOutline } from "react-icons/io5";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Fond avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-black z-0"></div>

      {/* Élément décoratif */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="block">SAR SECURITY</span>
              <span className="text-yellow-500 text-3xl md:text-4xl mt-2 font-normal">
                La sécurité à votre service
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-white/90 max-w-2xl mx-auto mt-6"
            >
              Une société de sécurité polyvalente et dynamique basée à Genève en
              Suisse. Protection des biens et des personnes avec
              professionnalisme et discrétion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center text-lg"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+41223010000"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center text-lg"
              >
                <IoCallOutline size={20} className="mr-2" />
                Appelez-nous
              </a>
            </motion.div>

            {/* Piliers avec icônes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
            >
              {["SÉCURITÉ", "EXPÉRIENCE", "CONFIANCE"].map((pilier, index) => (
                <motion.div
                  key={pilier}
                  className="bg-black/40 backdrop-blur-sm border-2 border-yellow-500 rounded-lg p-5 text-center cursor-pointer
                            transition-all duration-300 hover:bg-yellow-500/20 group relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Effet de brillance au survol */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 
                                bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent
                                -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"
                  ></div>

                  <h3 className="text-white font-semibold text-xl relative z-10 group-hover:text-yellow-500 transition-colors duration-300">
                    {pilier}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white flex flex-col items-center"
        >
          <span className="text-sm mb-2 opacity-80">En savoir plus</span>
          <IoChevronDownOutline size={24} />
        </motion.div>
      </div>
    </div>
  );
}
