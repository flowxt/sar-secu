import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaFire,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBook,
  FaCheckCircle,
  FaBuilding,
  FaClock,
  FaUsers,
  FaPhone,
} from "react-icons/fa";

export const metadata = {
  title:
    "Sécurité incendie : obligations et bonnes pratiques pour les entreprises | SAR Security",
  description:
    "Découvrez les obligations légales en Suisse concernant la sécurité incendie. Extincteurs, alarmes, évacuations : guide complet pour la conformité.",
  alternates: {
    canonical: "https://sar-security.ch/blog/securite-incendie",
  },
};

export default function SecuriteIncendieArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/securite-incendie.png"
            alt="Sécurité incendie en entreprise"
            fill
            priority
            className="object-cover brightness-[0.2]"
          />
        </div>

        {/* Overlay avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-1"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors font-medium"
            >
              <FaArrowLeft className="mr-2" />
              Retour aux articles
            </Link>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-yellow-400">Sécurité incendie</span> en
                entreprise
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Obligations légales et bonnes pratiques en Suisse
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>20 juin 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Prévention & réglementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                La sécurité incendie en entreprise n&apos;est pas une option :
                c&apos;est une obligation légale stricte en Suisse. Au-delà des
                aspects réglementaires, une bonne prévention incendie protège
                vos collaborateurs, vos biens et assure la continuité de votre
                activité. Découvrez les exigences légales et les meilleures
                pratiques.
              </p>
            </div>

            {/* Cadre légal suisse */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaBook className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Cadre légal de la sécurité incendie en Suisse
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaBook className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Loi fédérale
                      </h3>
                      <p className="text-white/80">
                        La Loi sur la protection contre l&apos;incendie (LPI) et
                        ses ordonnances définissent les obligations de base.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaBuilding className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Normes cantonales
                      </h3>
                      <p className="text-white/80">
                        Chaque canton peut avoir des exigences spécifiques selon
                        le type de bâtiment et d&apos;activité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaExclamationTriangle className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Responsabilité civile
                      </h3>
                      <p className="text-white/80">
                        L&apos;employeur est responsable de la sécurité de ses
                        collaborateurs et visiteurs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaClock className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Contrôles périodiques
                      </h3>
                      <p className="text-white/80">
                        Des inspections régulières par les autorités compétentes
                        sont obligatoires.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/securite-incendie.png"
                alt="Formation sécurité incendie"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Formation et sensibilisation du personnel
                </p>
              </div>
            </div>

            {/* Obligations obligatoires */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Obligations</span>{" "}
                  incontournables
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Les équipements et mesures de sécurité incendie obligatoires
                  selon la réglementation suisse
                </p>
              </div>

              <div className="space-y-8">
                {/* Obligation 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Extincteurs et équipements de lutte
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Installation et maintenance d&apos;extincteurs adaptés
                        aux risques
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Extincteurs à poudre ABC (feux mixtes)
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Extincteurs CO2 (équipements électriques)
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle annuel obligatoire
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Signalisation et accessibilité garanties
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaFire className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Première intervention
                        </h4>
                        <p className="text-white/70 text-sm">
                          Équipements de lutte immédiate contre le feu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Obligation 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Système d&apos;alarme incendie
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Détection précoce et alerte automatique des occupants
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Détecteurs de fumée dans les zones à risque
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Centrale d&apos;alarme certifiée
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Déclencheurs manuels d&apos;alarme
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Liaison directe avec les pompiers
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaExclamationTriangle className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Alerte précoce
                        </h4>
                        <p className="text-white/70 text-sm">
                          Détection et notification automatiques
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Obligation 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Voies d&apos;évacuation et éclairage de sécurité
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Chemins d&apos;évacuation sécurisés et éclairés
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Signalisation des issues de secours
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Éclairage de sécurité autonome
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Largeur minimale des couloirs d&apos;évacuation
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Plans d&apos;évacuation affichés
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaUsers className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Évacuation sécurisée
                        </h4>
                        <p className="text-white/70 text-sm">
                          Chemins d&apos;évacuation clairement balisés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonnes pratiques */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Bonnes pratiques</span>{" "}
                  recommandées
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Au-delà des obligations légales, ces mesures renforcent
                  significativement votre niveau de sécurité
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUsers className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Formation du personnel
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Exercices d&apos;évacuation trimestriels
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Formation à l&apos;utilisation des extincteurs
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Désignation d&apos;équipiers de première intervention
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Sensibilisation aux risques spécifiques
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaShieldAlt className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Prévention active
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Contrôle des installations électriques
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion des matières inflammables
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Maintenance préventive des équipements
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Audit sécurité incendie annuel
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaClock className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Surveillance continue
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Veille de sécurité 24h/24
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Rondes de sécurité régulières
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Télésurveillance des alarmes
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Intervention rapide en cas d&apos;alerte
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Secteurs à risque */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Secteurs à{" "}
                  <span className="text-yellow-400">risque élevé</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Certaines activités nécessitent des mesures renforcées
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Industries chimiques et pharmaceutiques",
                    risks: [
                      "Stockage de produits inflammables",
                      "Réactions chimiques exothermiques",
                      "Vapeurs toxiques",
                      "Explosion potentielle",
                    ],
                    measures: [
                      "Sprinkleurs automatiques",
                      "Détection gaz",
                      "Zones ATEX",
                      "Confinement des risques",
                    ],
                  },
                  {
                    title: "Entrepôts et logistique",
                    risks: [
                      "Grande hauteur de stockage",
                      "Matières combustibles",
                      "Circulation d'engins",
                      "Propagation rapide",
                    ],
                    measures: [
                      "Désenfumage automatique",
                      "Cloisonnement coupe-feu",
                      "Surveillance par caméras",
                      "Brigades d'intervention",
                    ],
                  },
                  {
                    title: "Établissements recevant du public",
                    risks: [
                      "Forte densité d'occupation",
                      "Évacuation complexe",
                      "Panique collective",
                      "Responsabilité accrue",
                    ],
                    measures: [
                      "Éclairage de sécurité renforcé",
                      "Personnel formé",
                      "Systèmes d'annonce vocale",
                      "Plans d'évacuation détaillés",
                    ],
                  },
                  {
                    title: "Data centers et informatique",
                    risks: [
                      "Équipements électroniques sensibles",
                      "Câblages électriques",
                      "Systèmes de refroidissement",
                      "Continuité d'activité critique",
                    ],
                    measures: [
                      "Extinction par gaz inerte",
                      "Détection très précoce",
                      "Surveillance 24h/24",
                      "Redondance des systèmes",
                    ],
                  },
                ].map((sector, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <h3 className="text-xl font-bold text-white mb-4">
                      {sector.title}
                    </h3>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        Risques spécifiques :
                      </h4>
                      <ul className="space-y-1">
                        {sector.risks.map((risk, i) => (
                          <li
                            key={i}
                            className="flex items-center text-white/70 text-xs"
                          >
                            <FaExclamationTriangle className="text-red-400 mr-2 text-xs" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        Mesures recommandées :
                      </h4>
                      <ul className="space-y-1">
                        {sector.measures.map((measure, i) => (
                          <li
                            key={i}
                            className="flex items-center text-white/70 text-xs"
                          >
                            <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                            <span>{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Audit de sécurité incendie de votre entreprise
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Nos experts certifiés réalisent un audit complet de vos
                installations et vous accompagnent dans la mise en conformité.
                Protégez votre entreprise et vos collaborateurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander un audit
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Nos prestations sécurité
                </Link>
              </div>
            </div>

            {/* Navigation vers d'autres articles */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles similaires
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/videosurveillance-entreprise"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Vidéosurveillance : outil de dissuasion et d&apos;analyse
                  </h4>
                  <p className="text-white/70 text-sm">
                    Technologies modernes de surveillance
                  </p>
                </Link>
                <Link
                  href="/blog/controle-acces"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Contrôle d&apos;accès et technologies connectées
                  </h4>
                  <p className="text-white/70 text-sm">
                    Sécuriser les accès de votre entreprise
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
