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
  FaHandshake,
  FaStar,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";

export const metadata = {
  title:
    "Accueil sécurisé en entreprise : allier sécurité et image professionnelle | SAR Security",
  description:
    "Découvrez comment l'accueil sécurisé peut valoriser l'image de votre entreprise tout en garantissant un niveau de sécurité optimal. Solutions d'agents polyvalents.",
  alternates: {
    canonical: "https://sar-security.ch/blog/accueil-securise",
  },
};

export default function AccueilSecuriseArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent2.webp"
            alt="Accueil sécurisé en entreprise"
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
                <span className="text-yellow-400">Accueil sécurisé</span> en
                entreprise
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Allier sécurité et image professionnelle
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>1er juillet 2024</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Accueil sécurisé</span>
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
                L&apos;accueil constitue le premier point de contact entre votre
                entreprise et le public. Il doit à la fois refléter votre image
                de marque et garantir un niveau de sécurité optimal. SAR
                Security propose une solution innovante : des agents
                d&apos;accueil formés à la sécurité, alliant professionnalisme
                et protection.
              </p>
            </div>

            {/* Double enjeu */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaHandshake className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Un double enjeu : sécurité et représentation
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaStar className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Image de marque
                      </h3>
                      <p className="text-white/80">
                        L&apos;accueil reflète les valeurs et le
                        professionnalisme de votre entreprise.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaShieldAlt className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Sécurité des biens et des personnes
                      </h3>
                      <p className="text-white/80">
                        Contrôler les accès et prévenir les intrusions ou
                        comportements suspects.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaEye className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Gestion des flux
                      </h3>
                      <p className="text-white/80">
                        Orienter efficacement les visiteurs et optimiser leur
                        parcours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaCheckCircle className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Conformité réglementaire
                      </h3>
                      <p className="text-white/80">
                        Respecter les obligations légales en matière de sécurité
                        et d&apos;accueil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/garde-corps2.png"
                alt="Agent d'accueil sécurisé en entreprise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Agent d&apos;accueil sécurisé professionnel
                </p>
              </div>
            </div>

            {/* Missions en accueil sécurisé */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nos missions en{" "}
                  <span className="text-yellow-400">accueil sécurisé</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  SAR Security propose des agents polyvalents capables
                  d&apos;assurer simultanément les missions d&apos;accueil et de
                  sécurité
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
                          Filtrage des visiteurs et contrôle d&apos;accès
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        La première ligne de défense de votre entreprise
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Vérification de l&apos;identité des visiteurs
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle des rendez-vous et autorisations
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Gestion des badges visiteurs temporaires
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Refus d&apos;accès aux personnes non autorisées
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Sécurité renforcée
                        </h4>
                        <p className="text-white/70 text-sm">
                          Contrôle rigoureux des accès avec professionnalisme
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
                          Surveillance des halls d&apos;entrée
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Une vigilance constante pour détecter les anomalies
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Observation discrète des comportements suspects
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Surveillance des zones d&apos;attente
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle des accès aux ascenseurs et escaliers
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Protection des espaces de réception
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaEye className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Surveillance discrète
                        </h4>
                        <p className="text-white/70 text-sm">
                          Vigilance permanente sans créer d&apos;inconfort
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
                          Assistance aux visiteurs avec professionnalisme
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Un service client de qualité malgré les contraintes
                        sécuritaires
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Accueil chaleureux et professionnel
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Information et orientation des visiteurs
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Gestion des appels téléphoniques
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Communication multilingue
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaUserTie className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Excellence relationnelle
                        </h4>
                        <p className="text-white/70 text-sm">
                          Service client de haute qualité
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agents polyvalents */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Des agents{" "}
                  <span className="text-yellow-400">polyvalents</span> et
                  hautement qualifiés
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Nos collaborateurs bénéficient d&apos;une formation complète
                  qui leur permet d&apos;exceller dans leurs missions duales
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaShieldAlt className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Formation sécurité
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Techniques de surveillance
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion des conflits
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Procédures d&apos;urgence
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Premiers secours
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUserTie className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Formation accueil
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Communication client
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Protocole d&apos;accueil
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Gestion du stress
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Langues étrangères
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaStar className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Présentation irréprochable
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Tenue professionnelle
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Attitude courtoise
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Discrétion sécuritaire
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-2 text-xs" />
                      Adaptabilité
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Secteurs d'application */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Secteurs</span>{" "}
                  d&apos;application
                </h2>
                <p className="text-xl text-white/80">
                  L&apos;accueil sécurisé s&apos;adapte à tous types
                  d&apos;environnements
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: FaBuilding,
                    title: "Sièges sociaux",
                    desc: "et bureaux",
                  },
                  {
                    icon: FaUserTie,
                    title: "Centres médicaux",
                    desc: "et cliniques",
                  },
                  {
                    icon: FaShieldAlt,
                    title: "Établissements",
                    desc: "financiers",
                  },
                  { icon: FaStar, title: "Cabinets", desc: "d'avocats" },
                  { icon: FaEye, title: "Centres", desc: "de formation" },
                  {
                    icon: FaBuilding,
                    title: "Résidences",
                    desc: "de standing",
                  },
                  { icon: FaHandshake, title: "Centres", desc: "commerciaux" },
                  {
                    icon: FaCheckCircle,
                    title: "Institutions",
                    desc: "publiques",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <item.icon className="text-yellow-400 text-2xl mx-auto mb-2" />
                    <h4 className="text-white font-medium text-sm">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Discutons de votre projet d&apos;accueil sécurisé
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour analyser vos besoins
                et vous proposer la solution d&apos;accueil sécurisé la plus
                adaptée à votre environnement professionnel.
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
                  Découvrir nos services
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
                  href="/blog/protection-rapprochee"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Protection rapprochée : quand faire appel à un bodyguard ?
                  </h4>
                  <p className="text-white/70 text-sm">
                    Les situations qui nécessitent une protection personnalisée
                  </p>
                </Link>
                <Link
                  href="/blog/securite-evenementielle"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Sécurité événementielle à Genève
                  </h4>
                  <p className="text-white/70 text-sm">
                    Enjeux et solutions pour vos événements
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
