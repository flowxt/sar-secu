import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaConciergeBell,
  FaShieldAlt,
  FaHandshake,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaHome,
  FaBox,
  FaTools,
  FaSmile,
} from "react-icons/fa";

export const metadata = {
  title:
    "Conciergerie sécurisée pour copropriétés : la solution moderne | SAR Security",
  description:
    "La conciergerie sécurisée allie service de proximité et sécurité professionnelle pour les copropriétés genevoises. Découvrez tous les avantages.",
  alternates: {
    canonical:
      "https://sar-security.ch/blog/conciergerie-securisee-coproprietes",
  },
};

export default function ConciergerieSecuriseeArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent2.webp"
            alt="Conciergerie sécurisée pour copropriété"
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
                <span className="text-yellow-400">Conciergerie</span> sécurisée
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                La solution moderne qui allie service et sécurité pour les
                copropriétés
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>15 avril 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Conciergerie & Service</span>
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
                Le métier de concierge évolue. Aujourd&apos;hui, les
                copropriétés genevoises recherchent un profil qui combine les
                qualités humaines de l&apos;accueil traditionnel avec
                l&apos;expertise sécuritaire moderne. C&apos;est tout
                l&apos;esprit de la conciergerie sécurisée : un service de
                proximité enrichi d&apos;une vraie compétence en surveillance.
              </p>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaConciergeBell className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Qu&apos;est-ce que la conciergerie sécurisée ?
                </h2>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  La conciergerie sécurisée est un service hybride qui réunit
                  les missions traditionnelles d&apos;un concierge (accueil,
                  petit entretien, gestion des livraisons) avec les compétences
                  d&apos;un agent de sécurité formé (surveillance, gestion des
                  accès, vigilance professionnelle).
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Cette approche moderne répond parfaitement aux attentes des
                  copropriétés contemporaines, qui souhaitent à la fois un
                  service de proximité chaleureux et une véritable garantie
                  sécuritaire.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaConciergeBell className="text-yellow-400 text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Côté concierge
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Accueil chaleureux des résidents et visiteurs
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Gestion du courrier et des colis
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Petit entretien des parties communes
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Coordination avec les prestataires
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaShieldAlt className="text-yellow-400 text-2xl mr-3" />
                    <h3 className="text-xl font-bold text-white">
                      Côté sécurité
                    </h3>
                  </div>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Contrôle des accès et filtrage
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Surveillance discrète des espaces
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Gestion des situations délicates
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Liaison avec les services d&apos;urgence si besoin
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/controle-acces.png"
                alt="Conciergerie moderne avec contrôle d'accès"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Une présence professionnelle et bienveillante
                </p>
              </div>
            </div>

            {/* Avantages pour la copropriété */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Les <span className="text-yellow-400">bénéfices</span> pour
                  votre copropriété
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pourquoi de plus en plus de syndics choisissent cette
                  formule
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaSmile className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Satisfaction des résidents
                  </h3>
                  <p className="text-white/70 text-sm">
                    Une présence familière qui crée du lien social et améliore
                    la qualité de vie au quotidien.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaHome className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Valorisation du bien
                  </h3>
                  <p className="text-white/70 text-sm">
                    Un immeuble avec conciergerie sécurisée se valorise
                    significativement sur le marché immobilier genevois.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaBox className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Gestion des livraisons
                  </h3>
                  <p className="text-white/70 text-sm">
                    Réception sécurisée des colis, fini les paquets laissés
                    sans surveillance dans le hall.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Médiation entre voisins
                  </h3>
                  <p className="text-white/70 text-sm">
                    Désamorçage des petites tensions du quotidien grâce à un
                    interlocuteur neutre et formé.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaTools className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Suivi technique
                  </h3>
                  <p className="text-white/70 text-sm">
                    Détection précoce des problèmes (fuite, ascenseur,
                    éclairage) pour éviter les coûts de réparation.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaHandshake className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Soutien au syndic
                  </h3>
                  <p className="text-white/70 text-sm">
                    Un relais de terrain qui allège votre charge administrative
                    et opérationnelle quotidienne.
                  </p>
                </div>
              </div>
            </div>

            {/* Profil de nos concierges */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Le profil de nos{" "}
                  <span className="text-yellow-400">concierges</span> sécurisés
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Une sélection rigoureuse pour garantir l&apos;excellence du
                  service
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Compétences professionnelles
                  </h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Formation officielle d&apos;agent de sécurité
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Certificat de premiers secours à jour
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Maîtrise des procédures d&apos;évacuation
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Connaissance des outils numériques
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Qualités humaines
                  </h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Sens du service et écoute active
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Discrétion et confidentialité
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Présentation impeccable
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-yellow-400 mr-3" />
                      Multilinguisme (FR, DE, EN, IT, PT...)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pour quels immeubles */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Pour quels{" "}
                  <span className="text-yellow-400">immeubles</span> ?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Résidences de standing",
                    description:
                      "Immeubles haut de gamme où la qualité de service fait partie du standing attendu par les résidents.",
                  },
                  {
                    title: "Copropriétés de taille moyenne",
                    description:
                      "À partir de 20-30 lots, la mutualisation des coûts rend le service très accessible.",
                  },
                  {
                    title: "Résidences seniors",
                    description:
                      "Une présence rassurante et bienveillante, particulièrement appréciée des résidents âgés.",
                  },
                  {
                    title: "Immeubles mixtes",
                    description:
                      "Combinant logements, bureaux ou commerces, où la gestion des flux est essentielle.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="text-center">
                <FaUsers className="text-yellow-400 text-4xl mx-auto mb-4" />
                <p className="text-xl text-white/90 italic mb-4 max-w-3xl mx-auto">
                  &ldquo;Depuis que nous avons mis en place la conciergerie
                  sécurisée, les retours des copropriétaires sont
                  exceptionnels. Notre concierge est devenu une figure
                  appréciée de tous, et les incidents ont quasiment disparu.
                  Un vrai succès pour notre résidence.&rdquo;
                </p>
                <p className="text-yellow-400 font-medium">
                  — Présidente du Conseil syndical, Champel
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Présentons cette solution à votre copropriété
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Notre équipe peut intervenir lors de votre prochaine assemblée
                générale pour présenter le concept aux copropriétaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Organiser une présentation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Découvrir nos services
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
                  href="/blog/surveillance-immeubles-geneve"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Surveillance d&apos;immeubles à Genève
                  </h4>
                  <p className="text-white/70 text-sm">
                    Toutes les solutions pour sécuriser votre copropriété
                  </p>
                </Link>
                <Link
                  href="/blog/syndic-immeuble-securite"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Mot du fondateur aux syndics
                  </h4>
                  <p className="text-white/70 text-sm">
                    Notre vision de l&apos;accompagnement des syndics
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
