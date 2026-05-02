import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaBuilding,
  FaShieldAlt,
  FaHandshake,
  FaUsers,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaPhone,
  FaHeart,
} from "react-icons/fa";

export const metadata = {
  title:
    "Mot du fondateur : accompagner les syndics d'immeuble à Genève | SAR Security",
  description:
    "Sidnei Ribeiro, fondateur de SAR Security, partage sa vision de l'accompagnement des syndics d'immeuble et régies immobilières genevoises en matière de sécurité.",
  alternates: {
    canonical: "https://sar-security.ch/blog/syndic-immeuble-securite",
  },
};

export default function SyndicImmeubleArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sidnei-ribeiro2.jpg"
            alt="Sidnei Ribeiro - Fondateur de SAR Security"
            fill
            priority
            className="object-cover object-top brightness-[0.3]"
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
                  Mot du fondateur
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Accompagner les <span className="text-yellow-400">syndics</span>{" "}
                d&apos;immeuble
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Une vision personnelle au service des copropriétés genevoises
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>28 avril 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par Sidnei Ribeiro</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Syndic & Copropriété</span>
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
            {/* Présentation du fondateur */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-yellow-500/30">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/sidnei-ribeiro2.jpg"
                      alt="Sidnei Ribeiro"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-yellow-400">
                      Sidnei Ribeiro
                    </h3>
                    <p className="text-white/70 text-sm">
                      Fondateur & Directeur
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-yellow-500/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FaQuoteLeft className="text-yellow-400 text-xl" />
                  </div>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
                    &ldquo;Pendant plus de 15 ans, j&apos;ai eu le privilège
                    d&apos;accompagner de nombreux syndics et régies
                    immobilières dans la sécurisation de leurs immeubles
                    genevois. Aujourd&apos;hui, je souhaite partager cette
                    expérience et expliquer en quoi un partenariat de confiance
                    avec un professionnel de la sécurité fait toute la
                    différence pour vos copropriétaires.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Pourquoi cet article */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaBuilding className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Le rôle essentiel du syndic en matière de sécurité
                </h2>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  En tant que syndic d&apos;immeuble ou régisseur, vous portez
                  une responsabilité importante : assurer la tranquillité,
                  l&apos;entretien et la sécurité des espaces communs au nom de
                  tous les copropriétaires. C&apos;est une mission complexe qui
                  demande à la fois rigueur administrative, sens du contact
                  humain et expertise technique.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  La sécurité, en particulier, n&apos;est pas un simple poste
                  budgétaire : c&apos;est un investissement dans la qualité de
                  vie des résidents et la valorisation du patrimoine collectif.
                  Et c&apos;est précisément là que notre accompagnement prend
                  tout son sens.
                </p>
              </div>
            </div>

            {/* Notre approche */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Notre <span className="text-yellow-400">philosophie</span>{" "}
                  d&apos;accompagnement
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Trois principes guident notre relation avec les syndics et
                  régies que nous accompagnons
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 text-center">
                  <div className="bg-yellow-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaHandshake className="text-yellow-400 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Partenariat de confiance
                  </h3>
                  <p className="text-white/70">
                    Nous nous considérons comme un partenaire de long terme,
                    pas un simple prestataire. Votre satisfaction et celle des
                    copropriétaires sont notre priorité.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 text-center">
                  <div className="bg-yellow-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUsers className="text-yellow-400 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Approche humaine
                  </h3>
                  <p className="text-white/70">
                    Nos agents sont formés à l&apos;écoute et au dialogue avec
                    les résidents. La sécurité passe avant tout par de bonnes
                    relations humaines.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 text-center">
                  <div className="bg-yellow-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShieldAlt className="text-yellow-400 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Solutions sur mesure
                  </h3>
                  <p className="text-white/70">
                    Chaque immeuble est unique. Nous adaptons nos prestations à
                    la configuration des lieux, au profil des résidents et au
                    budget de la copropriété.
                  </p>
                </div>
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent-ronde.png"
                alt="Agent SAR Security en ronde dans un immeuble"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Présence rassurante et professionnelle au quotidien
                </p>
              </div>
            </div>

            {/* Ce que nous apportons aux syndics */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ce que nous apportons aux{" "}
                  <span className="text-yellow-400">syndics</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Notre accompagnement va bien au-delà de la simple prestation
                  de sécurité
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Un interlocuteur unique",
                    description:
                      "Une personne dédiée qui connaît votre dossier, votre immeuble et vos contraintes spécifiques.",
                  },
                  {
                    title: "Des rapports clairs",
                    description:
                      "Comptes-rendus mensuels détaillés que vous pouvez présenter en assemblée générale.",
                  },
                  {
                    title: "Une transparence totale",
                    description:
                      "Tarification claire, sans frais cachés, et flexibilité contractuelle adaptée à vos besoins.",
                  },
                  {
                    title: "Une présence rassurante",
                    description:
                      "Nos agents deviennent des visages familiers que les résidents apprécient et reconnaissent.",
                  },
                  {
                    title: "Une réactivité éprouvée",
                    description:
                      "Disponibilité 24h/24 pour répondre aux situations imprévues et urgences éventuelles.",
                  },
                  {
                    title: "Une expertise locale",
                    description:
                      "Connaissance approfondie du tissu genevois et des particularités du marché immobilier local.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-yellow-500/20 p-2 rounded-lg mr-4 mt-1">
                        <FaCheckCircle className="text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Anecdote personnelle */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaHeart className="text-black text-xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Une anecdote qui résume notre engagement
                </h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Il y a quelques années, le syndic d&apos;une résidence des
                Eaux-Vives nous contactait pour une mission ponctuelle de
                surveillance. Quelques semaines plus tard, une copropriétaire
                âgée est restée bloquée dans l&apos;ascenseur en pleine nuit.
                Notre agent en ronde l&apos;a immédiatement rassurée, est resté
                en contact vocal avec elle jusqu&apos;à l&apos;arrivée des
                secours, et l&apos;a raccompagnée à son appartement.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Le lendemain, le syndic me racontait que toute la copropriété
                en parlait avec émotion. C&apos;est ce genre de moments qui
                fait toute la différence : la sécurité, c&apos;est aussi cette
                attention humaine qui transforme un immeuble en véritable
                communauté.
              </p>
            </div>

            {/* Témoignages */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ce que disent les{" "}
                  <span className="text-yellow-400">syndics</span> qui nous font
                  confiance
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-4">
                    &ldquo;Cela fait 5 ans que nous travaillons avec SAR
                    Security pour 12 de nos immeubles. Une équipe à
                    l&apos;écoute, des prestations de qualité, et surtout une
                    vraie compréhension de notre métier.&rdquo;
                  </p>
                  <p className="text-yellow-400 font-medium">
                    — Régie immobilière, Genève
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-4">
                    &ldquo;Sidnei et son équipe ont compris nos enjeux et nous
                    accompagnent avec un vrai professionnalisme. Les
                    copropriétaires apprécient particulièrement leur discrétion
                    et leur courtoisie.&rdquo;
                  </p>
                  <p className="text-yellow-400 font-medium">
                    — Syndic professionnel, Carouge
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Personnel */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-black/20">
                    <Image
                      src="/images/sidnei-ribeiro2.jpg"
                      alt="Sidnei Ribeiro"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-black mb-4">
                    Discutons ensemble de votre projet
                  </h3>
                  <p className="text-black/80 mb-6 text-lg">
                    Je serai personnellement à votre disposition pour échanger
                    sur les besoins spécifiques de votre copropriété et vous
                    proposer un accompagnement sur mesure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      href="/contact"
                      className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center inline-flex items-center justify-center"
                    >
                      <FaPhone className="mr-2" />
                      Prendre contact
                    </Link>
                    <Link
                      href="/services"
                      className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                    >
                      Nos services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles similaires */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles dédiés aux syndics et copropriétés
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
                    Rondes, vidéosurveillance et gardiennage adaptés
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
