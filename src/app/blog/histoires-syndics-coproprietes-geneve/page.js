import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaQuoteLeft,
  FaQuoteRight,
  FaSmile,
  FaHandshake,
  FaHeart,
  FaUsers,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt,
  FaBuilding,
  FaLeaf,
} from "react-icons/fa";

export const metadata = {
  title:
    "Histoires de copropriétés : 3 syndics genevois racontent | SAR Security",
  description:
    "Trois syndics d'immeuble à Genève partagent leur expérience avec SAR Security : sérénité retrouvée, lien social renforcé et copropriétaires satisfaits.",
  alternates: {
    canonical:
      "https://sar-security.ch/blog/histoires-syndics-coproprietes-geneve",
  },
};

export default function HistoiresSyndicsArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent2.webp"
            alt="Trois histoires de syndics à Genève"
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
                  Récits & témoignages
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                3 <span className="text-yellow-400">histoires</span> de
                copropriétés
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Quand un syndic et un partenaire sécurité écrivent ensemble
                une belle histoire
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>18 mai 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Témoignages</span>
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
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Derrière chaque copropriété, il y a un syndic, des résidents,
                une histoire commune. Aujourd&apos;hui, nous avons envie de
                partager trois récits que nous avons vécus avec des
                professionnels de l&apos;immobilier genevois.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Trois contextes différents, trois besoins distincts, et trois
                belles aventures humaines qui ont transformé la vie
                d&apos;immeubles entiers. Embarquez avec nous au cœur du
                quotidien des syndics qui nous font confiance.
              </p>
            </div>

            {/* HISTOIRE 1 */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 text-black font-bold text-2xl w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    01
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      L&apos;histoire de Catherine
                    </h2>
                    <div className="flex items-center text-yellow-400 mt-2">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Quartier des Eaux-Vives, 60 lots</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/80 italic leading-relaxed">
                  &ldquo;Comment redonner du sourire à une copropriété
                  fatiguée&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/agent2.webp"
                    alt="Agent SAR en immeuble résidentiel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Le contexte
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Catherine gère depuis 12 ans une belle copropriété des
                    Eaux-Vives. Au fil du temps, les espaces communs
                    s&apos;étaient progressivement dégradés. Les
                    copropriétaires se plaignaient d&apos;un manque de
                    présence, de petits désagréments du quotidien, et
                    l&apos;ambiance générale s&apos;était assombrie.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    &ldquo;Je voyais bien que quelque chose ne fonctionnait
                    plus comme avant. Les gens ne se saluaient plus dans le
                    hall. Il fallait redonner une âme à cet immeuble&rdquo;,
                    nous confiait Catherine lors de notre première
                    rencontre.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaHandshake className="text-yellow-400 mr-3" />
                  Notre proposition
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Plutôt que de proposer immédiatement une solution standard,
                  nous avons d&apos;abord pris le temps. Une matinée entière à
                  parcourir l&apos;immeuble avec Catherine, à discuter avec
                  quelques résidents croisés dans les couloirs, à observer
                  les flux et les habitudes.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Notre conclusion : ce n&apos;était pas tant de
                  &ldquo;sécurité&rdquo; au sens strict dont la copropriété
                  avait besoin, mais d&apos;une présence humaine régulière,
                  attentive et bienveillante. Nous avons mis en place une
                  conciergerie sécurisée à temps partiel, avec un agent dédié
                  qui devient progressivement un membre de la communauté.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaLeaf className="text-emerald-400 mr-3" />
                  Le résultat, 6 mois plus tard
                </h3>
                <div className="space-y-4 text-white/80">
                  <p className="leading-relaxed">
                    Marc, notre agent affecté à l&apos;immeuble, connaît
                    désormais tous les résidents par leur prénom. Il arrose
                    les plantes de Madame Dubois quand elle part en
                    Engadine, aide les enfants à porter leur cartable les
                    jours de pluie, et a même appris quelques mots de
                    portugais avec la famille Silva du 4ème.
                  </p>
                  <div className="bg-black/30 p-6 rounded-xl border-l-4 border-yellow-500 my-6">
                    <FaQuoteLeft className="text-yellow-400 text-xl mb-2" />
                    <p className="italic text-white/90 text-lg">
                      &ldquo;Lors de notre dernière assemblée générale,
                      plusieurs copropriétaires ont spontanément remercié le
                      conseil syndical pour cette décision. C&apos;est rare,
                      croyez-moi ! L&apos;ambiance de l&apos;immeuble a
                      complètement changé.&rdquo;
                    </p>
                    <p className="text-yellow-400 mt-2 font-medium">
                      — Catherine, syndic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HISTOIRE 2 */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 text-black font-bold text-2xl w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    02
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      L&apos;histoire de Pierre
                    </h2>
                    <div className="flex items-center text-yellow-400 mt-2">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Champel, résidence de standing, 24 lots</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/80 italic leading-relaxed">
                  &ldquo;Quand l&apos;excellence du service rejoint
                  l&apos;exigence d&apos;une résidence haut de gamme&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="lg:order-2 relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/controle-maison.png"
                    alt="Résidence de standing à Genève"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:order-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Le contexte
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Pierre est régisseur d&apos;une belle résidence de
                    Champel qui accueille une clientèle internationale et
                    exigeante : diplomates, dirigeants d&apos;entreprises,
                    professions libérales. Ces résidents avaient l&apos;
                    habitude d&apos;un certain standard de service issu de
                    leurs expériences à l&apos;hôtel ou dans d&apos;autres
                    capitales européennes.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    &ldquo;Notre résidence avait tout pour séduire, mais il
                    manquait cette dimension de service que les résidents
                    attendaient. Un accueil professionnel, une réception
                    fluide des livraisons, une présence rassurante quand on
                    voyage souvent.&rdquo;
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaHandshake className="text-yellow-400 mr-3" />
                  Notre proposition
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Pour cette résidence, nous avons proposé une formule
                  premium : un agent d&apos;accueil multilingue (français,
                  anglais, italien et portugais) en présence pendant les
                  heures clés de la journée. Présentation impeccable,
                  formation hôtelière complémentaire, et une équipe de
                  remplacement aussi qualifiée pour assurer la continuité du
                  service.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Nous avons également mis en place un protocole personnalisé
                  pour chaque résident : préférences notées dans un dossier
                  confidentiel, gestion des livraisons sensibles, accueil
                  des prestataires (femme de ménage, fleuriste, traiteur)
                  selon les consignes de chacun.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaLeaf className="text-emerald-400 mr-3" />
                  Le résultat, un an plus tard
                </h3>
                <div className="space-y-4 text-white/80">
                  <p className="leading-relaxed">
                    Aujourd&apos;hui, plusieurs résidents ont demandé à Pierre
                    de transmettre des remerciements personnels à notre
                    équipe. Lors d&apos;une assemblée générale,
                    l&apos;ensemble des copropriétaires a voté à l&apos;
                    unanimité la prolongation du contrat. Mieux : trois
                    appartements ont récemment été vendus en mettant en
                    avant la qualité de la conciergerie sécurisée comme
                    argument commercial.
                  </p>
                  <div className="bg-black/30 p-6 rounded-xl border-l-4 border-yellow-500 my-6">
                    <FaQuoteLeft className="text-yellow-400 text-xl mb-2" />
                    <p className="italic text-white/90 text-lg">
                      &ldquo;Nos agents d&apos;accueil sont devenus le visage
                      de la résidence. Ils incarnent les valeurs que nous
                      voulons transmettre : excellence, discrétion,
                      attention au détail. C&apos;est un véritable
                      partenariat.&rdquo;
                    </p>
                    <p className="text-yellow-400 mt-2 font-medium">
                      — Pierre, régisseur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HISTOIRE 3 */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 text-black font-bold text-2xl w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    03
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      L&apos;histoire d&apos;Antonio
                    </h2>
                    <div className="flex items-center text-yellow-400 mt-2">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Plainpalais, 45 lots avec parking souterrain</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-white/80 italic leading-relaxed">
                  &ldquo;Une copropriété qui retrouve la sérénité grâce à une
                  approche sur mesure&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/agent-ronde.png"
                    alt="Ronde de sécurité en copropriété"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Le contexte
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Antonio est syndic professionnel d&apos;une copropriété
                    de Plainpalais. L&apos;immeuble disposait d&apos;un
                    grand parking souterrain et de plusieurs accès, ce qui
                    rendait la gestion quotidienne un peu compliquée.
                    L&apos;assemblée générale avait évoqué le sujet de la
                    sécurité, sans qu&apos;une décision claire ne se
                    dégage.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    &ldquo;Je voulais avant tout proposer une solution
                    pragmatique, qui rassure tout le monde sans alourdir
                    excessivement les charges. L&apos;équilibre n&apos;était
                    pas évident à trouver.&rdquo;
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaHandshake className="text-yellow-400 mr-3" />
                  Notre proposition
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Nous avons proposé une approche modulaire : trois rondes
                  hebdomadaires à horaires variables, une remise à plat du
                  système de badges du parking (devenu obsolète), et une
                  permanence téléphonique pour les résidents en cas de
                  besoin. Le tout pour un budget que la copropriété pouvait
                  facilement assumer.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Notre équipe a aussi accompagné Antonio à l&apos;assemblée
                  générale suivante pour présenter directement la solution
                  aux copropriétaires, répondre à leurs questions et
                  expliquer concrètement la démarche. Cette transparence a
                  fait l&apos;unanimité.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FaLeaf className="text-emerald-400 mr-3" />
                  Le résultat, 8 mois plus tard
                </h3>
                <div className="space-y-4 text-white/80">
                  <p className="leading-relaxed">
                    Antonio a aujourd&apos;hui une vraie visibilité sur ce
                    qui se passe dans son immeuble grâce aux rapports
                    mensuels que nous lui transmettons. Les résidents ont
                    appris à reconnaître nos agents et n&apos;hésitent plus
                    à leur faire part de leurs questions. Un sentiment de
                    communauté s&apos;est progressivement installé.
                  </p>
                  <div className="bg-black/30 p-6 rounded-xl border-l-4 border-yellow-500 my-6">
                    <FaQuoteLeft className="text-yellow-400 text-xl mb-2" />
                    <p className="italic text-white/90 text-lg">
                      &ldquo;Ce qui m&apos;a surpris, c&apos;est la
                      flexibilité de SAR Security. Quand j&apos;ai eu besoin
                      d&apos;augmenter ponctuellement la fréquence des
                      rondes pendant des travaux dans l&apos;immeuble, tout
                      a été géré en 48h. C&apos;est un vrai partenaire de
                      terrain.&rdquo;
                    </p>
                    <p className="text-yellow-400 mt-2 font-medium">
                      — Antonio, syndic professionnel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ce qui relie ces histoires */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ce qui <span className="text-yellow-400">relie</span> ces
                  trois histoires
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Au-delà de la diversité des situations, des fils conducteurs
                  émergent
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaHeart className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        L&apos;humain au cœur
                      </h3>
                      <p className="text-white/70 text-sm">
                        Dans chaque cas, ce sont nos agents en chair et en os
                        qui ont fait la différence. La technologie est un
                        support, jamais une fin en soi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaUsers className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Une écoute attentive
                      </h3>
                      <p className="text-white/70 text-sm">
                        Avant de proposer, nous prenons le temps de
                        comprendre. Chaque copropriété est unique et mérite
                        une réponse sur mesure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaHandshake className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Un partenariat de confiance
                      </h3>
                      <p className="text-white/70 text-sm">
                        Catherine, Pierre et Antonio nous font confiance
                        depuis plusieurs années. La régularité et la
                        constance sont nos valeurs cardinales.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaSmile className="text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        Le bien-être des résidents
                      </h3>
                      <p className="text-white/70 text-sm">
                        Notre objectif final, c&apos;est toujours le sourire
                        des résidents et leur sentiment de bien vivre dans
                        leur immeuble.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Évaluation globale */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-3xl mx-1"
                    />
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Une satisfaction qui se traduit en chiffres
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div className="text-5xl font-bold text-yellow-400 mb-2">
                      98%
                    </div>
                    <p className="text-white/80">
                      de syndics satisfaits selon notre enquête annuelle
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-yellow-400 mb-2">
                      4.9/5
                    </div>
                    <p className="text-white/80">
                      note moyenne de nos prestations résidentielles
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-yellow-400 mb-2">
                      87%
                    </div>
                    <p className="text-white/80">
                      de renouvellement annuel des contrats syndic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaBuilding className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Et si la prochaine histoire était la vôtre ?
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Chaque copropriété mérite un accompagnement personnalisé. Nous
                serions ravis d&apos;échanger avec vous autour d&apos;un café
                pour comprendre vos enjeux spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Échangeons ensemble
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>

            {/* Note transparence */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 mb-16 border border-slate-700 text-center">
              <p className="text-white/60 text-sm italic">
                Note : par respect de la confidentialité de nos clients, les
                prénoms ont été modifiés et certains détails légèrement
                adaptés. Les contextes et les retours d&apos;expérience sont,
                eux, fidèles à la réalité.
              </p>
            </div>

            {/* Articles similaires */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles à découvrir
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/immersion-24h-agent-immeuble"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    24h avec un agent SAR en immeuble
                  </h4>
                  <p className="text-white/70 text-sm">
                    Plongée immersive dans le quotidien d&apos;une copropriété
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
