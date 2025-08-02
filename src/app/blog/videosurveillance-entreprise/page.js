import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaEye,
  FaShieldAlt,
  FaVideo,
  FaClock,
  FaChartLine,
  FaCheckCircle,
  FaCog,
  FaCloud,
  FaLock,
} from "react-icons/fa";

export const metadata = {
  title:
    "Vidéosurveillance en entreprise : un outil de dissuasion et d'analyse | SAR Security",
  description:
    "Découvrez comment les systèmes de vidéosurveillance modernes permettent de dissuader les intrusions et d'analyser les comportements pour améliorer la sécurité.",
  alternates: {
    canonical: "https://sar-security.ch/blog/videosurveillance-entreprise",
  },
};

export default function VideosurveillanceEntrepriseArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/video-surveillance.png"
            alt="Vidéosurveillance en entreprise"
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
                <span className="text-yellow-400">Vidéosurveillance</span> en
                entreprise
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Un outil de dissuasion et d&apos;analyse moderne
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>4 juillet 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Technologie & surveillance</span>
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
                La vidéosurveillance a considérablement évolué ces dernières
                années. Bien au-delà de la simple surveillance, les systèmes
                modernes offrent désormais des capacités d&apos;analyse
                comportementale, de reconnaissance automatique et
                d&apos;intelligence artificielle qui révolutionnent la sécurité
                en entreprise.
              </p>
            </div>

            {/* Evolution de la vidéosurveillance */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaVideo className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  L&apos;évolution de la vidéosurveillance moderne
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaEye className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Qualité d&apos;image HD/4K
                      </h3>
                      <p className="text-white/80">
                        Les caméras modernes offrent une résolution
                        exceptionnelle permettant l&apos;identification précise
                        des personnes et des détails.
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
                        Vision nocturne avancée
                      </h3>
                      <p className="text-white/80">
                        Technologies infrarouge et starlight pour une
                        surveillance efficace 24h/24, même dans l&apos;obscurité
                        totale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaChartLine className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Intelligence artificielle
                      </h3>
                      <p className="text-white/80">
                        Analyse automatique des comportements, détection
                        d&apos;intrusions et reconnaissance faciale pour une
                        sécurité proactive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaCloud className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Accès à distance
                      </h3>
                      <p className="text-white/80">
                        Surveillance en temps réel depuis n&apos;importe quel
                        appareil connecté via applications mobiles et
                        plateformes web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent3.png"
                alt="Système de vidéosurveillance moderne"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Centre de surveillance moderne avec technologie avancée
                </p>
              </div>
            </div>

            {/* Fonctions de dissuasion */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  La <span className="text-yellow-400">dissuasion</span> :
                  premier niveau de protection
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  La simple présence visible de caméras réduit significativement
                  les tentatives d&apos;intrusion et les comportements
                  inappropriés
                </p>
              </div>

              <div className="space-y-8">
                {/* Dissuasion 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Effet dissuasif immédiat
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        La visibilité des caméras décourage 90% des tentatives
                        d&apos;effraction
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Réduction drastique des vols et vandalismes
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Amélioration du comportement du personnel
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Diminution des risques d&apos;agression
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Protection des zones sensibles
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Prévention active
                        </h4>
                        <p className="text-white/70 text-sm">
                          La dissuasion reste la méthode la plus efficace
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dissuasion 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Signalétique et positionnement stratégique
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        L&apos;implantation réfléchie maximise l&apos;effet
                        dissuasif
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Panneaux d&apos;information conformes à la loi
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Positionnement visible aux points d&apos;accès
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Couverture des zones de passage obligé
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Éclairage adapté pour visibilité optimale
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaEye className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Visibilité maximale
                        </h4>
                        <p className="text-white/70 text-sm">
                          Placement stratégique pour effet optimal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capacités d'analyse */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Capacités d&apos;
                  <span className="text-yellow-400">analyse</span> avancées
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Les systèmes modernes transforment la surveillance passive en
                  outil d&apos;analyse comportementale et d&apos;optimisation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaChartLine className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Analyse comportementale
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Détection de comportements suspects
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Analyse des flux de personnes
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Reconnaissance d&apos;objets abandonnés
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Détection de chutes et accidents
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCog className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Automatisation intelligente
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Alertes automatiques en temps réel
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Enregistrement déclenché par événement
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Suivi automatique de cibles
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Reconnaissance faciale
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaLock className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Gestion des données
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Stockage sécurisé et chiffré
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Recherche rapide par critères
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Rapports d&apos;activité automatiques
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Conformité RGPD garantie
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Applications pratiques */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Applications</span>{" "}
                  pratiques en entreprise
                </h2>
                <p className="text-xl text-white/80">
                  Comment la vidéosurveillance améliore concrètement la sécurité
                  au quotidien
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Contrôle des accès",
                    items: [
                      "Vérification d'identité",
                      "Gestion des visiteurs",
                      "Surveillance des entrées",
                      "Traçabilité des mouvements",
                    ],
                  },
                  {
                    title: "Protection des biens",
                    items: [
                      "Surveillance des stocks",
                      "Protection du matériel",
                      "Contrôle des zones sensibles",
                      "Prévention des vols internes",
                    ],
                  },
                  {
                    title: "Sécurité du personnel",
                    items: [
                      "Détection d'agression",
                      "Surveillance des zones isolées",
                      "Alerte en cas d'accident",
                      "Amélioration des conditions de travail",
                    ],
                  },
                  {
                    title: "Optimisation opérationnelle",
                    items: [
                      "Analyse des flux de circulation",
                      "Optimisation des espaces",
                      "Mesure de fréquentation",
                      "Amélioration des processus",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center text-white/70">
                          <FaCheckCircle className="text-yellow-400 mr-3 text-sm" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Aspects légaux */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Conformité <span className="text-yellow-400">légale</span> et
                  respect de la vie privée
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  En Suisse, l&apos;installation de vidéosurveillance est
                  encadrée par la loi
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FaLock className="text-yellow-400 mr-3" />
                    Obligations légales
                  </h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Information préalable obligatoire
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Signalétique visible et conforme
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Finalité légitime et proportionnée
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Durée de conservation limitée
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FaShieldAlt className="text-yellow-400 mr-3" />
                    Bonnes pratiques
                  </h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Consultation du personnel
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Formation des utilisateurs
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Sécurisation des données
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Audit régulier du système
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Équipez votre entreprise d&apos;un système de vidéosurveillance
                moderne
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Nos experts vous accompagnent dans le choix, l&apos;installation
                et la gestion de votre système de vidéosurveillance. Demandez
                votre audit sécurité gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander un audit gratuit
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Nos solutions
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
                  href="/blog/controle-acces"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Sécuriser les accès : contrôle d&apos;accès et technologies
                    connectées
                  </h4>
                  <p className="text-white/70 text-sm">
                    Les solutions modernes de contrôle d&apos;accès
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
                    L&apos;expertise humaine au service de votre sécurité
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
