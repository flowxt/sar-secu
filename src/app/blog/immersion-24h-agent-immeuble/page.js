import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaClock,
  FaCoffee,
  FaSun,
  FaMoon,
  FaCloudSun,
  FaWalking,
  FaHandshake,
  FaSmile,
  FaHeart,
  FaQuoteLeft,
  FaBuilding,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";

export const metadata = {
  title:
    "Immersion 24h avec un agent SAR en immeuble à Genève | SAR Security",
  description:
    "Plongée immersive dans le quotidien d'un agent SAR Security au cœur d'une copropriété genevoise. Découvrez les petits riens qui changent tout.",
  alternates: {
    canonical: "https://sar-security.ch/blog/immersion-24h-agent-immeuble",
  },
};

export default function Immersion24hArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent-ronde.png"
            alt="24h avec un agent SAR Security en immeuble"
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
                  Reportage immersif
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-yellow-400">24 heures</span> avec un
                agent SAR
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Immersion dans le quotidien d&apos;une copropriété genevoise
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>11 mai 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Reportage</span>
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
              <FaBookOpen className="text-yellow-400 text-3xl mb-4" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Que se passe-t-il vraiment, heure après heure, dans une
                copropriété accompagnée par un agent de sécurité résidentiel ?
                Nous avons suivi João, l&apos;un de nos agents, pendant une
                journée complète dans une résidence genevoise.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Spoiler : il ne s&apos;est rien passé de spectaculaire. Et
                c&apos;est précisément cela qui fait toute la beauté du
                métier. Voici son journal de bord, raconté avec ses propres
                mots.
              </p>
            </div>

            {/* Présentation de João */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-yellow-500/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="bg-yellow-500/20 w-32 h-32 rounded-full flex items-center justify-center mx-auto">
                    <FaUser className="text-yellow-400 text-6xl" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    João, 42 ans, agent SAR Security
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-3">
                    Ancien militaire portugais reconverti dans la sécurité
                    privée. Père de deux enfants, fan de football et
                    excellent cuisinier (paraît-il). Travaille pour SAR
                    Security depuis 5 ans, dont 3 sur la même résidence
                    genevoise.
                  </p>
                  <p className="text-yellow-400 font-medium italic">
                    &ldquo;Pour moi, ce n&apos;est pas un immeuble que je
                    surveille, c&apos;est une famille élargie&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Une <span className="text-yellow-400">journée</span> dans la
                  vie de João
                </h2>
                <p className="text-xl text-white/80">
                  Suivez-le, heure par heure
                </p>
              </div>

              {/* 6h30 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaCoffee className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      06h30
                    </span>
                    <span className="text-white/60 ml-3">Prise de poste</span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    João arrive à la résidence avant le lever du soleil.
                    Première chose : un café avec son collègue qui termine la
                    nuit. Échange du cahier de bord, points sur les
                    événements de la nuit (livraison anticipée à 2h du
                    matin, fuite d&apos;eau signalée dans les caves...).
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-500">
                    <FaQuoteLeft className="text-yellow-400 text-sm mb-1" />
                    <p className="text-white/90 italic text-sm">
                      &ldquo;Cette transition, c&apos;est crucial. On se
                      raconte tout ce qui s&apos;est passé. Pour que les
                      résidents aient l&apos;impression d&apos;avoir un seul
                      interlocuteur, en réalité.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* 7h00 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaSun className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      07h00
                    </span>
                    <span className="text-white/60 ml-3">
                      Première ronde matinale
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    João entame sa première ronde : vérification du parking,
                    des locaux techniques, contrôle de l&apos;éclairage,
                    coup d&apos;œil sur les ascenseurs. Il croise le
                    facteur, qui arrive toujours à cette heure-ci. Petit
                    salut amical, échange de quelques mots sur le temps.
                    Routine bien rodée.
                  </p>
                </div>
              </div>

              {/* 7h45 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaSmile className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      07h45
                    </span>
                    <span className="text-white/60 ml-3">
                      Départs pour l&apos;école
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    L&apos;immeuble s&apos;anime. João salue les familles
                    qui partent : &ldquo;Bonne journée Mathilde !&rdquo;,
                    &ldquo;Et tes devoirs Lucas, tu n&apos;as rien
                    oublié ?&rdquo;. Petite Léa, 6 ans, lui tend
                    fièrement le dessin qu&apos;elle a fait pour lui.
                    Il le glisse précieusement dans son carnet. La 4ème
                    œuvre de la semaine.
                  </p>
                </div>
              </div>

              {/* Image illustrative */}
              <div className="my-8 ml-6 relative h-64 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/agent2.webp"
                  alt="Agent SAR accueillant les résidents"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* 9h00 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaHandshake className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      09h00
                    </span>
                    <span className="text-white/60 ml-3">
                      Arrivée des prestataires
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    L&apos;équipe de nettoyage arrive. João les accueille,
                    leur ouvre les locaux, vérifie leur planning.
                    L&apos;ascenseur de service est mis à leur disposition.
                    Dix minutes plus tard, c&apos;est le technicien
                    chauffagiste qui se présente pour une intervention au 3ème.
                    João l&apos;accompagne et notifie la résidente concernée.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-500">
                    <FaQuoteLeft className="text-yellow-400 text-sm mb-1" />
                    <p className="text-white/90 italic text-sm">
                      &ldquo;Cette coordination, c&apos;est l&apos;un des
                      services que les syndics apprécient le plus. Plus
                      besoin de gérer chaque rendez-vous à
                      distance.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* 10h30 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaHeart className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      10h30
                    </span>
                    <span className="text-white/60 ml-3">
                      Le moment Madame Berger
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Madame Berger, 84 ans, descend tous les jours à cette
                    heure-ci pour ses courses. João prend toujours quelques
                    minutes pour discuter avec elle : nouvelles de sa fille
                    qui vit à Lausanne, prévisions du temps, dernières
                    nouvelles du quartier. Un rituel simple, mais qui compte
                    énormément pour elle.
                  </p>
                </div>
              </div>

              {/* 12h00 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaWalking className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      12h00
                    </span>
                    <span className="text-white/60 ml-3">
                      Ronde déjeuner & livraisons
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Les livreurs se succèdent : repas, courses en ligne,
                    colis. João les enregistre, les achemine ou les stocke
                    en sécurité dans le local prévu. Au passage, il jette
                    un œil au parking, vérifie qu&apos;aucune voiture
                    n&apos;est mal stationnée et que les places
                    d&apos;urgence sont libres.
                  </p>
                </div>
              </div>

              {/* 14h30 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaCloudSun className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      14h30
                    </span>
                    <span className="text-white/60 ml-3">
                      Rapport intermédiaire
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Pause administrative. João rédige son rapport
                    intermédiaire pour le syndic : interventions de la
                    matinée, observations, petits points à signaler (une
                    ampoule qui clignote dans le hall, un velux de cave qui
                    laisse passer l&apos;eau). Tout est tracé, daté,
                    documenté.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-500">
                    <FaQuoteLeft className="text-yellow-400 text-sm mb-1" />
                    <p className="text-white/90 italic text-sm">
                      &ldquo;Le syndic reçoit tout par email à 18h. Comme
                      ça, il a une visibilité parfaite sur ce qui se passe
                      dans son immeuble, même à distance.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="my-8 ml-6 relative h-64 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/formation-agent.png"
                  alt="Agent rédigeant son rapport"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* 16h00 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaSmile className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      16h00
                    </span>
                    <span className="text-white/60 ml-3">
                      Retour des écoliers
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Le hall reprend vie. Les enfants rentrent, parfois
                    accompagnés, parfois seuls. João est là, attentif,
                    s&apos;assure que chacun est bien rentré. Léa lui montre
                    sa nouvelle dictée. Tom lui raconte son but au foot.
                    L&apos;immeuble redevient un cocon familial.
                  </p>
                </div>
              </div>

              {/* 17h30 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaHandshake className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      17h30
                    </span>
                    <span className="text-white/60 ml-3">
                      Point avec le syndic
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Marie, la syndic de l&apos;immeuble, passe pour un café
                    rapide. Ils font le point sur la semaine, abordent les
                    sujets à venir : l&apos;assemblée générale du mois
                    prochain, la rénovation des parties communes, les
                    nouveaux locataires du 6ème. Une vraie collaboration au
                    quotidien.
                  </p>
                </div>
              </div>

              {/* 19h00 */}
              <div className="relative pl-16 pb-12 border-l-2 border-yellow-500/30 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaWalking className="text-black text-2xl" />
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      19h00
                    </span>
                    <span className="text-white/60 ml-3">
                      Ronde de fin de journée
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Dernière grande ronde de la journée. João vérifie que
                    tout est en ordre : portes correctement fermées,
                    ascenseurs fonctionnels, parking, espaces communs. Il
                    croise quelques résidents qui rentrent du travail.
                    Sourires, &ldquo;Bonne soirée&rdquo;, &ldquo;À demain
                    João&rdquo;.
                  </p>
                </div>
              </div>

              {/* 20h00 */}
              <div className="relative pl-16 ml-6">
                <div className="absolute -left-7 top-0 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                  <FaMoon className="text-black text-2xl" />
                </div>
                <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-xl">
                      20h00
                    </span>
                    <span className="text-white/60 ml-3">
                      Passage de relais
                    </span>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Son collègue de nuit, Karim, arrive. Même rituel
                    qu&apos;au matin, à l&apos;envers : échange du carnet,
                    transmission des informations, café partagé. João
                    rentre chez lui, où l&apos;attendent sa femme et ses
                    enfants. Demain, ce sera une nouvelle journée. Une
                    autre, mais aussi un peu la même.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-500">
                    <FaQuoteLeft className="text-yellow-400 text-sm mb-1" />
                    <p className="text-white/90 italic text-sm">
                      &ldquo;Aujourd&apos;hui ? Rien d&apos;extraordinaire.
                      Et c&apos;est exactement comme ça que ça doit
                      être.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ce que cette journée révèle */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Ce que cette journée nous{" "}
                <span className="text-yellow-400">apprend</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        La routine est précieuse
                      </h3>
                      <p className="text-white/70 text-sm">
                        Une présence régulière, prévisible et bienveillante
                        crée un sentiment de stabilité que rien ne peut
                        remplacer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Les détails font la différence
                      </h3>
                      <p className="text-white/70 text-sm">
                        Un dessin d&apos;enfant, une ampoule à changer, une
                        livraison réceptionnée : ces petits riens
                        construisent une vraie qualité de vie.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Une charge en moins pour le syndic
                      </h3>
                      <p className="text-white/70 text-sm">
                        Pendant que João gère le quotidien, Marie peut se
                        concentrer sur les enjeux stratégiques de la
                        copropriété.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Le lien humain avant tout
                      </h3>
                      <p className="text-white/70 text-sm">
                        Aucune technologie ne remplace le sourire d&apos;un
                        agent qui connaît les résidents par leur prénom et
                        leur histoire.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mot de João */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center">
                <FaQuoteLeft className="text-yellow-400 text-4xl mx-auto mb-4" />
                <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-4 max-w-3xl mx-auto">
                  &ldquo;Quand on choisit ce métier, on imagine parfois quelque
                  chose de très spectaculaire. La réalité, c&apos;est
                  qu&apos;on devient un peu comme un membre de la famille
                  étendue d&apos;un immeuble. C&apos;est ça, la vraie beauté
                  de notre travail.&rdquo;
                </p>
                <p className="text-yellow-400 font-bold text-lg">
                  — João, agent SAR Security
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaBuilding className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Vous aussi, ouvrez la porte à un nouveau quotidien
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Et si votre copropriété pouvait, elle aussi, vivre ce
                quotidien apaisé ? Discutons-en lors d&apos;un échange sans
                engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
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

            {/* Note */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 mb-16 border border-slate-700 text-center">
              <p className="text-white/60 text-sm italic">
                Note : ce reportage est inspiré d&apos;une journée
                représentative dans la vie de nos agents résidentiels. Le
                prénom et certains détails ont été modifiés pour préserver
                l&apos;anonymat des résidents.
              </p>
            </div>

            {/* Articles similaires */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles à découvrir
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/histoires-syndics-coproprietes-geneve"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    3 histoires de syndics genevois
                  </h4>
                  <p className="text-white/70 text-sm">
                    Trois récits authentiques au cœur des copropriétés
                  </p>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
