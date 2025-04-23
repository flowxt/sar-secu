"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
  IoCheckmarkCircle,
  IoAlertCircle,
  IoSendOutline,
} from "react-icons/io5";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L&apos;email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d&apos;email invalide";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Simulation d'envoi de formulaire
      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.",
      });

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[40vh] pt-32 pb-16 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent2.webp"
            alt="Contact SAR Security"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>

        {/* Overlay foncé */}
        <div className="absolute inset-0 bg-black/60 z-1"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contactez <span className="text-yellow-500">Nous</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions et vous proposer des solutions adaptées
            </p>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 p-8 rounded-lg shadow-xl h-full border-t-4 border-yellow-500">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Nos Coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <IoLocationOutline
                        className="text-yellow-500"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Adresse</h3>
                      <p className="text-white/70">
                        Rue Butini 15, 1202 Genève, Suisse
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <IoCallOutline className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Téléphone</h3>
                      <p className="text-white/70">+41 79 850 15 78</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <IoMailOutline className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-white/70">contact@sar-security.ch</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <IoTimeOutline className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Horaires</h3>
                      <p className="text-white/70">Lun-Ven: 8h30 - 18h00</p>
                      <p className="text-white/70">
                        Service d&apos;urgence: 24h/24, 7j/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900/80 p-8 rounded-lg shadow-xl h-full">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envoyez-nous un message
                </h2>

                {formStatus.submitted && formStatus.success ? (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
                    <IoCheckmarkCircle
                      size={50}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message envoyé!
                    </h3>
                    <p className="text-white/80">{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-slate-800 border ${
                            errors.name ? "border-red-500" : "border-slate-700"
                          } rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
                          placeholder="Votre nom"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-white mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-slate-800 border ${
                            errors.email ? "border-red-500" : "border-slate-700"
                          } rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
                          placeholder="Votre email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-white mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                          placeholder="Votre numéro de téléphone"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-white mb-2"
                        >
                          Service concerné
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        >
                          <option value="">Sélectionner un service</option>
                          <option value="villas">
                            Surveillance des villas et résidences
                          </option>
                          <option value="boutiques">
                            Surveillance de boutiques
                          </option>
                          <option value="rapprochee">Garde rapprochée</option>
                          <option value="chantiers">
                            Surveillance de chantiers
                          </option>
                          <option value="evenements">
                            Surveillance d&apos;événements
                          </option>
                          <option value="rondes">
                            Rondes et interventions
                          </option>
                          <option value="evenementiels">
                            Services événementiels
                          </option>
                          <option value="autre">Autre demande</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-white mb-2"
                      >
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full bg-slate-800 border ${
                          errors.message ? "border-red-500" : "border-slate-700"
                        } rounded-md px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
                        placeholder="Détaillez votre demande..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-white/60 text-sm">
                        * Champs obligatoires
                      </p>
                      <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center"
                      >
                        <IoSendOutline className="mr-2" size={18} />
                        Envoyer
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte de localisation */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.2123097137397!2d6.1459126765202785!3d46.20576687901628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c651ee09da6d7%3A0x61c3bfb88c42af23!2sRue%20Butini%2015%2C%201202%20Gen%C3%A8ve%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1695296423427!5m2!1sfr!2sch"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SAR Security - Localisation Genève"
          className="filter grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500/5 pointer-events-none"></div>
      </section>
    </>
  );
}
