import Image from "next/image";
import ContactForm from "../../components/contact/ContactForm";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";

export const metadata = {
  title: "Contact | SAR Security Genève",
  description:
    "Contactez SAR Security pour tous vos besoins en sécurité privée à Genève. Demande de devis, renseignements ou service d'urgence.",
  alternates: {
    canonical: "https://sar-security.ch/contact",
  },
};

export default function ContactPage() {
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
                      <h3 className="text-white font-medium">
                        Heures d&apos;ouverture
                      </h3>
                      <p className="text-white/70">
                        Lun - Ven: 8h30 - 18h00
                        <br />
                        Service d&apos;urgence 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 p-6 bg-yellow-500 rounded-lg">
                  <h3 className="text-black font-bold text-lg mb-2">
                    Besoin d&apos;une intervention urgente ?
                  </h3>
                  <p className="text-black/80 mb-4">
                    Notre équipe d&apos;intervention est disponible 24h/24 et
                    7j/7 pour répondre à vos besoins urgents.
                  </p>
                  <a
                    href="tel:+41798501578"
                    className="inline-block w-full bg-black text-white text-center py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
                  >
                    Appeler Maintenant
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre <span className="text-yellow-500">Emplacement</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nous sommes idéalement situés au cœur de Genève pour intervenir
              rapidement dans toute la région lémanique
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.2497895584543!2d6.142857876572912!3d46.21204787102066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693a0c79f%3A0x9de9c9ec4c353249!2sRue%20Butini%2015%2C%201202%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1708801553019!5m2!1sfr!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
