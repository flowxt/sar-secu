import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaSearch,
  FaIdCard,
  FaFileContract,
  FaUserGraduate,
  FaComments,
  FaFileInvoiceDollar,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaQuestionCircle,
  FaCheckCircle,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";

export const metadata = {
  title:
    "Comment choisir sa société de sécurité à Genève : 7 critères essentiels | SAR Security",
  description:
    "Autorisations, assurance, formation des agents, devis, rapports : le guide pratique pour choisir une société de sécurité privée à Genève, que vous soyez particulier, syndic ou entreprise.",
  alternates: {
    canonical: "https://sar-security.ch/blog/choisir-societe-securite-geneve",
  },
};

const criteres = [
  {
    icon: FaIdCard,
    titre: "Les autorisations en règle",
    texte:
      "En Suisse romande, l'activité des entreprises de sécurité privée est encadrée par le Concordat sur les entreprises de sécurité (CES). L'entreprise comme ses agents doivent disposer des autorisations délivrées par l'autorité cantonale. C'est le point de départ : un prestataire sérieux vous les présentera volontiers.",
  },
  {
    icon: FaFileContract,
    titre: "Une assurance responsabilité civile adaptée",
    texte:
      "Une assurance RC professionnelle couvre les éventuels dommages survenus pendant la mission. Demandez une attestation et vérifiez qu'elle correspond au type de prestation envisagé.",
  },
  {
    icon: FaUserGraduate,
    titre: "Des agents formés pour votre mission",
    texte:
      "Surveiller un chantier, accueillir les invités d'un gala ou veiller sur une copropriété ne demande pas les mêmes compétences. Interrogez le prestataire sur la formation de ses agents et sur la manière dont il les affecte à chaque mission.",
  },
  {
    icon: FaComments,
    titre: "Une vraie écoute de vos besoins",
    texte:
      "Un bon prestataire commence par poser des questions, visiter les lieux et comprendre vos attentes avant de proposer quoi que ce soit. Une offre standard envoyée sans échange préalable mérite d'être approfondie.",
  },
  {
    icon: FaFileInvoiceDollar,
    titre: "Un devis clair et détaillé",
    texte:
      "Nombre d'agents, horaires, tâches prévues, durée du contrat, conditions de résiliation : tout doit être écrit noir sur blanc. Un devis lisible permet de comparer les offres sur des bases équivalentes.",
  },
  {
    icon: FaClipboardCheck,
    titre: "Des comptes rendus réguliers",
    texte:
      "Rapports de ronde, signalements, bilan de mission : vous devez savoir ce qui a été fait. Demandez à voir un exemple de rapport et renseignez-vous sur l'interlocuteur qui vous répondra au quotidien.",
  },
  {
    icon: FaMapMarkerAlt,
    titre: "La connaissance du terrain genevois",
    texte:
      "Un prestataire implanté localement connaît les quartiers, les régies, les lieux d'événements et les contraintes pratiques de la région. Cette proximité facilite la réactivité et le dialogue.",
  },
];

const questions = [
  "Pouvez-vous me présenter vos autorisations et votre attestation d'assurance ?",
  "Comment vos agents sont-ils formés et sélectionnés ?",
  "Qui sera mon interlocuteur pendant la mission ?",
  "À quoi ressemble un rapport de mission chez vous ?",
  "Comment gérez-vous les clés et les informations confidentielles ?",
  "Quelles sont la durée et les conditions de résiliation du contrat ?",
];

export default function ChoisirSocieteSecuriteArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent-securite.jpg"
            alt="Agent de sécurité professionnel"
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
                  Guide pratique
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Comment choisir sa{" "}
                <span className="text-yellow-400">société de sécurité</span> à
                Genève
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Les 7 critères essentiels pour faire le bon choix, en toute
                confiance
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>11 novembre 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Guide & conseils</span>
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
              <FaSearch className="text-yellow-400 text-3xl mb-4" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Particulier qui part en vacances, syndic d&apos;une
                copropriété, responsable d&apos;un commerce ou organisateur
                d&apos;événement : un jour ou l&apos;autre, on se pose la
                question du choix d&apos;un prestataire de sécurité.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Faire entrer une entreprise dans son immeuble, ses locaux ou
                sa maison, c&apos;est avant tout une affaire de confiance.
                Voici les critères qui vous aideront à comparer les offres
                sereinement et à choisir le partenaire qui vous correspond.
              </p>
            </div>

            {/* Les 7 critères */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Les <span className="text-yellow-400">7 critères</span> à
                vérifier
              </h2>
              <div className="space-y-6">
                {criteres.map((critere, index) => (
                  <div
                    key={critere.titre}
                    className="flex items-start bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
                  >
                    <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0 text-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <critere.icon className="text-yellow-400 mr-3" />
                        <h3 className="text-xl font-bold text-white">
                          {critere.titre}
                        </h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        {critere.texte}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-12 relative h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent3.png"
                alt="Agent de sécurité en poste à l'entrée d'un bâtiment"
                fill
                className="object-cover object-[center_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-medium">
                  Le bon prestataire est celui dont les agents correspondent
                  à votre mission et à votre environnement
                </p>
              </div>
            </div>

            {/* Le prix */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaBalanceScale className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Et le prix, dans tout ça ?
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Le budget compte, bien sûr. Mais pour comparer deux offres,
                  il faut qu&apos;elles portent sur la même prestation : même
                  nombre d&apos;heures, mêmes tâches, même niveau de suivi.
                </p>
                <p className="text-white/80 leading-relaxed">
                  En Suisse, les conditions de travail des agents de sécurité
                  privée sont en grande partie encadrées par une convention
                  collective de travail. Une offre claire vous permet de
                  comprendre ce que vous payez et de choisir en connaissance
                  de cause.
                </p>
              </div>
            </div>

            {/* Questions à poser */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <FaQuestionCircle className="text-yellow-400 text-4xl mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Les questions à poser{" "}
                  <span className="text-yellow-400">au premier rendez-vous</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Gardez cette liste sous la main lors de vos échanges avec
                  les prestataires
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions.map((question) => (
                  <div
                    key={question}
                    className="flex items-start bg-slate-800/30 rounded-xl p-4 border border-slate-700"
                  >
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notre approche */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="flex items-center mb-6">
                <FaShieldAlt className="text-yellow-400 text-3xl mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Notre façon de travailler
                </h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Chez SAR Security, chaque collaboration commence par une
                rencontre et, lorsque c&apos;est utile, par une visite des
                lieux. Nous répondons volontiers à toutes les questions
                ci-dessus et vous remettons une proposition écrite, détaillée
                et adaptée à votre situation.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Notre conviction : un client bien informé est un client
                serein. Prenez le temps de comparer ; nous serons heureux de
                faire partie de votre réflexion.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaComments className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Parlons de votre projet
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Un premier échange, sans engagement, pour comprendre vos
                besoins et vous présenter notre manière de travailler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Prendre rendez-vous
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
                  href="/blog/agents-securite-competences"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Agents de sécurité : quelles compétences ?
                  </h4>
                  <p className="text-white/70 text-sm">
                    Les bonnes compétences pour chaque type de mission
                  </p>
                </Link>
                <Link
                  href="/blog/voter-projet-securite-assemblee-generale"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Faire voter un projet de sécurité en AG
                  </h4>
                  <p className="text-white/70 text-sm">
                    Le guide pratique pour les syndics
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
