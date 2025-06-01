import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaShieldAlt,
  FaEye,
  FaClock,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title:
    "Sécurité sur les chantiers à Genève : prévenir les intrusions et les vols | SAR Security",
  description:
    "Découvrez comment protéger efficacement vos chantiers contre les intrusions et vols de matériel. Solutions de sécurité adaptées au secteur BTP à Genève.",
  alternates: {
    canonical: "https://sar-security.ch/blog/securite-chantiers",
  },
};

export default function SecuriteChantierArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chantier.png"
            alt="Sécurité de chantier à Genève"
            fill
            priority
            className="object-cover brightness-[0.2]"
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
                Sécurité sur les{" "}
                <span className="text-yellow-400">chantiers</span> à Genève
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Prévenir les intrusions et les vols de matériel
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaCalendarAlt className="mr-2 text-yellow-400" />
                  <span>15 avril 2025</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaUser className="mr-2 text-yellow-400" />
                  <span>Par SAR Security</span>
                </div>
                <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                  <FaTags className="mr-2 text-yellow-400" />
                  <span>Sécurité BTP</span>
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
                Les chantiers de construction, souvent ouverts et peu éclairés
                la nuit, représentent des cibles privilégiées pour les
                intrusions, les vols de matériaux coûteux et les actes de
                vandalisme. À Genève, où l&apos;activité du BTP est intense, la
                sécurisation des chantiers est devenue un enjeu majeur pour les
                entreprises de construction.
              </p>
            </div>

            {/* Section Pourquoi */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-black text-xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Pourquoi la sécurité sur les chantiers est essentielle
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaTools className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Matériaux de valeur
                      </h3>
                      <p className="text-white/80">
                        Cuivre, câbles électriques, outils professionnels et
                        machines représentent des sommes importantes facilement
                        revendables.
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
                        Accès difficile à contrôler
                      </h3>
                      <p className="text-white/80">
                        Les chantiers sont souvent étendus avec de multiples
                        points d&apos;accès, rendant la surveillance complexe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaClock className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Horaires d&apos;inactivité
                      </h3>
                      <p className="text-white/80">
                        Les nuits, week-ends et jours fériés laissent les sites
                        sans surveillance naturelle.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500/50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 p-3 rounded-lg mr-4 mt-1">
                      <FaCheckCircle className="text-yellow-400 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Impact sur les délais
                      </h3>
                      <p className="text-white/80">
                        Un vol ou un acte de vandalisme peut retarder
                        considérablement l&apos;avancement des travaux.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image centrale */}
            <div className="my-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/agent-ronde.png"
                alt="Agent de sécurité en ronde sur chantier"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">
                  Agent de sécurité en ronde sur chantier
                </p>
              </div>
            </div>

            {/* Solutions de sécurité */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nos solutions de{" "}
                  <span className="text-yellow-400">sécurité</span> pour les
                  chantiers
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  SAR Security propose une gamme complète de services adaptés
                  aux spécificités des chantiers de construction
                </p>
              </div>

              <div className="space-y-8">
                {/* Solution 1 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          01
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Surveillance par agent de sécurité statique
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        La présence d&apos;un agent de sécurité sur site
                        constitue la solution la plus dissuasive
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Présence continue ou selon planning défini
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle des accès et vérification des identités
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Surveillance des zones de stockage de matériaux
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Intervention immédiate en cas d&apos;intrusion
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaShieldAlt className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Protection maximale
                        </h4>
                        <p className="text-white/70 text-sm">
                          Dissuasion optimale grâce à une présence physique
                          permanente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution 2 */}
                <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          02
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Rondes mobiles de jour comme de nuit
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        Pour les chantiers étendus ou multiples, les rondes
                        mobiles offrent une couverture optimale
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Passages réguliers selon un planning aléatoire
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Vérification de l&apos;intégrité des clôtures et accès
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle de l&apos;éclairage et des dispositifs de
                          sécurité
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Coordination avec les forces de l&apos;ordre si
                          nécessaire
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaEye className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Surveillance étendue
                        </h4>
                        <p className="text-white/70 text-sm">
                          Couverture optimale pour les grands chantiers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution 3 */}
                <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-500 text-black font-bold text-lg px-4 py-2 rounded-full mr-4">
                          03
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          Contrôle des accès
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-lg">
                        La gestion rigoureuse des entrées et sorties est
                        cruciale
                      </p>
                      <ul className="space-y-2 text-white/70">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Filtrage des ouvriers, sous-traitants et visiteurs
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Vérification des autorisations et badges d&apos;accès
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Contrôle des véhicules entrants et sortants
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-yellow-400 mr-3" />
                          Tenue d&apos;un registre des présences
                        </li>
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30">
                        <FaTools className="text-yellow-400 text-4xl mb-4" />
                        <h4 className="text-white font-bold mb-2">
                          Accès maîtrisé
                        </h4>
                        <p className="text-white/70 text-sm">
                          Contrôle strict des entrées et sorties
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise BTP */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-yellow-500/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Une expertise adaptée au{" "}
                  <span className="text-yellow-400">secteur du BTP</span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  SAR Security travaille en étroite collaboration avec des
                  entreprises de construction locales
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Connaissance du secteur
                  </h3>
                  <p className="text-white/70 text-sm">
                    Nos agents comprennent les spécificités du BTP
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEye className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Intervention discrète
                  </h3>
                  <p className="text-white/70 text-sm">
                    Adaptation au rythme du chantier
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaTools className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Respect des règles
                  </h3>
                  <p className="text-white/70 text-sm">
                    Formation aux règles de sécurité des chantiers
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaClock className="text-yellow-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Flexibilité
                  </h3>
                  <p className="text-white/70 text-sm">
                    Adaptation des horaires selon l&apos;évolution
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Contactez-nous pour sécuriser votre chantier
              </h3>
              <p className="text-black/80 mb-6 text-lg max-w-2xl mx-auto">
                Nos experts en sécurité de chantier sont à votre disposition
                pour établir un plan de protection adapté à vos besoins
                spécifiques.
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

            {/* Navigation vers d'autres articles */}
            <div className="mt-16 pt-8 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Articles similaires
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/blog/surveillance-commerces"
                  className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-yellow-500/50"
                >
                  <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 mb-2 transition-colors">
                    Prévention des vols dans les commerces
                  </h4>
                  <p className="text-white/70 text-sm">
                    Stratégies efficaces pour protéger votre commerce
                  </p>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
