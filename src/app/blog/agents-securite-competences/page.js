import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaUserTie,
  FaShieldAlt,
  FaEye,
  FaGraduationCap,
  FaHandshake,
  FaCheckCircle,
  FaCertificate,
  FaBrain,
  FaHeart,
} from "react-icons/fa";

export const metadata = {
  title:
    "Agents de sécurité : quelles compétences pour quelles missions ? | SAR Security",
  description:
    "Découvrez les différentes missions des agents de sécurité et les compétences essentielles à chaque type de mission. L'expertise au service de votre sécurité.",
  alternates: {
    canonical: "https://sar-security.ch/blog/agents-securite-competences",
  },
};

export default function AgentsSecuriteCompetencesArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/formation-agent.png"
            alt="Agent de sécurité professionnel"
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
                <span className="text-yellow-400">Agents de sécurité</span> :
                compétences et missions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                L&apos;expertise humaine au cœur de la sécurité moderne
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>23 juillet 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Recrutement & RH</span>
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
                Le métier d&apos;agent de sécurité a considérablement évolué.
                Aujourd&apos;hui, ces professionnels doivent maîtriser une
                palette de compétences variées, alliant expertise technique,
                qualités relationnelles et capacités d&apos;adaptation.
                Découvrez les profils et formations qui font l&apos;excellence
                de nos équipes.
              </p>
            </div>

            {/* Évolution du métier */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaUserTie className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  L&apos;évolution du métier d&apos;agent de sécurité
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaShieldAlt className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Polyvalence accrue
                      </h3>
                      <p className="text-white/80">
                        D&apos;un rôle de surveillance passive, les agents
                        évoluent vers des missions diversifiées : accueil,
                        contrôle, prévention.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaBrain className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Technologies intégrées
                      </h3>
                      <p className="text-white/80">
                        Maîtrise des systèmes de vidéosurveillance, contrôle
                        d&apos;accès et outils de communication modernes.
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
                        Relations humaines
                      </h3>
                      <p className="text-white/80">
                        Emphasis croissante sur les compétences relationnelles
                        et la gestion de conflits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaCertificate className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Professionnalisation
                      </h3>
                      <p className="text-white/80">
                        Formations certifiantes et spécialisations selon les
                        secteurs d&apos;activité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent2.webp"
                alt="Équipe d'agents de sécurité professionnels"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Équipe SAR Security : expertise et professionnalisme
                </p>
              </div>
            </div>

            {/* Missions et compétences */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Missions</span> et
                  compétences associées
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Chaque type de mission nécessite un ensemble de compétences
                  spécifiques que nos agents maîtrisent parfaitement
                </p>
              </div>

              <div className="space-y-8">
                {/* Mission 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Surveillance et observation
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Mission fondamentale nécessitant vigilance et
                        discernement
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Compétences techniques :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Maîtrise des systèmes de vidéosurveillance
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Techniques d&apos;observation
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Gestion des alarmes
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Qualités personnelles :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Concentration soutenue
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Capacité d&apos;analyse
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Sang-froid
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaEye className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Vigilance constante
                        </h4>
                        <p className="text-white/70 text-sm">
                          L&apos;œil expert qui veille sur votre sécurité
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission 2 */}
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
                        Première ligne de défense, nécessitant autorité et
                        diplomatie
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Compétences techniques :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Vérification d&apos;identité
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Gestion des badges
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Procédures de sécurité
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Qualités relationnelles :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Communication claire
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Fermeté bienveillante
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Gestion du stress
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Protection des accès
                        </h4>
                        <p className="text-white/70 text-sm">
                          Contrôle rigoureux avec approche humaine
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Accueil et service client
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Vitrine de l&apos;entreprise, alliant sécurité et
                        hospitalité
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Compétences d&apos;accueil :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Excellence relationnelle
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Multilinguisme
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Protocole d&apos;entreprise
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-2">
                            Compétences sécuritaires :
                          </h4>
                          <ul className="space-y-1 text-white/70 text-sm">
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Surveillance discrète
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Détection d&apos;anomalies
                            </li>
                            <li className="flex items-center">
                              <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                              Gestion d&apos;urgence
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaHandshake className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Excellence relationnelle
                        </h4>
                        <p className="text-white/70 text-sm">
                          Premier contact, première impression
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formation et certification */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Formation</span> et
                  certification de nos agents
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Chez SAR Security, nous investissons dans l&apos;excellence de
                  nos équipes par une formation continue et rigoureuse
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCertificate className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Certification officielle
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Autorisation cantonale
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Formation réglementaire
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Mise à jour annuelle
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaGraduationCap className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Formation technique
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Systèmes de sécurité
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Premiers secours
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion d&apos;urgence
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHeart className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Savoir-être
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Communication
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion du stress
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Éthique professionnelle
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaBrain className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Spécialisations
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Protection rapprochée
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Sécurité événementielle
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Surveillance électronique
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Processus de recrutement */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Notre processus de{" "}
                  <span className="text-yellow-400">recrutement</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Une sélection rigoureuse pour garantir l&apos;excellence de
                  nos services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Sélection initiale",
                    items: [
                      "Vérification du casier judiciaire",
                      "Analyse du CV et expériences",
                      "Entretien de motivation",
                      "Tests psychotechniques",
                    ],
                  },
                  {
                    step: "02",
                    title: "Évaluation des compétences",
                    items: [
                      "Mise en situation pratique",
                      "Tests de réactivité",
                      "Évaluation relationnelle",
                      "Validation des références",
                    ],
                  },
                  {
                    step: "03",
                    title: "Formation d'intégration",
                    items: [
                      "Formation aux procédures SAR",
                      "Accompagnement terrain",
                      "Évaluation continue",
                      "Validation finale",
                    ],
                  },
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <div className="text-center mb-4">
                      <span className="bg-yellow-500 text-black font-bold text-xl px-4 py-2 rounded-full">
                        {phase.step}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-4 mb-4">
                        {phase.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-white/70 text-sm"
                        >
                          <FaCheckCircle className="text-yellow-400 mr-3 mt-1 text-xs flex-shrink-0" />
                          <span>{item}</span>
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
                Rejoignez l&apos;équipe SAR Security
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Vous cherchez une carrière dans la sécurité ? Nous recherchons
                constamment des profils motivés et professionnels pour renforcer
                nos équipes à Genève.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Postuler maintenant
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Découvrir nos missions
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
                  href="/blog/accueil-securise"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Accueil sécurisé : allier sécurité et image professionnelle
                  </h4>
                  <p className="text-white/70 text-sm">
                    Les agents polyvalents au service de votre image
                  </p>
                </Link>
                <Link
                  href="/blog/videosurveillance-entreprise"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Vidéosurveillance : outil de dissuasion et d&apos;analyse
                  </h4>
                  <p className="text-white/70 text-sm">
                    La technologie au service de la sécurité
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
