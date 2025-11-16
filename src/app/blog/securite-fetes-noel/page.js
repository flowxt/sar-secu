import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft, FaGift, FaShieldAlt, FaHome, FaUsers, FaCheckCircle, FaClock, FaEye, FaHandshake, FaStar, FaSnowflake, FaTree, FaBell, FaHeart, FaLightbulb, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title:
    "Sécurité pendant les fêtes de Noël : célébrer en toute sérénité | SAR Security",
  description:
    "Conseils et services de sécurité pour les fêtes de Noël à Genève. Protection des biens, surveillance d'événements festifs et tranquillité pendant les célébrations.",
  alternates: {
    canonical: "https://sar-security.ch/blog/securite-fetes-noel",
  },
};

export default function SecuriteFetesNoelArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/noel.jpg"
            alt="Fêtes de Noël sécurisées à Genève"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>

        {/* Overlay avec dégradé */}
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
                <span className="text-yellow-400">Fêtes de Noël</span> en toute sérénité
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Célébrer les fêtes l&apos;esprit tranquille grâce à une sécurité adaptée
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>15 décembre 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Sécurité festive</span>
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
                Les fêtes de Noël sont synonymes de joie, de partage et de 
                moments précieux en famille. À Genève, cette période magique 
                s&apos;accompagne naturellement d&apos;une effervescence particulière : 
                réceptions, voyages, cadeaux précieux et résidences temporairement 
                inoccupées. Une approche réfléchie de la sécurité permet de 
                profiter pleinement de ces instants uniques, en toute tranquillité.
              </p>
            </div>

            {/* Spécificités des fêtes */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaSnowflake className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Les spécificités de la période festive
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaGift className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Biens de valeur temporaires</h3>
                      <p className="text-white/80">
                        Cadeaux coûteux, bijoux, électronique et objets précieux 
                        s&apos;accumulent dans les foyers pendant cette période 
                        particulière de l&apos;année.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaMapMarkerAlt className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Absences prolongées</h3>
                      <p className="text-white/80">
                        Voyages aux sports d&apos;hiver, séjours en famille ou 
                        vacances tropicales laissent de nombreuses résidences 
                        temporairement inhabitées.
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
                      <h3 className="text-xl font-bold text-white mb-3">Réceptions et événements</h3>
                      <p className="text-white/80">
                        Soirées d&apos;entreprise, réunions familiales et fêtes 
                        privées rassemblent de nombreuses personnes dans un 
                        cadre festif et détendu.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaHeart className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Esprit de confiance</h3>
                      <p className="text-white/80">
                        L&apos;atmosphère bienveillante des fêtes peut parfois 
                        nous faire relâcher notre vigilance habituelle, ce qui 
                        nécessite une attention particulière.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/event.png"
                alt="Événement festif sécurisé"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Sécurité discrète pour vos événements festifs</p>
              </div>
            </div>

            {/* Solutions adaptées */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nos <span className="text-yellow-400">solutions</span> pour les fêtes
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Des services de sécurité adaptés à l&apos;esprit festif, 
                  alliant efficacité et discrétion
                </p>
              </div>

              <div className="space-y-8">
                {/* Solution 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">01</span>
                        <h3 className="text-2xl font-bold text-white">Surveillance de résidence pendant les vacances</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Protection de votre foyer pendant vos absences festives
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Rondes de surveillance personnalisées</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Gestion du courrier et des livraisons</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Simulation de présence (éclairage, volets)</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Entretien des décorations de Noël extérieures</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaHome className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Maison protégée</h4>
                        <p className="text-white/70 text-sm">Votre foyer en sécurité pendant vos vacances</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">02</span>
                        <h3 className="text-2xl font-bold text-white">Sécurité d&apos;événements festifs</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Service d&apos;ordre discret pour vos réceptions de Noël
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Contrôle d&apos;accès bienveillant</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Surveillance discrète des espaces</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Gestion des flux d&apos;invités</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Protection des biens personnels et cadeaux</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaUsers className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Événement serein</h4>
                        <p className="text-white/70 text-sm">Fêtes réussies en toute tranquillité</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">03</span>
                        <h3 className="text-2xl font-bold text-white">Accompagnement shopping et transport</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Protection discrète lors de vos achats de Noël
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Accompagnement discret dans les centres commerciaux</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Transport sécurisé des achats précieux</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Surveillance des véhicules pendant les courses</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Assistance pour les achats volumineux</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Shopping protégé</h4>
                        <p className="text-white/70 text-sm">Achats de Noël en toute sécurité</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pratiques */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Conseils</span> pour des fêtes sereines
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Quelques recommandations simples pour profiter pleinement 
                  de la magie de Noël
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaLightbulb className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Éclairage intelligent</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Programmez vos éclairages de Noël et intérieurs pour 
                    simuler une présence naturelle pendant vos absences.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaGift className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Cadeaux discrets</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Évitez d&apos;exposer les emballages de produits coûteux 
                    et rangez les cadeaux dans un endroit sûr avant les fêtes.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaBell className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Voisinage informé</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Prévenez vos voisins de confiance de vos absences et 
                    demandez-leur une surveillance amicale réciproque.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEye className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Réseaux sociaux</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Partagez vos moments festifs après votre retour plutôt 
                    qu&apos;en temps réel pour préserver votre intimité.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaClock className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Planification précoce</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Organisez vos services de sécurité à l&apos;avance, 
                    la période des fêtes étant particulièrement demandée.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHandshake className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Confiance partagée</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Établissez une relation de confiance avec votre équipe 
                    de sécurité pour une collaboration harmonieuse.
                  </p>
                </div>
              </div>
            </div>

            {/* Témoignage festif */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTree className="text-yellow-400 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Témoignage client</h3>
                </div>
                <blockquote className="text-xl text-white/90 italic mb-6 max-w-3xl mx-auto">
                  &ldquo;Grâce à SAR Security, nous avons pu partir skier en famille 
                  pendant deux semaines sans nous soucier de notre maison décorée 
                  pour Noël. À notre retour, tout était parfait : les guirlandes 
                  fonctionnaient, le courrier était trié, et même notre sapin 
                  était encore magnifique ! Un service qui nous a permis de 
                  profiter pleinement de nos vacances.&rdquo;
                </blockquote>
                <cite className="text-white/70 font-medium">
                  Famille M., résidents à Cologny
                </cite>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Préparez des fêtes de Noël sereines
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Confiez-nous la sécurité de vos biens et événements pour 
                profiter pleinement de la magie de Noël en famille.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Planifier ma sécurité
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-center"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>

            {/* Navigation vers d'autres articles */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles similaires
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
                    Protection de votre résidence pendant vos absences
                  </p>
                </Link>
                <Link
                  href="/blog/securite-evenementielle"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Sécurité événementielle
                  </h4>
                  <p className="text-white/70 text-sm">
                    Organisation sécurisée de vos événements privés
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
