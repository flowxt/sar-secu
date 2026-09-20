import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaLeaf,
  FaLightbulb,
  FaSnowflake,
  FaClipboardCheck,
  FaCheckCircle,
  FaDoorClosed,
  FaTools,
  FaWalking,
  FaBoxOpen,
  FaHome,
  FaRegClock,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

export const metadata = {
  title:
    "Préparer sa copropriété pour l'automne-hiver : la checklist du syndic | SAR Security",
  description:
    "Checklist pratique pour les syndics genevois : préparer sereinement sa copropriété à l'automne et à l'hiver. Éclairage, entretien, accès et présence de proximité.",
  alternates: {
    canonical:
      "https://sar-security.ch/blog/copropriete-automne-hiver-serenite",
  },
};

export default function CoproprieteAutomneHiverArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/controle-maison.png"
            alt="Préparer sa copropriété pour l'automne et l'hiver"
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
              <div className="inline-block bg-yellow-500/20 px-4 py-1 rounded-full mb-4">
                <span className="text-yellow-400 text-sm font-medium">
                  Checklist saisonnière
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Préparer sa copropriété pour l&apos;
                <span className="text-yellow-400">automne-hiver</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                La checklist du syndic prévoyant à Genève
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>8 septembre 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Entretien & prévention</span>
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
              <FaLeaf className="text-yellow-400 text-3xl mb-4" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Les journées raccourcissent, les premières fraîcheurs
                s&apos;installent : l&apos;automne est là. Pour un syndic,
                c&apos;est la saison idéale pour préparer sereinement sa
                copropriété aux mois à venir.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Anticiper, c&apos;est offrir à ses résidents un hiver
                confortable et une copropriété qui tourne bien. Voici notre
                checklist pratique, pensée pour les régies et syndics
                genevois soucieux du bien-être de leurs copropriétaires.
              </p>
            </div>

            {/* Checklist 1 : Éclairage */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaLightbulb className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    1. L&apos;éclairage, priorité de la saison
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Avec la tombée de la nuit plus tôt, un bon éclairage devient
                  essentiel pour le confort et la sérénité des résidents.
                  C&apos;est le premier point à vérifier.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Contrôler l&apos;éclairage des halls, cages
                    d&apos;escalier et couloirs
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Vérifier l&apos;éclairage extérieur : entrées, allées,
                    parking
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Tester les détecteurs de mouvement et les minuteries
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Remplacer les ampoules défectueuses avant l&apos;hiver
                  </li>
                </ul>
              </div>
            </div>

            {/* Checklist 2 : Accès */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaDoorClosed className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    2. Les accès et fermetures
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Portes, portails et interphones sont sollicités toute
                  l&apos;année. Un contrôle avant l&apos;hiver évite les
                  mauvaises surprises quand il gèle.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Vérifier le bon fonctionnement des portes automatiques
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Contrôler les serrures, ferme-portes et systèmes de badges
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Tester l&apos;interphone et le visiophone
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    S&apos;assurer que le parking se ferme correctement
                  </li>
                </ul>
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-12 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent-ronde.png"
                alt="Agent de sécurité en ronde d'automne"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Une présence régulière détecte les petits soucis avant
                  qu&apos;ils ne s&apos;aggravent
                </p>
              </div>
            </div>

            {/* Checklist 3 : Entretien */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaTools className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    3. L&apos;entretien technique
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  L&apos;automne est le bon moment pour anticiper les
                  interventions techniques et éviter les urgences en plein
                  hiver.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Planifier l&apos;entretien du chauffage collectif
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Nettoyer les gouttières et évacuations d&apos;eau
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Vérifier l&apos;étanchéité des caves et locaux techniques
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Contrôler l&apos;ascenseur et sa maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Checklist 4 : Vie quotidienne */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaBoxOpen className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    4. La vie quotidienne des résidents
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  L&apos;hiver rime avec livraisons plus nombreuses (fêtes de
                  fin d&apos;année) et davantage de temps passé à la maison.
                  Autant anticiper pour que tout se passe bien.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Organiser la réception des colis pendant les fêtes
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Prévoir la gestion des absences prolongées (vacances
                    d&apos;hiver)
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Rappeler les bons réflexes aux résidents (fermeture des
                    accès)
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Veiller sur les résidents plus âgés ou isolés
                  </li>
                </ul>
              </div>
            </div>

            {/* Comment SAR aide */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comment SAR Security vous{" "}
                  <span className="text-yellow-400">accompagne</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Une présence de proximité qui simplifie la vie du syndic
                  toute la saison
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaWalking className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Rondes régulières
                  </h3>
                  <p className="text-white/70 text-sm">
                    Nos agents repèrent les petits dysfonctionnements
                    (éclairage, accès, dégâts des eaux) et les signalent
                    aussitôt.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHome className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Présence rassurante
                  </h3>
                  <p className="text-white/70 text-sm">
                    Un visage familier qui veille sur l&apos;immeuble et prend
                    des nouvelles des résidents durant la saison froide.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClipboardCheck className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Rapports au syndic
                  </h3>
                  <p className="text-white/70 text-sm">
                    Des comptes-rendus clairs qui vous donnent une visibilité
                    parfaite, même à distance.
                  </p>
                </div>
              </div>
            </div>

            {/* Le bon timing */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="flex items-center mb-6">
                <FaRegClock className="text-yellow-400 text-3xl mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Anticiper dès septembre
                </h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                En lançant ces vérifications dès la rentrée, vous abordez
                l&apos;hiver l&apos;esprit tranquille. Les prestataires sont
                plus disponibles en septembre-octobre qu&apos;en pleine saison
                froide, et vos résidents apprécieront cette gestion prévoyante.
                Un syndic organisé, c&apos;est une copropriété sereine.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaShieldAlt className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Abordez l&apos;hiver en toute sérénité
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Nous réalisons gratuitement un point de situation de votre
                copropriété avant l&apos;hiver et vous proposons un
                accompagnement adapté à vos besoins et votre budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander un point de situation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Nos services
                </Link>
              </div>
            </div>

            {/* Articles similaires */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles à découvrir
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/voter-projet-securite-assemblee-generale"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Faire voter un projet de sécurité en AG
                  </h4>
                  <p className="text-white/70 text-sm">
                    Le guide pratique pour convaincre les copropriétaires
                  </p>
                </Link>
                <Link
                  href="/blog/conciergerie-securisee-coproprietes"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Conciergerie sécurisée pour copropriétés
                  </h4>
                  <p className="text-white/70 text-sm">
                    La solution moderne qui allie service et sécurité
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
