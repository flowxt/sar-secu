import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaCar,
  FaShieldAlt,
  FaEye,
  FaCheckCircle,
  FaLightbulb,
  FaVideo,
  FaKey,
  FaWalking,
  FaLock,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title:
    "Sécurité des parkings d'immeubles : prévenir vols et incivilités | SAR Security",
  description:
    "Comment sécuriser efficacement le parking de votre copropriété à Genève. Solutions pratiques pour syndics : surveillance, éclairage, vidéosurveillance.",
  alternates: {
    canonical: "https://sar-security.ch/blog/securite-parkings-immeubles",
  },
};

export default function SecuriteParkingsArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/controle-acces.png"
            alt="Sécurité des parkings d'immeubles"
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
                Sécurité des <span className="text-yellow-400">parkings</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Solutions pratiques pour les copropriétés genevoises
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>8 avril 2026</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Parking & Garage</span>
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
                Le parking d&apos;une copropriété est souvent l&apos;espace le
                plus exposé : isolé, mal éclairé, accessible facilement en
                voiture... Pourtant, c&apos;est aussi l&apos;endroit où les
                résidents stockent un patrimoine considérable. Comment
                sécuriser efficacement cet espace stratégique ? Voici les
                bonnes pratiques que tout syndic devrait connaître.
              </p>
            </div>

            {/* Pourquoi sécuriser */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaCar className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Pourquoi le parking est un espace sensible
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaCar className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Patrimoine concentré
                      </h3>
                      <p className="text-white/80">
                        Plusieurs dizaines de véhicules de valeur stationnés
                        dans un espace restreint, sans oublier les vélos,
                        scooters et équipements stockés.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaEye className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Visibilité réduite
                      </h3>
                      <p className="text-white/80">
                        Sous-sols, recoins, faible éclairage : un environnement
                        qui peut faciliter les comportements indésirables sans
                        mesures adéquates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaKey className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Accès multiples
                      </h3>
                      <p className="text-white/80">
                        Porte automatique, accès piéton, ascenseur, issue de
                        secours : autant de points qu&apos;il faut maîtriser
                        pour garantir la sécurité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaUsers className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Espace partagé
                      </h3>
                      <p className="text-white/80">
                        Résidents, visiteurs, prestataires : un flux constant
                        qui nécessite une organisation claire pour préserver la
                        tranquillité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image illustrative */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent-ronde.png"
                alt="Surveillance de parking par agent professionnel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Surveillance régulière des parkings souterrains
                </p>
              </div>
            </div>

            {/* Solutions concrètes */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Les <span className="text-yellow-400">solutions</span>{" "}
                  efficaces
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Une approche complémentaire qui combine plusieurs leviers
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Contrôle d&apos;accès renforcé
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        La première ligne de défense de votre parking
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Badges nominatifs pour résidents et visiteurs
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Système de fermeture automatique des portails
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Détection des entrées multiples (anti-talonnage)
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Traçabilité des accès pour le syndic
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaLock className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Filtrage intelligent
                        </h4>
                        <p className="text-white/70 text-sm">
                          Seules les personnes autorisées entrent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Vidéosurveillance ciblée
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Couverture stratégique des points sensibles
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Caméras aux entrées et sorties principales
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Surveillance des zones de stockage
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Caméras infrarouges pour vision nocturne
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Conformité avec le règlement suisse
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaVideo className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Veille permanente
                        </h4>
                        <p className="text-white/70 text-sm">
                          Enregistrement et dissuasion 24h/24
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Rondes de surveillance
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Présence physique dissuasive et rassurante
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Passages d&apos;agents à horaires variables
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Vérification systématique des places et boxes
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle de l&apos;éclairage et du fonctionnement
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Rapport au syndic après chaque passage
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaWalking className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Effet humain
                        </h4>
                        <p className="text-white/70 text-sm">
                          Rien ne remplace une présence professionnelle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonnes pratiques */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Bonnes pratiques</span>{" "}
                  complémentaires
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Des aménagements simples qui font une grande différence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaLightbulb className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Éclairage adapté
                  </h3>
                  <p className="text-white/70 text-sm">
                    Détecteurs de mouvement et éclairage permanent dans les
                    zones stratégiques. Effet dissuasif majeur.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaShieldAlt className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Signalétique claire
                  </h3>
                  <p className="text-white/70 text-sm">
                    Indication de la présence de vidéosurveillance et
                    rappel des règles d&apos;accès aux visiteurs.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaCar className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Espaces dédiés
                  </h3>
                  <p className="text-white/70 text-sm">
                    Zone visiteurs séparée, places adaptées PMR, et
                    espace pour vélos clairement délimité.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaEye className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Suppression des angles morts
                  </h3>
                  <p className="text-white/70 text-sm">
                    Miroirs convexes aux virages et angles, éviter les
                    cachettes potentielles pour rassurer.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaKey className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Boxes individuels
                  </h3>
                  <p className="text-white/70 text-sm">
                    Conseiller aux résidents de privilégier les boxes
                    fermés pour les véhicules de valeur.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Sensibilisation
                  </h3>
                  <p className="text-white/70 text-sm">
                    Communiquer régulièrement avec les résidents sur
                    les bons réflexes (verrouillage, vigilance...).
                  </p>
                </div>
              </div>
            </div>

            {/* Cas concret */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Cas concret : une copropriété de Plainpalais
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Un syndic gérant un immeuble de 35 logements avec un parking
                souterrain de 40 places nous a contactés suite à plusieurs
                incidents : tags, dépôts d&apos;ordures, intrusions.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Après un audit complet, nous avons proposé une solution
                combinée : rénovation de l&apos;éclairage avec détecteurs,
                installation de 6 caméras stratégiques, badges
                d&apos;accès renouvelés, et 4 rondes hebdomadaires à
                horaires variables.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Six mois plus tard : zéro incident signalé, satisfaction
                des résidents en hausse, et le syndic a pu présenter en AG
                un bilan très positif. Investissement initial amorti par
                la valorisation du bien.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Sécurisons votre parking efficacement
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Audit gratuit de votre parking et proposition adaptée à
                votre budget. Solution évolutive selon les besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Demander un audit
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
                    Solutions complètes pour vos copropriétés
                  </p>
                </Link>
                <Link
                  href="/blog/controle-acces"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Contrôle d&apos;accès moderne
                  </h4>
                  <p className="text-white/70 text-sm">
                    Technologies pour sécuriser tous les accès
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
