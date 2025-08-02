import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaKey,
  FaShieldAlt,
  FaQrcode,
  FaFingerprint,
  FaMobile,
  FaCheckCircle,
  FaCog,
  FaWifi,
  FaLock,
} from "react-icons/fa";

export const metadata = {
  title:
    "Sécuriser les accès : contrôle d'accès, badges et technologies connectées | SAR Security",
  description:
    "Tour d'horizon des solutions de contrôle d'accès modernes : badges, QR codes, biométrie et leur intégration dans une stratégie de sécurité globale.",
  alternates: {
    canonical: "https://sar-security.ch/blog/controle-acces",
  },
};

export default function ControleAccesArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/controle-acces.png"
            alt="Contrôle d'accès moderne"
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
                <span className="text-yellow-400">Contrôle d&apos;accès</span>{" "}
                moderne
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Technologies connectées et sécurité intelligente
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>3 juin 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Sécurité électronique</span>
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
                Le contrôle d&apos;accès a radicalement évolué avec
                l&apos;arrivée des technologies connectées. Fini les simples
                clés mécaniques ! Badges RFID, QR codes, biométrie,
                reconnaissance faciale... Découvrez comment ces innovations
                transforment la sécurité des entreprises et s&apos;intègrent
                dans une stratégie globale.
              </p>
            </div>

            {/* Évolution du contrôle d'accès */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaKey className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  L&apos;évolution du contrôle d&apos;accès
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaKey className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Clés mécaniques
                    </h3>
                    <p className="text-white/70 text-sm">
                      Solution traditionnelle, difficile à gérer et peu
                      sécurisée
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaShieldAlt className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Badges RFID
                    </h3>
                    <p className="text-white/70 text-sm">
                      Technologie sans contact, programmable et traçable
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaFingerprint className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Biométrie
                    </h3>
                    <p className="text-white/70 text-sm">
                      Identification unique et infalsifiable par
                      caractéristiques physiques
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="text-center">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaMobile className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Mobile & Cloud
                    </h3>
                    <p className="text-white/70 text-sm">
                      Solutions connectées, gestion à distance et intelligence
                      artificielle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/garde-corps2.png"
                alt="Technologies de contrôle d'accès modernes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Technologies modernes de contrôle d&apos;accès
                </p>
              </div>
            </div>

            {/* Technologies modernes */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Technologies</span> de
                  contrôle d&apos;accès modernes
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Panorama des solutions disponibles et de leurs applications
                  spécifiques
                </p>
              </div>

              <div className="space-y-8">
                {/* Technologie 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Badges RFID et cartes à puce
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Solution éprouvée, polyvalente et économique
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Avantages :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Coût abordable
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Installation simple
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Gestion centralisée
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Traçabilité complète
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Applications :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Entreprises de toute taille
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Contrôle d&apos;horaires
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Accès multi-zones
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Intégration systèmes RH
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Solution éprouvée
                        </h4>
                        <p className="text-white/70 text-sm">
                          Fiabilité et polyvalence pour tous usages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologie 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          QR Codes et codes à barres
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Solutions flexibles et économiques pour accès
                        temporaires
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Avantages :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Génération instantanée
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Envoi par email/SMS
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Durée limitée
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Révocation immédiate
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Cas d&apos;usage :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Visiteurs ponctuels
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Événements temporaires
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Prestataires externes
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Accès d&apos;urgence
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaQrcode className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Flexibilité maximale
                        </h4>
                        <p className="text-white/70 text-sm">
                          Accès temporaires et gestion simplifiée
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologie 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Solutions biométriques
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Sécurité maximale par identification unique
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Technologies :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Empreintes digitales
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Reconnaissance faciale
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Scanner d&apos;iris
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Reconnaissance vocale
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Secteurs privilégiés :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Laboratoires pharmaceutiques
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Data centers
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Établissements financiers
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Zones ultra-sécurisées
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaFingerprint className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Sécurité ultime
                        </h4>
                        <p className="text-white/70 text-sm">
                          Identification unique et infalsifiable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intégration systèmes */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Intégration</span> dans une
                  stratégie globale
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Le contrôle d&apos;accès moderne s&apos;intègre parfaitement
                  avec les autres systèmes de sécurité de l&apos;entreprise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCog className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Vidéosurveillance
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Déclenchement automatique
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Enregistrement des accès
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Vérification d&apos;identité
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaWifi className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Systèmes d&apos;alarme
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Activation/désactivation auto
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Zones de sécurité
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Alerte intrusion
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaMobile className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Gestion RH
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Pointage automatique
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion des horaires
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Rapports d&apos;activité
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaLock className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Domotique
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Éclairage automatique
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Climatisation adaptative
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Économies d&apos;énergie
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tendances futures */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Tendances</span> et
                  innovations
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  L&apos;avenir du contrôle d&apos;accès se dessine
                  aujourd&apos;hui
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Intelligence Artificielle",
                    icon: FaCog,
                    features: [
                      "Reconnaissance comportementale",
                      "Détection d'anomalies",
                      "Apprentissage automatique",
                      "Prédiction des risques",
                    ],
                  },
                  {
                    title: "Technologies sans contact",
                    icon: FaWifi,
                    features: [
                      "Bluetooth Low Energy",
                      "Détection par smartphone",
                      "Géolocalisation indoor",
                      "Accès mains libres",
                    ],
                  },
                  {
                    title: "Cloud et mobilité",
                    icon: FaMobile,
                    features: [
                      "Gestion centralisée",
                      "Applications mobiles",
                      "Mise à jour OTA",
                      "Accès multi-sites",
                    ],
                  },
                ].map((trend, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <div className="text-center mb-4">
                      <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <trend.icon className="text-yellow-400 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {trend.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {trend.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-white/70 text-sm"
                        >
                          <FaCheckCircle className="text-yellow-400 mr-3 text-xs flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Modernisez votre système de contrôle d&apos;accès
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Nos experts analysent vos besoins et vous conseillent sur les
                meilleures technologies de contrôle d&apos;accès adaptées à
                votre entreprise. Devis gratuit et installation professionnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander une étude
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Nos solutions sécurité
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
                    Complémentarité avec le contrôle d&apos;accès
                  </p>
                </Link>
                <Link
                  href="/blog/agents-securite-competences"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Agents de sécurité : compétences et missions
                  </h4>
                  <p className="text-white/70 text-sm">
                    L&apos;expertise humaine complémentaire
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
