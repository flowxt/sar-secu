import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaUsers,
  FaFileAlt,
  FaChartLine,
  FaComments,
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaRegClock,
  FaClipboardList,
  FaBuilding,
  FaBalanceScale,
  FaVoteYea,
  FaCoins,
} from "react-icons/fa";

export const metadata = {
  title:
    "Faire voter un projet de sécurité en assemblée générale | SAR Security",
  description:
    "Guide pratique pour les syndics : comment présenter et faire voter un projet de sécurité en assemblée générale de copropriété à Genève. Méthode, arguments et bonnes pratiques.",
  alternates: {
    canonical:
      "https://sar-security.ch/blog/voter-projet-securite-assemblee-generale",
  },
};

export default function VoterProjetSecuriteArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent4.png"
            alt="Faire voter un projet de sécurité en assemblée générale"
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
                  Guide pratique pour syndics
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Faire voter un projet de{" "}
                <span className="text-yellow-400">sécurité</span> en AG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Comment présenter et convaincre en assemblée générale de
                copropriété
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>22 septembre 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Gestion de copropriété</span>
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
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Vous êtes convaincu qu&apos;un service de sécurité apporterait
                une vraie valeur ajoutée à votre copropriété. Reste
                l&apos;étape décisive : le faire voter en assemblée générale.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Entre les questions de budget, les sensibilités de chacun et
                les débats parfois animés, présenter un projet de sécurité
                demande un peu de méthode. Voici notre guide complet pour
                aider les syndics à préparer, présenter et faire adopter
                sereinement un tel projet.
              </p>
            </div>

            {/* Étapes clés */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaClipboardList className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Les 5 étapes d&apos;un projet bien mené
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    icon: FaChartLine,
                    title: "Identifier le besoin réel",
                    text: "Avant tout, cernez précisément ce que recherche votre copropriété : plus de présence, une meilleure gestion des accès, un service de conciergerie ? Un besoin bien défini est un projet à moitié voté.",
                  },
                  {
                    num: "02",
                    icon: FaFileAlt,
                    title: "Obtenir un audit et un devis clair",
                    text: "Faites réaliser un audit gratuit par un professionnel. Un devis détaillé et transparent, sans frais cachés, rassure immédiatement les copropriétaires les plus prudents.",
                  },
                  {
                    num: "03",
                    icon: FaComments,
                    title: "Préparer la communication en amont",
                    text: "N'attendez pas le jour J. Informez les copropriétaires du projet à l'avance, par écrit, avec les grandes lignes. Les décisions se préparent avant l'assemblée, pas pendant.",
                  },
                  {
                    num: "04",
                    icon: FaUsers,
                    title: "Présenter le jour de l'AG",
                    text: "Le jour de l'assemblée, une présentation claire, chiffrée et illustrée fait la différence. Nous pouvons même intervenir directement pour répondre aux questions des copropriétaires.",
                  },
                  {
                    num: "05",
                    icon: FaVoteYea,
                    title: "Faciliter la prise de décision",
                    text: "Proposez si possible plusieurs options (formule de base, intermédiaire, complète) pour que l'assemblée puisse choisir plutôt que de simplement accepter ou refuser.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-yellow-500 text-black font-bold text-lg w-14 h-14 rounded-full flex items-center justify-center">
                          {step.num}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <step.icon className="text-yellow-400 text-xl mr-3" />
                          <h3 className="text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent2.webp"
                alt="Présentation d'un projet de sécurité en copropriété"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Une présentation claire vaut mille discours
                </p>
              </div>
            </div>

            {/* Les arguments qui portent */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Les <span className="text-yellow-400">arguments</span> qui
                  font mouche
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Pour convaincre, misez sur des bénéfices concrets et positifs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                      <FaChartLine className="text-yellow-400 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      La valorisation du bien
                    </h3>
                  </div>
                  <p className="text-white/80">
                    Un immeuble bien entretenu et bien géré se valorise sur le
                    marché. La sécurité fait partie des critères recherchés par
                    les acheteurs et locataires à Genève.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                      <FaUsers className="text-yellow-400 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      La qualité de vie
                    </h3>
                  </div>
                  <p className="text-white/80">
                    Une présence bienveillante améliore le quotidien de tous :
                    gestion des livraisons, entretien des communs, lien social
                    entre voisins.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                      <FaCoins className="text-yellow-400 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Un coût mutualisé raisonnable
                    </h3>
                  </div>
                  <p className="text-white/80">
                    Réparti entre tous les lots, le coût d&apos;un service de
                    sécurité représente souvent une somme modeste par mois et
                    par appartement. Un argument qui rassure.
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                      <FaHandshake className="text-yellow-400 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Un soutien pour le syndic
                    </h3>
                  </div>
                  <p className="text-white/80">
                    Un partenaire de terrain allège la charge du syndic :
                    coordination des prestataires, suivi technique, rapports
                    réguliers. Plus de sérénité pour tout le monde.
                  </p>
                </div>
              </div>
            </div>

            {/* Répondre aux objections */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Répondre sereinement aux{" "}
                  <span className="text-yellow-400">objections</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Anticiper les questions permet d&apos;aborder l&apos;AG en
                  confiance
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "« Est-ce vraiment nécessaire ? »",
                    a: "Présentez-le comme un service qui améliore le confort et valorise le patrimoine collectif, plutôt qu'une dépense contrainte.",
                  },
                  {
                    q: "« Combien ça coûte par appartement ? »",
                    a: "Ayez toujours le chiffre par lot et par mois. C'est le chiffre qui parle vraiment aux copropriétaires.",
                  },
                  {
                    q: "« Peut-on tester avant de s'engager ? »",
                    a: "Proposez une période d'essai ou un contrat flexible. La souplesse contractuelle lève beaucoup de réticences.",
                  },
                  {
                    q: "« Et si ça ne convient pas ? »",
                    a: "Expliquez les modalités de résiliation et le suivi régulier qui permet d'ajuster la prestation à tout moment.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <div className="flex items-start mb-2">
                      <FaComments className="text-yellow-400 text-lg mt-1 mr-3 flex-shrink-0" />
                      <h3 className="text-lg font-bold text-white">
                        {item.q}
                      </h3>
                    </div>
                    <div className="flex items-start pl-8">
                      <FaCheckCircle className="text-emerald-400 text-sm mt-1 mr-3 flex-shrink-0" />
                      <p className="text-white/80">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aspect légal suisse */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaBalanceScale className="text-black text-xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Le cadre légal en Suisse
                </h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                En droit suisse de la propriété par étages (PPE), les décisions
                relatives aux services communs se votent en assemblée générale.
                Selon la nature et l&apos;ampleur du projet, la majorité
                requise peut varier (majorité simple ou qualifiée).
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Notre conseil : vérifiez toujours le règlement de votre
                copropriété et, en cas de doute, appuyez-vous sur votre
                régie. Un projet correctement inscrit à l&apos;ordre du jour et
                clairement formulé se vote dans les meilleures conditions.
              </p>
            </div>

            {/* Timing */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="flex items-center mb-6">
                <FaRegClock className="text-yellow-400 text-3xl mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Le bon moment pour se lancer
                </h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                La rentrée de septembre est une période idéale pour préparer un
                projet de sécurité : les copropriétaires sont de retour de
                vacances, les assemblées générales de fin d&apos;année
                approchent, et l&apos;on peut anticiper sereinement la période
                hivernale. C&apos;est le moment parfait pour lancer une
                réflexion et solliciter un audit.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaBuilding className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Nous vous accompagnons jusqu&apos;au vote
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Audit gratuit, dossier de présentation clé en main, et
                intervention possible lors de votre assemblée générale pour
                répondre aux questions. Mettons toutes les chances de votre
                côté.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Préparer mon projet
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
                Articles à découvrir
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/copropriete-automne-hiver-serenite"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Préparer sa copropriété pour l&apos;automne-hiver
                  </h4>
                  <p className="text-white/70 text-sm">
                    La checklist saisonnière pour syndics prévoyants
                  </p>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
