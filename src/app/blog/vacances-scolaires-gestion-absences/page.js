import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaQuoteLeft,
  FaHandshake,
  FaWalking,
  FaHome,
  FaKey,
  FaClipboardCheck,
  FaSnowflake,
  FaSun,
  FaSeedling,
  FaTree,
  FaCalendarCheck,
  FaRegSmile,
  FaShieldAlt,
  FaChild,
} from "react-icons/fa";

export const metadata = {
  title:
    "Vacances scolaires : comment SAR Security gère vos absences, de A à Z | SAR Security",
  description:
    "Fin des vacances d'automne à Genève : Sidnei Ribeiro, fondateur de SAR Security, explique comment se déroule une mission de rondes pendant les absences et comment préparer les prochaines vacances scolaires.",
  alternates: {
    canonical:
      "https://sar-security.ch/blog/vacances-scolaires-gestion-absences",
  },
};

const etapes = [
  {
    icon: FaHandshake,
    titre: "Avant le départ : on fait connaissance",
    texte:
      "Un rendez-vous chez vous pour visiter le logement, noter vos habitudes et vos consignes, et convenir de la fréquence des passages. C'est aussi le moment de la remise des clés.",
  },
  {
    icon: FaWalking,
    titre: "Pendant les vacances : les rondes",
    texte:
      "Nos agents passent aux jours et créneaux convenus. Ils vérifient les accès, les installations et les petites attentions demandées (volets, plantes, courrier).",
  },
  {
    icon: FaClipboardCheck,
    titre: "Après chaque passage : un compte rendu",
    texte:
      "Vous recevez un message court et clair. Si un point mérite votre attention, nous vous appelons, vous ou la personne de contact que vous avez désignée.",
  },
  {
    icon: FaKey,
    titre: "Au retour : on vous rend les clés",
    texte:
      "La mission se termine par la restitution des clés et un bilan rapide. Vous retrouvez votre maison comme vous l'avez laissée.",
  },
];

const prochainesVacances = [
  {
    icon: FaTree,
    titre: "Vacances de Noël",
    texte:
      "Les fêtes en famille, souvent loin de Genève. C'est la période la plus demandée : mieux vaut réserver dès novembre.",
  },
  {
    icon: FaSnowflake,
    titre: "Vacances de février",
    texte:
      "La semaine au ski. En plein hiver, le suivi du chauffage et des arrivées d'eau prend tout son sens.",
  },
  {
    icon: FaSeedling,
    titre: "Vacances de Pâques",
    texte:
      "Le printemps revient, le jardin aussi. Arrosage et volets font souvent partie des consignes.",
  },
  {
    icon: FaSun,
    titre: "Vacances d'été",
    texte:
      "Les absences les plus longues de l'année. Une formule sur plusieurs semaines, ajustée à votre calendrier.",
  },
];

export default function VacancesScolairesGestionAbsencesArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sar-sid.jpg"
            alt="Sidnei Ribeiro, fondateur de SAR Security"
            fill
            priority
            className="object-cover object-[center_60%] brightness-[0.3]"
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
                Vacances scolaires : vos absences,{" "}
                <span className="text-yellow-400">notre attention</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Au retour des vacances d&apos;automne, Sidnei Ribeiro raconte
                comment SAR Security veille sur les logements des familles
                genevoises
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>25 octobre 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par Sidnei Ribeiro</span>
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
            {/* Introduction avec portrait */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-48 h-64 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-yellow-500/40 shadow-xl">
                  <Image
                    src="/images/sar-sid.jpg"
                    alt="Sidnei Ribeiro, fondateur de SAR Security"
                    fill
                    className="object-cover object-[center_70%]"
                  />
                </div>
                <div>
                  <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
                    Les cartables vont bientôt reprendre du service. Pour
                    beaucoup de familles, les vacances d&apos;automne se
                    terminent avec des souvenirs plein la tête et, je
                    l&apos;espère, sans s&apos;être fait de souci pour la
                    maison.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Chaque période de vacances scolaires est pour nous un
                    moment particulier. Des familles nous confient leurs clés,
                    leur logement et, d&apos;une certaine manière, leur
                    tranquillité. Je voulais partager avec vous la façon dont
                    nous abordons ces missions.
                  </p>
                </div>
              </div>
            </div>

            {/* Une relation de confiance */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaHome className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Prendre soin d&apos;une maison comme si c&apos;était la
                    nôtre
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Quand on entre chez quelqu&apos;un en son absence, on entre
                  dans son intimité. Les dessins des enfants sur le frigo, le
                  vélo rangé dans le couloir, la plante à laquelle la famille
                  tient tant. Mes agents le savent : chaque logement a son
                  histoire, et on le respecte.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Notre travail pendant les vacances n&apos;a rien de
                  spectaculaire. Il est fait de régularité, de petits
                  contrôles et d&apos;attention aux détails. C&apos;est
                  justement cette discrétion qui permet aux familles de
                  profiter pleinement de leurs congés.
                </p>
              </div>
            </div>

            {/* Déroulé d'une mission */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Une mission vacances,{" "}
                <span className="text-yellow-400">étape par étape</span>
              </h2>
              <div className="space-y-6">
                {etapes.map((etape, index) => (
                  <div
                    key={etape.titre}
                    className="flex items-start bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
                  >
                    <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0 text-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <etape.icon className="text-yellow-400 mr-3" />
                        <h3 className="text-xl font-bold text-white">
                          {etape.titre}
                        </h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        {etape.texte}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-12 relative h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sar-ronde.jpg"
                alt="Agent SAR Security lors d'une ronde de vérification"
                fill
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-medium">
                  Régularité, attention aux détails et discrétion : les trois
                  piliers de nos rondes
                </p>
              </div>
            </div>

            {/* Les enfants */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <FaChild className="text-black text-xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Des vacances vraiment déconnectées
                  </h2>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Les vacances scolaires, ce sont des moments précieux avec
                  les enfants. Ce qu&apos;on entend le plus souvent au retour,
                  c&apos;est : &laquo;&nbsp;On n&apos;y a même pas
                  pensé.&nbsp;&raquo; Pour nous, c&apos;est le plus beau
                  compliment.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Savoir que quelqu&apos;un passe régulièrement, recevoir un
                  petit message qui confirme que tout va bien, et pouvoir
                  ensuite ranger son téléphone pour profiter de la randonnée,
                  de la plage ou du goûter chez les grands-parents. C&apos;est
                  tout ce que nous cherchons à offrir.
                </p>
              </div>
            </div>

            {/* Prochaines vacances */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <FaCalendarCheck className="text-yellow-400 text-4xl mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Les prochaines vacances{" "}
                  <span className="text-yellow-400">arrivent vite</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  À peine rentrés, beaucoup de parents pensent déjà aux
                  prochains congés. Voici comment nous accompagnons chaque
                  période de l&apos;année scolaire.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {prochainesVacances.map((periode) => (
                  <div
                    key={periode.titre}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-yellow-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <periode.icon className="text-yellow-400 text-xl" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {periode.titre}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {periode.texte}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="flex items-center mb-6">
                <FaRegSmile className="text-yellow-400 text-3xl mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Bonne rentrée à toutes et à tous
                </h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Je remercie chaleureusement les familles qui nous ont fait
                confiance pendant ces vacances d&apos;automne, ainsi que mes
                agents pour leur sérieux et leur bienveillance.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Et si vous préparez déjà vos prochains congés, n&apos;hésitez
                pas à nous écrire : nous prendrons le temps de vous rencontrer
                et de construire avec vous la formule qui vous convient.
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
                Préparez sereinement vos prochaines vacances
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Noël, février, Pâques ou été : réservez vos rondes à
                l&apos;avance et partez l&apos;esprit tranquille.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Réserver mes rondes
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
                  href="/blog/vacances-automne-partir-serein"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Vacances d&apos;automne : partez l&apos;esprit léger
                  </h4>
                  <p className="text-white/70 text-sm">
                    Nos rondes pendant votre absence et la checklist avant le
                    départ
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
