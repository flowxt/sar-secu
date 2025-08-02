import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaFire,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaEye,
  FaHandshake,
  FaBullhorn,
} from "react-icons/fa";

export const metadata = {
  title:
    "Service d'ordre pour la fête nationale suisse : sécurité du feu d'artifice | SAR Security",
  description:
    "Découvrez comment assurer la sécurité lors des festivités du 1er août en Suisse. Gestion des foules, protection du feu d'artifice et service d'ordre professionnel.",
  alternates: {
    canonical: "https://sar-security.ch/blog/service-ordre-fete-nationale",
  },
};

export default function ServiceOrdreFeteNationaleArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fete-suisse.png"
            alt="Fête nationale suisse - Service d'ordre"
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
                <span className="text-yellow-400">Service d&apos;ordre</span>{" "}
                fête nationale suisse
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Sécurité professionnelle pour les festivités du 1er août
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>2 août 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Événementiel & Service d&apos;ordre</span>
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
                La fête nationale suisse du 1er août rassemble des milliers de
                personnes à travers le pays pour célébrer dans la joie et la
                convivialité. Ces événements populaires, culminant avec les
                traditionnels feux d&apos;artifice, nécessitent une organisation
                sécuritaire rigoureuse. SAR Security vous accompagne pour
                assurer un service d&apos;ordre professionnel et discret.
              </p>
            </div>

            {/* Enjeux spécifiques */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaExclamationTriangle className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Enjeux sécuritaires de la fête nationale
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaUsers className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Gestion des foules
                      </h3>
                      <p className="text-white/80">
                        Concentration exceptionnelle de population nécessitant
                        une régulation des flux et une surveillance accrue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaFire className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Sécurité pyrotechnique
                      </h3>
                      <p className="text-white/80">
                        Protection du périmètre de tir, évacuation préventive et
                        surveillance des zones de retombées.
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
                        Horaires critiques
                      </h3>
                      <p className="text-white/80">
                        Pics d&apos;affluence en soirée, concentration lors du
                        feu d&apos;artifice et dispersion nocturne.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaHandshake className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Esprit festif
                      </h3>
                      <p className="text-white/80">
                        Maintenir la sécurité tout en préservant l&apos;ambiance
                        conviviale et familiale de l&apos;événement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/event.png"
                alt="Service d'ordre lors d'événement festif"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Équipes SAR Security en service d&apos;ordre événementiel
                </p>
              </div>
            </div>

            {/* Dispositif de sécurité */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Notre <span className="text-yellow-400">dispositif</span> de
                  sécurité
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Un service d&apos;ordre adapté aux spécificités des festivités
                  du 1er août, alliant professionnalisme et discrétion
                </p>
              </div>

              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Préparation et mise en place
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Reconnaissance préalable et déploiement stratégique des
                        équipes
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Étude du site et des accès
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Coordination avec les autorités locales
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Positionnement des équipes aux points stratégiques
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Briefing sécurité et consignes d&apos;urgence
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Préparation rigoureuse
                        </h4>
                        <p className="text-white/70 text-sm">
                          Anticipation et planification détaillée
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Contrôle d&apos;accès et filtrage
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Gestion des entrées et vérification des autorisations
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle des accès aux zones réglementées
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Vérification des interdictions (objets dangereux)
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Gestion des flux de visiteurs
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Accueil et information du public
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaUsers className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Filtrage efficace
                        </h4>
                        <p className="text-white/70 text-sm">
                          Contrôle bienveillant et professionnel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Surveillance du feu d&apos;artifice
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Sécurisation spécifique du spectacle pyrotechnique
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Périmètre de sécurité autour de la zone de tir
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Surveillance des zones de retombées
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Évacuation préventive si nécessaire
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Coordination avec les artificiers
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaFire className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Sécurité pyrotechnique
                        </h4>
                        <p className="text-white/70 text-sm">
                          Protection optimale du spectacle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compétences spécialisées */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Compétences</span>{" "}
                  spécialisées de nos équipes
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Nos agents sont spécialement formés pour les événements
                  festifs et la gestion de foules
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUsers className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Gestion de foules
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Psychology des foules
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Techniques de canalisation
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Prévention des mouvements de panique
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaBullhorn className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Communication
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Multilinguisme (FR/DE/EN)
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion des conflits
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Diplomatie et fermeté
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEye className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Vigilance
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Détection précoce
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Surveillance discrète
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Anticipation des risques
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaExclamationTriangle className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Gestion d&apos;urgence
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Premiers secours
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Procédures d&apos;évacuation
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Coordination services d&apos;urgence
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conseils pour organisateurs */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Conseils</span> pour les
                  organisateurs
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Comment bien préparer la sécurité de votre événement du 1er
                  août
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Planification préalable",
                    tips: [
                      "Analyse des risques spécifiques au site",
                      "Estimation du nombre de participants",
                      "Coordination avec les autorités locales",
                      "Plan d'évacuation et points de rassemblement",
                    ],
                  },
                  {
                    title: "Dimensionnement des équipes",
                    tips: [
                      "1 agent pour 100-150 personnes en moyenne",
                      "Renforcement aux points stratégiques",
                      "Équipes spécialisées pour le feu d'artifice",
                      "Supervision et coordination centrale",
                    ],
                  },
                  {
                    title: "Communication et signalétique",
                    tips: [
                      "Affichage des consignes de sécurité",
                      "Information sur les interdictions",
                      "Signalisation des issues de secours",
                      "Points d'information et de rencontre",
                    ],
                  },
                  {
                    title: "Matériel et équipements",
                    tips: [
                      "Systèmes de communication radio",
                      "Éclairage de sécurité mobile",
                      "Barrières de canalisation",
                      "Trousse de premiers secours",
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded-full mr-3">
                        {index + 1}
                      </span>
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.tips.map((tip, i) => (
                        <li
                          key={i}
                          className="flex items-start text-white/70 text-sm"
                        >
                          <FaCheckCircle className="text-yellow-400 mr-3 mt-1 text-xs flex-shrink-0" />
                          <span>{tip}</span>
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
                Organisez votre fête du 1er août en toute sérénité
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Confiez la sécurité de votre événement à nos professionnels.
                Service d&apos;ordre discret et efficace pour que vos invités
                profitent pleinement des festivités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Nos services événementiels
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
                  href="/blog/securite-evenementielle"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Sécurité événementielle à Genève
                  </h4>
                  <p className="text-white/70 text-sm">
                    Enjeux et solutions pour tous types d&apos;événements
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
                    L&apos;expertise de nos équipes de service d&apos;ordre
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
