import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaBuilding,
  FaShieldAlt,
  FaEye,
  FaClock,
  FaCheckCircle,
  FaWalking,
  FaVideo,
  FaUserShield,
  FaKey,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title:
    "Surveillance d'immeubles à Genève : rondes et vidéosurveillance | SAR Security",
  description:
    "Solutions de surveillance pour immeubles et copropriétés à Genève. Rondes de sécurité, vidéosurveillance et gardiennage adaptés aux régies et syndics.",
  alternates: {
    canonical: "https://sar-security.ch/blog/surveillance-immeubles-geneve",
  },
};

export default function SurveillanceImmeublesArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent-ronde.png"
            alt="Surveillance d'immeubles à Genève"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>

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
                Surveillance d&apos;
                <span className="text-yellow-400">immeubles</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Solutions adaptées aux régies et copropriétés genevoises
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>22 avril 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Surveillance résidentielle</span>
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
                Garantir le bien-être et la tranquillité des résidents fait
                partie des missions essentielles de tout syndic d&apos;immeuble.
                À Genève, les copropriétés modernes recherchent des solutions
                de surveillance professionnelles, discrètes et adaptées à leur
                budget. Tour d&apos;horizon des prestations qui font vraiment
                la différence.
              </p>
            </div>

            {/* Pourquoi surveiller un immeuble */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaBuilding className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Pourquoi mettre en place une surveillance professionnelle ?
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
                        Tranquillité des résidents
                      </h3>
                      <p className="text-white/80">
                        Les copropriétaires apprécient de savoir que leur
                        immeuble bénéficie d&apos;une présence professionnelle,
                        notamment lors des absences ou en soirée.
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
                        Valorisation du patrimoine
                      </h3>
                      <p className="text-white/80">
                        Un immeuble bien surveillé est un immeuble qui se
                        valorise. C&apos;est un argument important lors de la
                        vente ou de la location d&apos;appartements.
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
                        Préservation des espaces communs
                      </h3>
                      <p className="text-white/80">
                        Halls, ascenseurs, parkings et espaces verts restent
                        propres et bien entretenus grâce à une surveillance
                        régulière et dissuasive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaKey className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Gestion des accès
                      </h3>
                      <p className="text-white/80">
                        Contrôle des entrées, vérification des livraisons,
                        accueil des prestataires : autant de tâches qui
                        bénéficient d&apos;une présence professionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/video-surveillance.png"
                alt="Vidéosurveillance moderne pour immeuble"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Technologies modernes au service des copropriétés
                </p>
              </div>
            </div>

            {/* Solutions disponibles */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nos <span className="text-yellow-400">solutions</span> pour
                  immeubles
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Des prestations modulables qui s&apos;adaptent à la taille et
                  au standing de chaque copropriété
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Rondes de surveillance
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Passages réguliers d&apos;agents formés à la
                        surveillance résidentielle
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Rondes diurnes et nocturnes selon vos besoins
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Vérification des accès, ascenseurs et locaux
                          techniques
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle de l&apos;éclairage et des points sensibles
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Rapport de ronde transmis au syndic
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaWalking className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Présence dissuasive
                        </h4>
                        <p className="text-white/70 text-sm">
                          Effet préventif immédiat sur les comportements
                          indésirables
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Vidéosurveillance professionnelle
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Installation et gestion de systèmes de surveillance
                        modernes
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Étude personnalisée des emplacements stratégiques
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Conformité avec la législation suisse
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Centralisation et stockage sécurisé des images
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Accès à distance pour le syndic
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaVideo className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Surveillance continue
                        </h4>
                        <p className="text-white/70 text-sm">
                          Une protection 24h/24 et 7j/7 sans relâche
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Gardiennage de proximité
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Présence d&apos;un agent dédié sur des plages horaires
                        définies
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Agent affecté à votre immeuble (visage familier)
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Accueil des résidents et des visiteurs
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Gestion des situations courantes et imprévues
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Liaison directe avec le syndic
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaUserShield className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Service personnalisé
                        </h4>
                        <p className="text-white/70 text-sm">
                          Un véritable membre de la vie de l&apos;immeuble
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment choisir */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comment <span className="text-yellow-400">choisir</span> la
                  bonne solution ?
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Quelques critères clés pour orienter votre décision
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Taille de la copropriété",
                    description:
                      "Petit immeuble de 8 lots ou résidence de 80 appartements ? Le dispositif s'adapte au volume.",
                  },
                  {
                    title: "Configuration des lieux",
                    description:
                      "Présence d'un parking souterrain, de plusieurs entrées ou d'espaces verts à surveiller.",
                  },
                  {
                    title: "Profil des résidents",
                    description:
                      "Familles, professionnels, personnes âgées : chaque public a ses besoins spécifiques.",
                  },
                  {
                    title: "Budget de la copropriété",
                    description:
                      "Solutions économiques (rondes ponctuelles) ou premium (gardiennage continu).",
                  },
                  {
                    title: "Historique de l'immeuble",
                    description:
                      "Incidents passés, demandes récurrentes des copropriétaires, sensibilité particulière.",
                  },
                  {
                    title: "Évolution prévisible",
                    description:
                      "Travaux à venir, changement de quartier, nouveaux résidents : anticiper les besoins.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                      <span className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded-full mr-3">
                        {index + 1}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notre méthodologie */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Notre <span className="text-yellow-400">méthodologie</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Un accompagnement structuré, du premier contact à la mise en
                  œuvre
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: FaEye,
                    title: "Audit initial",
                    description: "Visite et analyse complète de l'immeuble",
                  },
                  {
                    icon: FaCheckCircle,
                    title: "Proposition",
                    description: "Devis transparent et détaillé sous 48h",
                  },
                  {
                    icon: FaShieldAlt,
                    title: "Mise en place",
                    description: "Déploiement avec présentation aux résidents",
                  },
                  {
                    icon: FaClock,
                    title: "Suivi continu",
                    description: "Bilans réguliers et ajustements si besoin",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
                  >
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Évaluons ensemble vos besoins
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Notre équipe se déplace gratuitement pour réaliser un audit
                personnalisé de votre immeuble et vous proposer une solution
                sur mesure.
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
                  Voir nos services
                </Link>
              </div>
            </div>

            {/* Articles similaires */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles similaires
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/conciergerie-securisee-coproprietes"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Conciergerie sécurisée
                  </h4>
                  <p className="text-white/70 text-sm">
                    La solution moderne pour les copropriétés
                  </p>
                </Link>
                <Link
                  href="/blog/securite-parkings-immeubles"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Sécurité des parkings d&apos;immeubles
                  </h4>
                  <p className="text-white/70 text-sm">
                    Prévenir vols et incivilités efficacement
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
