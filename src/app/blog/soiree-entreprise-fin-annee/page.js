import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaGlassCheers,
  FaCheckCircle,
  FaClipboardList,
  FaUserTie,
  FaDoorOpen,
  FaTshirt,
  FaCar,
  FaHandsHelping,
  FaQuoteLeft,
  FaRegClock,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title:
    "Soirée d'entreprise de fin d'année : un événement réussi et serein | SAR Security",
  description:
    "Organiser une soirée d'entreprise ou un gala de fin d'année à Genève : accueil des invités, gestion des accès, vestiaire, voiturier et retour de chacun. Les conseils de SAR Security.",
  alternates: {
    canonical: "https://sar-security.ch/blog/soiree-entreprise-fin-annee",
  },
};

const missions = [
  {
    icon: FaClipboardList,
    titre: "Accueil et liste des invités",
    texte:
      "Vérification des invitations à l'entrée, orientation des invités et réponse aux questions. Le premier sourire de la soirée.",
  },
  {
    icon: FaDoorOpen,
    titre: "Gestion des accès et des flux",
    texte:
      "Les zones réservées au personnel, au traiteur ou aux intervenants restent accessibles aux bonnes personnes, sans bloquer la circulation des invités.",
  },
  {
    icon: FaTshirt,
    titre: "Vestiaire et objets personnels",
    texte:
      "En hiver, manteaux, sacs et parapluies s'accumulent. Un vestiaire tenu par un agent, c'est l'assurance de tout retrouver en fin de soirée.",
  },
  {
    icon: FaCar,
    titre: "Parking et voiturier",
    texte:
      "Accueil des véhicules, orientation vers le parking et service de voiturier pour que les invités arrivent détendus.",
  },
];

export default function SoireeEntrepriseFinAnneeArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sidnei-garde.jpg"
            alt="Sécurité d'une réception d'entreprise dans un domaine genevois"
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
                  Événements d&apos;entreprise
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Soirée d&apos;entreprise de fin d&apos;année :{" "}
                <span className="text-yellow-400">place à la fête</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Comment organiser un événement réussi où chacun profite, y
                compris l&apos;organisateur
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>6 novembre 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Événementiel d&apos;entreprise</span>
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
              <FaGlassCheers className="text-yellow-400 text-3xl mb-4" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                Novembre est là, et avec lui les premières invitations :
                apéritif de fin d&apos;année, dîner de gala, soirée du
                personnel. Pour les équipes, c&apos;est un moment attendu. Pour
                celles et ceux qui l&apos;organisent, c&apos;est aussi une
                longue liste de détails à penser.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Le lieu, le traiteur, la musique, les discours... et
                l&apos;accueil des invités. C&apos;est sur ce dernier point
                qu&apos;un partenaire de sécurité fait toute la différence :
                il prend en charge la logistique humaine de la soirée pour que
                l&apos;organisateur puisse, lui aussi, lever son verre.
              </p>
            </div>

            {/* Anticiper */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaRegClock className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Décembre se réserve en novembre
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Les salles, les traiteurs et les prestataires
                  événementiels sont très sollicités en décembre. Les
                  entreprises genevoises ont tendance à toutes fêter la fin de
                  l&apos;année durant les mêmes deux ou trois semaines.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Prévoir l&apos;accueil et la sécurité dès maintenant, en
                  même temps que le lieu et le menu, permet de choisir
                  sereinement la formule adaptée et de préparer la soirée avec
                  le prestataire plutôt que dans l&apos;urgence.
                </p>
              </div>
            </div>

            {/* Les missions */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Ce que nos agents prennent{" "}
                <span className="text-yellow-400">en charge</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missions.map((mission) => (
                  <div
                    key={mission.titre}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
                  >
                    <div className="bg-yellow-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <mission.icon className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {mission.titre}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {mission.texte}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Discrétion / tenue + image */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative w-full md:w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/sar-sid.jpg"
                      alt="Agent SAR Security en tenue de soirée lors d'une réception"
                      fill
                      className="object-cover object-[center_70%]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-yellow-500 p-3 rounded-full mr-4">
                        <FaUserTie className="text-black text-xl" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Élégance et discrétion
                      </h2>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Une soirée d&apos;entreprise n&apos;est pas un concert
                      en plein air. Nos agents s&apos;adaptent au style de
                      l&apos;événement : costume sombre, oreillette discrète,
                      attitude courtoise.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Les invités les remarquent à peine, mais ils sont là
                      pour renseigner, accompagner et faciliter. C&apos;est
                      précisément ce qui fait une soirée fluide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fin de soirée */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaHandsHelping className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Une fin de soirée aussi soignée que le début
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Le moment du départ est souvent celui auquel on pense le
                  moins. Pourtant, c&apos;est le dernier souvenir que les
                  invités garderont de la soirée.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Restitution rapide des vestiaires, sans file
                    d&apos;attente interminable
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Aide pour appeler un taxi ou orienter vers les transports
                    publics
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Une attention bienveillante pour que chacun rentre dans de
                    bonnes conditions
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    Vérification du lieu après le départ des derniers invités,
                    en lien avec le gestionnaire de la salle
                  </li>
                </ul>
              </div>
            </div>

            {/* Checklist organisateur */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <FaUsers className="text-yellow-400 text-4xl mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  La checklist de{" "}
                  <span className="text-yellow-400">l&apos;organisateur</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Les informations à préparer pour votre prestataire de
                  sécurité
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Le nombre d'invités attendus et le format de la soirée",
                  "Le plan du lieu, les entrées et les zones réservées",
                  "La liste des invités ou le mode de contrôle des invitations",
                  "Les horaires : montage, arrivée des invités, fin de soirée",
                  "Les contacts du lieu, du traiteur et de l'animation",
                  "Les invités de marque ou intervenants à accueillir",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start bg-slate-800/30 rounded-xl p-4 border border-slate-700"
                  >
                    <FaCheckCircle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-3" />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed italic mb-4">
                La meilleure soirée, c&apos;est celle où l&apos;organisateur
                peut enfin profiter de ses collègues. Nous préparons tout en
                amont avec lui, puis nous nous occupons du reste.
              </p>
              <p className="text-yellow-400 font-semibold">Sidnei Ribeiro</p>
              <p className="text-white/60 text-sm">
                Fondateur de SAR Security
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <FaShieldAlt className="text-black text-4xl mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-4">
                Vous organisez une soirée de fin d&apos;année ?
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Parlez-nous de votre événement : nous vous proposons un
                dispositif d&apos;accueil adapté à votre lieu, à vos invités
                et à votre budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander un devis
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
                <Link
                  href="/blog/securite-fetes-noel"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Sécurité pendant les fêtes de Noël
                  </h4>
                  <p className="text-white/70 text-sm">
                    Célébrer en toute sérénité
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
