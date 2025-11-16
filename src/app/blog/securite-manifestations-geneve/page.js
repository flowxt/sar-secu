import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft, FaUsers, FaShieldAlt, FaEye, FaBullhorn, FaCheckCircle, FaClock, FaHandshake, FaStar, FaMapMarkerAlt, FaRoute, FaPhoneAlt, FaClipboardList, FaUserTie, FaBalanceScale, FaHeart } from "react-icons/fa";

export const metadata = {
  title:
    "Sécurité des manifestations à Genève : service d'ordre professionnel | SAR Security",
  description:
    "Services de sécurité pour manifestations et rassemblements à Genève. Gestion des foules, service d'ordre discret et protection des participants.",
  alternates: {
    canonical: "https://sar-security.ch/blog/securite-manifestations-geneve",
  },
};

export default function SecuriteManifestationsArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/manif.png"
            alt="Manifestation sécurisée à Genève"
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
                <span className="text-yellow-400">Sécurité</span> des manifestations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Service d&apos;ordre professionnel pour rassemblements citoyens
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>10 novembre 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Service d&apos;ordre</span>
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
                Genève, ville internationale et siège de nombreuses organisations, 
                accueille régulièrement des manifestations citoyennes, des 
                rassemblements associatifs et des événements de sensibilisation. 
                Ces expressions démocratiques nécessitent un encadrement sécuritaire 
                respectueux, qui préserve à la fois la liberté d&apos;expression 
                et la sécurité de tous les participants.
              </p>
            </div>

            {/* Contexte genevois */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Le contexte genevois des manifestations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaBalanceScale className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Tradition démocratique</h3>
                      <p className="text-white/80">
                        La Suisse et Genève ont une longue tradition de respect 
                        des libertés publiques et d&apos;expression citoyenne 
                        dans un cadre pacifique et organisé.
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
                      <h3 className="text-xl font-bold text-white mb-3">Diversité des rassemblements</h3>
                      <p className="text-white/80">
                        Marches pour le climat, rassemblements associatifs, 
                        événements de sensibilisation : chaque manifestation 
                        a ses spécificités et ses besoins.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaRoute className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Espaces urbains sensibles</h3>
                      <p className="text-white/80">
                        Centre-ville, places publiques et axes de circulation : 
                        les manifestations genevoises se déroulent dans des 
                        espaces urbains denses et fréquentés.
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
                      <h3 className="text-xl font-bold text-white mb-3">Esprit constructif</h3>
                      <p className="text-white/80">
                        Les manifestations genevoises privilégient généralement 
                        le dialogue, la sensibilisation et l&apos;expression 
                        pacifique des revendications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/manif2.png"
                alt="Service d'ordre lors de manifestation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Encadrement professionnel et respectueux</p>
              </div>
            </div>

            {/* Services spécialisés */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nos <span className="text-yellow-400">services</span> d&apos;encadrement
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Un service d&apos;ordre adapté aux spécificités des 
                  rassemblements citoyens et associatifs
                </p>
              </div>

              <div className="space-y-8">
                {/* Service 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">01</span>
                        <h3 className="text-2xl font-bold text-white">Gestion des flux et canalisation</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Organisation des déplacements et sécurisation des parcours
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Canalisation des cortèges et groupes</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Gestion des points de rassemblement</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Coordination avec les transports publics</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Fluidité des déplacements urbains</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaRoute className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Flux organisés</h4>
                        <p className="text-white/70 text-sm">Déplacements fluides et sécurisés</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">02</span>
                        <h3 className="text-2xl font-bold text-white">Médiation et communication</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Interface bienveillante entre organisateurs et participants
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Information et orientation des participants</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Gestion des tensions éventuelles</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Communication avec les riverains</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Liaison avec les autorités locales</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaBullhorn className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Dialogue constructif</h4>
                        <p className="text-white/70 text-sm">Communication respectueuse et efficace</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">03</span>
                        <h3 className="text-2xl font-bold text-white">Surveillance discrète et protection</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Veille sécuritaire respectueuse des libertés individuelles
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Surveillance des espaces et accès</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Protection des organisateurs et intervenants</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Veille sur les équipements et matériel</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Intervention discrète si nécessaire</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaEye className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Veille respectueuse</h4>
                        <p className="text-white/70 text-sm">Surveillance discrète et bienveillante</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Approche professionnelle */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Notre <span className="text-yellow-400">approche</span> professionnelle
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Des principes clairs pour un service d&apos;ordre respectueux 
                  et efficace
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaBalanceScale className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Neutralité absolue</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Nos agents maintiennent une stricte neutralité politique 
                    et idéologique, se concentrant uniquement sur la sécurité.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHandshake className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Respect mutuel</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Approche basée sur le dialogue, l&apos;écoute et le 
                    respect des personnes et de leurs convictions.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUserTie className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Formation spécialisée</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Agents formés spécifiquement à la gestion des foules 
                    et à la médiation dans un contexte démocratique.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPhoneAlt className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Coordination continue</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Liaison permanente avec les organisateurs et les 
                    autorités pour une gestion coordonnée de l&apos;événement.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaClock className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Réactivité adaptée</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Capacité d&apos;adaptation en temps réel aux évolutions 
                    de la manifestation et aux besoins émergents.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaClipboardList className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Bilan constructif</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Débriefing post-événement avec les organisateurs 
                    pour améliorer continuellement nos prestations.
                  </p>
                </div>
              </div>
            </div>

            {/* Types de manifestations */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Types</span> de rassemblements accompagnés
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Notre expertise s&apos;adapte à tous types d&apos;événements citoyens
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Marches et cortèges",
                    description: "Manifestations itinérantes, marches de sensibilisation, cortèges thématiques avec gestion des parcours urbains."
                  },
                  {
                    title: "Rassemblements statiques",
                    description: "Meetings, prises de parole publiques, rassemblements sur places publiques avec gestion des espaces."
                  },
                  {
                    title: "Événements associatifs",
                    description: "Journées de sensibilisation, stands d'information, événements caritatifs avec protection du matériel."
                  },
                  {
                    title: "Commémorations",
                    description: "Cérémonies du souvenir, hommages collectifs, rassemblements mémoriels avec respect du recueillement."
                  }
                ].map((type, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded-full mr-3">{index + 1}</span>
                      {type.title}
                    </h3>
                    <p className="text-white/70">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-yellow-400 text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Témoignage organisateur</h3>
                </div>
                <blockquote className="text-xl text-white/90 italic mb-6 max-w-3xl mx-auto">
                  &ldquo;L&apos;équipe SAR Security a parfaitement compris l&apos;esprit 
                  de notre marche pour le climat. Leur présence discrète et 
                  bienveillante a permis à nos 2000 participants de s&apos;exprimer 
                  librement tout en garantissant la sécurité de tous. Un 
                  professionnalisme exemplaire au service de la démocratie 
                  participative.&rdquo;
                </blockquote>
                <cite className="text-white/70 font-medium">
                  Association Climat Genève
                </cite>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Organisez votre manifestation en toute sérénité
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Confiez l&apos;encadrement sécuritaire de votre rassemblement 
                à des professionnels respectueux de vos valeurs et objectifs.
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
                  Nos services événementiels
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
                  href="/blog/service-ordre-fete-nationale"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Service d&apos;ordre fête nationale
                  </h4>
                  <p className="text-white/70 text-sm">
                    Sécurité des festivités du 1er août en Suisse
                  </p>
                </Link>
                <Link
                  href="/blog/agents-securite-competences"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Compétences des agents de sécurité
                  </h4>
                  <p className="text-white/70 text-sm">
                    Formation et expertise de nos équipes
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
