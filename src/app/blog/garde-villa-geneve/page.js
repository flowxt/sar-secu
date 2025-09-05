import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft, FaHome, FaShieldAlt, FaEye, FaClock, FaCheckCircle, FaKey, FaLeaf, FaUsers, FaPhone, FaClipboardList, FaStar, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title:
    "Garde de villa à Genève : sérénité et protection de votre résidence | SAR Security",
  description:
    "Services de garde de villa professionnels à Genève. Protection discrète de votre résidence, surveillance personnalisée et tranquillité d'esprit lors de vos absences.",
  alternates: {
    canonical: "https://sar-security.ch/blog/garde-villa-geneve",
  },
};

export default function GardeVillaArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/villa.jpg"
            alt="Villa de prestige à Genève - Services de garde"
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
                <span className="text-yellow-400">Garde de villa</span> à Genève
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Votre tranquillité d&apos;esprit, notre priorité absolue
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>29 août 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Surveillance résidentielle</span>
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
                Dans la région genevoise, où la qualité de vie et la sécurité 
                sont des valeurs fondamentales, protéger sa résidence devient 
                un investissement naturel dans sa sérénité. La garde de villa 
                représente bien plus qu&apos;une simple surveillance : c&apos;est 
                la garantie de retrouver son foyer dans l&apos;état où on l&apos;a 
                quitté, la certitude que son environnement personnel reste préservé.
              </p>
            </div>

            {/* Pourquoi la garde de villa */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaHome className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  L&apos;importance de la garde de villa aujourd&apos;hui
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaLeaf className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Mode de vie moderne</h3>
                      <p className="text-white/80">
                        Voyages professionnels fréquents, séjours prolongés à 
                        l&apos;étranger ou résidences secondaires : notre mobilité 
                        croissante nécessite une surveillance adaptée.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaStar className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Patrimoine précieux</h3>
                      <p className="text-white/80">
                        Œuvres d&apos;art, collections, biens de valeur et 
                        souvenirs familiaux méritent une protection professionnelle 
                        et discrète pendant vos absences.
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
                      <h3 className="text-xl font-bold text-white mb-3">Situation géographique</h3>
                      <p className="text-white/80">
                        Villas isolées, résidences avec vue sur le lac ou 
                        propriétés de charme nécessitent une présence rassurante 
                        pour maintenir leur attractivité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaHandshake className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Investissement serein</h3>
                      <p className="text-white/80">
                        Préserver la valeur de son bien immobilier et profiter 
                        pleinement de ses voyages sans préoccupation liée à 
                        sa résidence principale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/controle-maison.png"
                alt="Surveillance discrète de villa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Surveillance professionnelle et discrète</p>
              </div>
            </div>

            {/* Services de garde */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nos <span className="text-yellow-400">services</span> de garde de villa
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Une approche personnalisée qui s&apos;adapte à vos besoins 
                  spécifiques et au caractère unique de votre propriété
                </p>
              </div>

              <div className="space-y-8">
                {/* Service 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">01</span>
                        <h3 className="text-2xl font-bold text-white">Surveillance périodique personnalisée</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Rondes de surveillance adaptées à la durée de votre absence
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Passages quotidiens, hebdomadaires ou sur mesure</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Vérification de tous les accès et ouvertures</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Contrôle du bon fonctionnement des installations</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Présence discrète pour maintenir l&apos;activité apparente</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaEye className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Surveillance adaptée</h4>
                        <p className="text-white/70 text-sm">Rythme personnalisé selon vos besoins</p>
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
                        <h3 className="text-2xl font-bold text-white">Gardiennage avec présence continue</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Agent de sécurité sur site pour une protection optimale
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Présence 24h/24 selon la durée souhaitée</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Surveillance active du périmètre</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Gestion des livraisons et visites autorisées</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Entretien courant et arrosage si nécessaire</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Protection continue</h4>
                        <p className="text-white/70 text-sm">Sécurité maximale jour et nuit</p>
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
                        <h3 className="text-2xl font-bold text-white">Services complémentaires</h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Solutions additionnelles pour une tranquillité totale
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Gestion du courrier et des colis</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Maintenance préventive et petites réparations</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Coordination avec vos prestataires habituels</li>
                        <li className="flex items-center"><FaCheckCircle className="text-yellow-400 mr-3" />Rapports détaillés et photos de suivi</li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaClipboardList className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">Service complet</h4>
                        <p className="text-white/70 text-sm">Gestion globale de votre propriété</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages spécifiques */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Avantages</span> de notre approche
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Ce qui fait la différence dans nos services de garde de villa
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaKey className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Discrétion absolue</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Surveillance professionnelle sans ostentation, 
                    préservant l&apos;intimité de votre propriété et la 
                    tranquillité du voisinage.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaClock className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Flexibilité totale</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Adaptation en temps réel à vos changements de 
                    programme, prolongation ou réduction de mission 
                    selon vos besoins.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPhone className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Contact permanent</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Liaison directe avec vous où que vous soyez, 
                    rapports réguliers et intervention immédiate 
                    en cas de besoin.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUsers className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Équipe dédiée</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Agents spécialisés dans la surveillance résidentielle, 
                    formés aux spécificités des propriétés de prestige 
                    genevoises.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaLeaf className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Respect environnemental</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Approche éco-responsable, préservation de vos 
                    espaces verts et utilisation raisonnée des 
                    ressources de la propriété.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaHandshake className="text-yellow-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Relation de confiance</h3>
                  </div>
                  <p className="text-white/70 text-sm text-center">
                    Partenariat durable basé sur la confiance mutuelle, 
                    la transparence et l&apos;excellence du service 
                    rendu.
                  </p>
                </div>
              </div>
            </div>

            {/* Conseils pratiques */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-400">Conseils</span> pour bien choisir
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Comment évaluer vos besoins et choisir le service adapté
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Évaluer la durée d&apos;absence",
                    content: "Pour des absences courtes (quelques jours), des rondes périodiques suffisent. Pour des séjours prolongés (plusieurs semaines), envisagez une présence continue."
                  },
                  {
                    title: "Considérer la localisation",
                    content: "Villa isolée ou en zone résidentielle ? Proche du lac ou en campagne ? L&apos;environnement influence le type de surveillance nécessaire."
                  },
                  {
                    title: "Définir les prestations",
                    content: "Simple surveillance ou services additionnels ? Gestion du courrier, entretien des plantes, coordination avec d&apos;autres prestataires ?"
                  },
                  {
                    title: "Planifier à l&apos;avance",
                    content: "Contactez-nous idéalement 2 semaines avant votre départ pour organiser une visite de reconnaissance et planifier l&apos;intervention."
                  }
                ].map((conseil, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded-full mr-3">{index + 1}</span>
                      {conseil.title}
                    </h3>
                    <p className="text-white/70">
                      {conseil.content}
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
                  <h3 className="text-2xl font-bold text-white mb-4">Témoignage client</h3>
                </div>
                <blockquote className="text-xl text-white/90 italic mb-6 max-w-3xl mx-auto">
                  &ldquo;Partir en voyage de noces pendant trois semaines sans se soucier 
                  de notre villa, c&apos;est un luxe inestimable. L&apos;équipe SAR Security 
                  a été d&apos;une discrétion et d&apos;un professionnalisme exemplaires. 
                  Nous avons retrouvé notre maison dans un état parfait, et même nos 
                  plantes étaient mieux entretenues qu&apos;avant notre départ !&rdquo;
                </blockquote>
                <cite className="text-white/70 font-medium">
                  Famille R., propriétaires à Cologny
                </cite>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Confiez-nous la garde de votre villa
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Partir l&apos;esprit tranquille, c&apos;est possible. Demandez-nous 
                un devis personnalisé pour la surveillance de votre propriété.
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
                  Nos autres services
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
                  href="/blog/accueil-securise"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Accueil sécurisé en entreprise
                  </h4>
                  <p className="text-white/70 text-sm">
                    Services de surveillance et d&apos;accueil professionnels
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
                    Technologies et solutions pour sécuriser les accès
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
