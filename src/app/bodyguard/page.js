import Image from "next/image";
import Link from "next/link";
import {
  IoShieldCheckmarkOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoIdCardOutline,
} from "react-icons/io5";

export default function BodyguardPage() {
  return (
    <>
      {/* Section Héro */}
      <div className="relative min-h-[80vh] overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent4.png"
            alt="Bodyguard professionnel"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>

        {/* Overlay foncé pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/70 z-1"></div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Service <span className="text-yellow-500">Bodyguard</span> &
              Protection Rapprochée
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Une protection discrète et professionnelle assurée par des agents
              hautement qualifiés et expérimentés. Votre sécurité personnelle
              est notre priorité absolue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                Contact d&apos;urgence
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Services de Protection */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services de{" "}
              <span className="text-yellow-500">Protection Rapprochée</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Des solutions personnalisées pour répondre à vos besoins
              spécifiques de sécurité
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <IoPersonOutline size={36} />,
                title: "Protection VIP",
                description:
                  "Protection discrète et efficace pour personnalités, cadres supérieurs et individus à haut profil.",
              },
              {
                icon: <IoTimeOutline size={36} />,
                title: "Protection 24/7",
                description:
                  "Services de protection continue adaptés à vos déplacements et à votre emploi du temps.",
              },
              {
                icon: <IoEyeOutline size={36} />,
                title: "Analyse des Risques",
                description:
                  "Évaluation complète des menaces potentielles et élaboration de stratégies de protection.",
              },
              {
                icon: <IoLockClosedOutline size={36} />,
                title: "Sécurité Événementielle",
                description:
                  "Protection rapprochée lors d&apos;événements privés, professionnels ou publics.",
              },
              {
                icon: <IoShieldCheckmarkOutline size={36} />,
                title: "Escorte Sécurisée",
                description:
                  "Transport sécurisé de personnes importantes ou de biens de valeur.",
              },
              {
                icon: <IoIdCardOutline size={36} />,
                title: "Agents Certifiés",
                description:
                  "Équipe d&apos;agents hautement qualifiés avec formation spécialisée en protection rapprochée.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-lg shadow-xl p-8 border-l-4 border-yellow-500 hover:translate-y-[-5px] transition-all duration-300 group"
              >
                <div className="text-yellow-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi Nous Choisir */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi Choisir{" "}
              <span className="text-yellow-500">SAR Security</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Une approche professionnelle et discrète de la protection
              personnelle
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/agent3.png"
                alt="Agent de sécurité professionnel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white text-xl font-bold mb-2">
                  Expertise Professionnelle
                </div>
                <p className="text-white/90">
                  Plus de 15 ans d&apos;expérience dans la protection rapprochée
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Équipe d&apos;Élite",
                  description:
                    "Nos agents sont rigoureusement sélectionnés et formés selon les standards internationaux les plus élevés.",
                },
                {
                  title: "Discrétion Absolue",
                  description:
                    "Nous garantissons la confidentialité totale et une présence discrète adaptée à votre image.",
                },
                {
                  title: "Disponibilité Immédiate",
                  description:
                    "Notre équipe est prête à intervenir rapidement pour répondre à vos besoins urgents de sécurité.",
                },
                {
                  title: "Solutions Sur Mesure",
                  description:
                    "Chaque service est personnalisé selon votre profil, vos activités et le niveau de risque spécifique.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-yellow-500/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce que disent <span className="text-yellow-500">Nos Clients</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre meilleure référence
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "L&apos;équipe de SAR Security a assuré ma protection lors d&apos;une série d&apos;événements publics. Leur professionnalisme et leur discrétion ont été irréprochables.",
                author: "C.M., Chef d&apos;Entreprise",
              },
              {
                quote:
                  "Après avoir reçu des menaces, j&apos;ai fait appel à SAR Security. Leur réactivité et leur approche personnalisée m&apos;ont permis de retrouver ma tranquillité.",
                author: "L.D., Personnalité Publique",
              },
              {
                quote:
                  "Pour la sécurité de notre événement VIP, SAR Security a déployé une équipe parfaitement coordonnée et efficace. Un service haut de gamme.",
                author: "S.K., Organisateur d&apos;Événements",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg p-8 border border-slate-800 relative"
              >
                <div className="text-yellow-500 text-5xl absolute top-4 left-4 opacity-20">
                  &quot;
                </div>
                <p className="text-white/80 italic mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="text-yellow-500 font-medium">
                  {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Votre sécurité mérite le meilleur
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-8">
            Contactez notre équipe d&apos;experts pour une consultation
            personnalisée et confidentielle
          </p>
          <Link
            href="/contact"
            className="bg-black hover:bg-slate-900 text-white font-medium px-10 py-4 rounded-md transition-colors inline-flex items-center justify-center text-lg"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
