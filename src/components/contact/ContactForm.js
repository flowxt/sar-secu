"use client";

import { useState } from "react";
import {
  IoCheckmarkCircle,
  IoAlertCircle,
  IoSendOutline,
} from "react-icons/io5";

export default function ContactForm() {
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
    loading: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
        loading: true,
      });

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setFormStatus({
            submitted: true,
            success: true,
            message:
              "Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.",
            loading: false,
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
        } else {
          throw new Error(result.error || "Une erreur est survenue");
        }
      } catch (error) {
        setFormStatus({
          submitted: true,
          success: false,
          message:
            "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous contacter par téléphone.",
          loading: false,
        });
        console.error("Erreur d'envoi:", error);
      }
    }
  };

  return (
    <>
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
      ) : formStatus.submitted && !formStatus.success ? (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center">
          <IoAlertCircle size={50} className="text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Erreur</h3>
          <p className="text-white/80">{formStatus.message}</p>
          <button
            onClick={() => setFormStatus({ ...formStatus, submitted: false })}
            className="mt-4 bg-slate-800 text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors"
          >
            Réessayer
          </button>
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
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
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
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-2">
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
              <label htmlFor="service" className="block text-white mb-2">
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
                <option value="boutiques">Surveillance de boutiques</option>
                <option value="rapprochee">Garde rapprochée</option>
                <option value="chantiers">Surveillance de chantiers</option>
                <option value="evenements">
                  Surveillance d&apos;événements
                </option>
                <option value="rondes">Rondes et interventions</option>
                <option value="evenementiels">Services événementiels</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-white mb-2">
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
            <label htmlFor="message" className="block text-white mb-2">
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
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">* Champs obligatoires</p>
            <button
              type="submit"
              disabled={formStatus.loading}
              className={`bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-md transition-colors inline-flex items-center justify-center ${
                formStatus.loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {formStatus.loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <IoSendOutline className="mr-2" size={18} />
                  Envoyer
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
