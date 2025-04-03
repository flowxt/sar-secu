import Image from "next/image";
import Link from "next/link";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoBusinessOutline,
  IoCalendarOutline,
  IoWalkOutline,
  IoGlassesOutline,
  IoStorefrontOutline,
  IoShieldCheckmarkOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

export default function ServicesPage() {
  const services = [
    {
      id: "villas",
      icon: <IoHomeOutline size={48} />,
      title: "Surveillance des Villas et Résidences",
      description:
        "Protection complète de votre domicile pendant vos absences. Nos agents assurent des rondes régulières, vérifient les points d'accès et sécurisent votre propriété contre toute intrusion.",
      details: [
        "Rondes de surveillance planifiées",
        "Vérification des points d'entrée",
        "Surveillance périmétrique",
        "Intervention immédiate en cas d'incident",
        "Rapport détaillé après chaque visite",
      ],
    },
    {
      id: "rapprochee",
      icon: <IoPersonOutline size={48} />,
      title: "Garde Rapprochée",
      description:
        "Service de protection personnelle par des agents spécialisés et discrets. Protection continue lors de vos déplacements professionnels ou privés.",
      details: [
        "Protection VIP pour personnalités",
        "Escorte lors de déplacements sensibles",
        "Protection lors d'événements publics",
        "Agents formés aux techniques de protection rapprochée",
        "Planification d'itinéraires sécurisés",
      ],
      link: "/bodyguard",
    },
    {
      id: "boutiques",
      icon: <IoStorefrontOutline size={48} />,
      title: "Surveillance de Boutiques et Commerces",
      description:
        "Protection de vos points de vente contre le vol, les incivilités et le vandalisme. Nos agents assurent une présence dissuasive et interviennent en cas de besoin.",
      details: [
        "Agents en tenue ou en civil selon vos besoins",
        "Contrôle discret des zones sensibles",
        "Prévention des vols à l'étalage",
        "Gestion des situations conflictuelles",
        "Protection des employés et des clients",
      ],
    },
    {
      id: "chantiers",
      icon: <IoBusinessOutline size={48} />,
      title: "Surveillance de Chantiers",
      description:
        "Sécurisation complète de vos chantiers contre le vol, le vandalisme et les intrusions. Contrôle d'accès et surveillance continue pour protéger vos équipements et matériaux.",
      details: [
        "Prévention des vols de matériaux et équipements",
        "Contrôle des accès et gestion des entrées",
        "Surveillance nocturne",
        "Gardiennage fixe ou mobile",
        "Protection contre le vandalisme",
      ],
    },
    {
      id: "evenements",
      icon: <IoCalendarOutline size={48} />,
      title: "Surveillance d'Événements",
      description:
        "Services de sécurité pour tous types d'événements : conférences, réceptions, expositions, concerts. Gestion des accès, protection des invités et sécurisation du site.",
      details: [
        "Contrôle d'accès et filtrage",
        "Protection des invités de marque",
        "Gestion des flux de personnes",
        "Surveillance discrète",
        "Coordination avec les services d'urgence",
      ],
    },
    {
      id: "rondes",
      icon: <IoWalkOutline size={48} />,
      title: "Rondes et Interventions",
      description:
        "Patrouilles régulières et interventions rapides pour vérifier la sécurité de vos locaux. Service de rondes planifiées ou aléatoires pour dissuader les actes malveillants.",
      details: [
        "Rondes préventives à horaires variables",
        "Vérification des systèmes de sécurité",
        "Intervention rapide en cas d'urgence",
        "Rédaction de rapports d'intervention",
        "Coordination avec les forces de l'ordre",
      ],
    },
    {
      id: "evenementiels",
      icon: <IoGlassesOutline size={48} />,
      title: "Services Événementiels",
      description:
        "Services spécialisés pour vos événements d'entreprise, galas, mariages ou festivals. Nous assurons une sécurité discrète mais efficace pour le bon déroulement de votre événement.",
      details: [
        "Agents en tenue formelle adaptée à l'événement",
        "Sécurisation VIP",
        "Gestion de crise",
        "Prévention des incidents",
        "Service de voiturier et accueil",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] pt-32 pb-16 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/securite.webp"
            alt="Services de sécurité"
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
              Nos <span className="text-yellow-500">Services</span> de Sécurité
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Des solutions de sécurité complètes et personnalisées pour
              répondre à tous vos besoins en matière de protection
            </p>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solutions de Sécurité{" "}
              <span className="text-yellow-500">Professionnelles</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Une gamme complète de services adaptés aux besoins spécifiques des
              particuliers et des entreprises
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`bg-slate-900/80 p-8 rounded-xl border-l-4 border-yellow-500 shadow-xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="text-yellow-500 mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-white/80 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-white/70">
                        <IoCheckmarkCircleOutline
                          className="text-yellow-500 mt-1 mr-2 flex-shrink-0"
                          size={20}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link ? (
                    <Link
                      href={service.link}
                      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-md transition-colors mt-4"
                    >
                      En savoir plus
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-block bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-6 py-3 rounded-md transition-colors mt-4"
                    >
                      Demander un devis
                    </Link>
                  )}
                </div>
                <div
                  className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={`/images/agent${(index % 3) + 2}.${
                      index === 1 ? "png" : "webp"
                    }`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi Choisir{" "}
              <span className="text-yellow-500">SAR Security</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Notre engagement envers l'excellence et la satisfaction du client
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <IoShieldCheckmarkOutline size={40} />,
                title: "Expertise Certifiée",
                description:
                  "Agents formés et certifiés selon les standards les plus élevés",
              },
              {
                icon: <IoPersonOutline size={40} />,
                title: "Service Personnalisé",
                description:
                  "Solutions de sécurité adaptées à vos besoins spécifiques",
              },
              {
                icon: <IoWalkOutline size={40} />,
                title: "Disponibilité 24/7",
                description:
                  "Services de sécurité disponibles jour et nuit, 365 jours par an",
              },
              {
                icon: <IoCheckmarkCircleOutline size={40} />,
                title: "Technologie Avancée",
                description:
                  "Équipements et systèmes de sécurité à la pointe de la technologie",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 rounded-lg border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="text-yellow-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Besoin d'un service de sécurité sur mesure ?
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-8">
            Contactez nos experts pour une consultation personnalisée et un
            devis gratuit adapté à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black hover:bg-slate-900 text-white font-medium px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center text-lg"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+41223010000"
              className="bg-transparent hover:bg-black/10 text-black border border-black/30 font-medium px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center text-lg"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
