import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaSuitcaseRolling,
  FaCheckCircle,
  FaKey,
  FaWalking,
  FaClipboardCheck,
  FaEnvelopeOpenText,
  FaSeedling,
  FaThermometerHalf,
  FaTint,
  FaQuoteLeft,
  FaMobileAlt,
  FaHandshake,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

export const metadata = {
  title:
    "Vacances d'automne : partez l'esprit léger, on veille sur votre logement | SAR Security",
  description:
    "Vacances scolaires d'automne à Genève : SAR Security assure des rondes pendant votre absence. Passages réguliers, vérifications et rapports pour profiter pleinement de vos congés en famille.",
  alternates: {
    canonical: "https://sar-security.ch/blog/vacances-automne-partir-serein",
  },
};

export default function VacancesAutomnePartirSereinArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sar-ronde.jpg"
            alt="Agent SAR Security en ronde de vérification"
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
                  Vacances scolaires
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Vacances d&apos;automne : partez l&apos;
                <span className="text-yellow-400">esprit léger</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Pendant que vous profitez de vos congés en famille, nous
                veillons sur votre logement
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>10 octobre 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Vacances & absences</span>
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
                Les vacances d&apos;automne approchent à grands pas. Les
                enfants comptent déjà les jours, les valises sortent du placard
                et les destinations se discutent à table : week-end à la
                montagne, soleil du Sud ou visite aux grands-parents.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Une seule petite question reste souvent en suspens au moment de
                fermer la porte : &laquo;&nbsp;Et la maison, pendant ce
                temps&nbsp;?&nbsp;&raquo; Les plantes, le courrier, le
                chauffage, cette fenêtre qu&apos;on n&apos;est plus sûr
                d&apos;avoir bien fermée... C&apos;est exactement pour ces
                moments-là que SAR Security propose des rondes de vérification
                pendant vos absences. Pour que vos vacances restent des
                vacances.
              </p>
            </div>

            {/* Pourquoi les vacances scolaires */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaSuitcaseRolling className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Les vacances scolaires, un moment à part
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Pendant les vacances scolaires, de nombreuses familles
                  genevoises partent en même temps. Dans certains immeubles,
                  c&apos;est presque un palier entier qui se met en pause pour
                  une semaine ou deux. Les villas, elles, restent silencieuses
                  derrière leurs volets.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Rien d&apos;inquiétant en soi : un logement vit très bien
                  quelques jours sans ses habitants. Mais un petit imprévu
                  (une fuite discrète, un radiateur qui fait des siennes, une
                  boîte aux lettres qui déborde) est toujours plus simple à
                  gérer quand quelqu&apos;un passe régulièrement jeter un œil.
                  C&apos;est tout le sens d&apos;une ronde pendant les
                  vacances.
                </p>
              </div>
            </div>

            {/* Ce que comprend une ronde */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaWalking className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Concrètement, que fait l&apos;agent lors de ses passages ?
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Chaque mission est définie avec vous avant le départ. La
                  fréquence des passages et les points à contrôler dépendent de
                  votre logement et de vos souhaits. Une ronde type peut
                  comprendre :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-600">
                    <FaShieldAlt className="text-yellow-400 text-2xl mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      Les accès
                    </h3>
                    <p className="text-white/70 text-sm">
                      Vérification des portes, fenêtres, portail et garage :
                      tout est bien fermé, rien n&apos;a bougé.
                    </p>
                  </div>
                  <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-600">
                    <FaTint className="text-yellow-400 text-2xl mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      Les installations
                    </h3>
                    <p className="text-white/70 text-sm">
                      Un coup d&apos;œil aux arrivées d&apos;eau, au chauffage
                      et aux appareils pour repérer tout souci au plus tôt.
                    </p>
                  </div>
                  <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-600">
                    <FaEnvelopeOpenText className="text-yellow-400 text-2xl mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      Le courrier et les colis
                    </h3>
                    <p className="text-white/70 text-sm">
                      Selon la formule convenue, relève du courrier pour que la
                      boîte aux lettres garde un air habituel.
                    </p>
                  </div>
                  <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-600">
                    <FaSeedling className="text-yellow-400 text-2xl mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      Les petites attentions
                    </h3>
                    <p className="text-white/70 text-sm">
                      Ouvrir ou fermer certains volets, allumer une lampe,
                      arroser les plantes : on adapte la ronde à votre maison.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-12 relative h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sar-ronde.jpg"
                alt="Agent SAR Security vérifiant un accès lors d'une ronde"
                fill
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-medium">
                  Chaque passage suit une liste de points convenue avec vous
                  avant votre départ
                </p>
              </div>
            </div>

            {/* Rapports */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaMobileAlt className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Des nouvelles de la maison, même depuis la plage
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Après chaque passage, vous pouvez recevoir un court compte
                  rendu : heure de la visite, points vérifiés, éventuelles
                  remarques. Un simple
                  &laquo;&nbsp;tout est en ordre&nbsp;&raquo; suffit souvent
                  à profiter pleinement de son après-midi.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Et si quelque chose mérite votre attention, nous vous
                  contactons directement (ou la personne que vous aurez
                  désignée) pour décider ensemble de la suite à donner.
                  Vous gardez la main, sans avoir à vous en occuper.
                </p>
              </div>
            </div>

            {/* Checklist avant départ */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaClipboardCheck className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    La petite checklist avant de boucler les valises
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Entre les sacs des enfants et les sandwichs pour la route,
                  voici quelques réflexes simples pour partir tranquille :
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Fermer les fenêtres, y compris celles des caves et des
                    combles
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Couper l&apos;arrivée d&apos;eau du lave-linge et
                    débrancher les appareils non essentiels
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Régler le chauffage en mode réduit plutôt que de le couper
                    complètement en automne
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Vider le réfrigérateur des produits frais
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Prévenir la régie ou le concierge de votre absence
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Organiser la relève du courrier et des rondes de
                    vérification si besoin
                  </li>
                </ul>
              </div>
            </div>

            {/* Clés et confiance */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaKey className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Confier ses clés, une question de confiance
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Laisser ses clés à quelqu&apos;un n&apos;est jamais anodin.
                  Chez SAR Security, la remise des clés se fait lors
                  d&apos;un rendez-vous préalable, où nous faisons ensemble le
                  tour du logement et fixons les consignes de la mission.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Les clés sont ensuite conservées de manière sécurisée et
                  vous sont restituées à votre retour. Vos informations
                  personnelles (dates d&apos;absence, adresse, contacts)
                  restent strictement confidentielles.
                </p>
              </div>
            </div>

            {/* Mot du fondateur */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-yellow-500/50">
                  <Image
                    src="/images/sar-sid.jpg"
                    alt="Sidnei Ribeiro, fondateur de SAR Security"
                    fill
                    className="object-cover object-[center_65%]"
                  />
                </div>
                <div>
                  <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-4">
                    Les vacances, c&apos;est fait pour souffler. Notre rôle
                    est simple : que les familles puissent partir sans
                    emporter la maison dans leurs pensées. Quand on reçoit un
                    message de remerciement envoyé depuis un chalet ou une
                    plage, on sait qu&apos;on a bien fait notre travail.
                  </p>
                  <p className="text-yellow-400 font-semibold">
                    Sidnei Ribeiro
                  </p>
                  <p className="text-white/60 text-sm">
                    Fondateur de SAR Security
                  </p>
                </div>
              </div>
            </div>

            {/* Pour qui */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Une formule pour{" "}
                  <span className="text-yellow-400">chaque départ</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Appartement, villa ou immeuble entier : on s&apos;adapte à
                  votre situation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSuitcaseRolling className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Familles en vacances
                  </h3>
                  <p className="text-white/70 text-sm">
                    Des passages réguliers pendant votre semaine ou vos deux
                    semaines de congés.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaThermometerHalf className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Résidences secondaires
                  </h3>
                  <p className="text-white/70 text-sm">
                    Un suivi dans la durée pour les logements occupés
                    seulement une partie de l&apos;année.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHandshake className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Régies et syndics
                  </h3>
                  <p className="text-white/70 text-sm">
                    Des rondes renforcées dans les parties communes pendant
                    les périodes de vacances scolaires.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaShieldAlt className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Vous partez pendant les vacances d&apos;automne ?
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Contactez-nous quelques jours avant votre départ : nous
                organisons ensemble le rendez-vous de remise des clés et la
                fréquence des rondes qui vous convient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Organiser mes rondes
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
                  href="/blog/garde-villa-geneve"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Garde de villa à Genève
                  </h4>
                  <p className="text-white/70 text-sm">
                    Sérénité et protection de votre résidence
                  </p>
                </Link>
                <Link
                  href="/blog/copropriete-automne-hiver-serenite"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Préparer sa copropriété pour l&apos;automne-hiver
                  </h4>
                  <p className="text-white/70 text-sm">
                    La checklist du syndic prévoyant à Genève
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
