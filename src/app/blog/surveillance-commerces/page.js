import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaArrowLeft,
  FaShieldAlt,
  FaStore,
  FaUserShield,
  FaEye,
} from "react-icons/fa";

export default function SurveillanceCommercesArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] pt-32 pb-16 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bijouterie.png"
            alt="Surveillance de commerces"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>

        {/* Overlay foncé */}
        <div className="absolute inset-0 bg-black/60 z-1"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Retour aux articles
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prévention des vols dans les commerces : conseils d&apos;experts
            </h1>
            <div className="flex items-center text-yellow-500/80 mb-8">
              <FaCalendarAlt className="mr-2" />
              <span>18 février 2024</span>
              <span className="mx-3">•</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                Protection commerciale
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert prose-yellow mx-auto">
              <p>
                Le vol à l&apos;étalage et les cambriolages représentent un défi
                majeur pour les commerces de toutes tailles. Selon les
                statistiques récentes, ces incidents peuvent engendrer des
                pertes financières considérables et affecter la sécurité du
                personnel et des clients. Dans cet article, nous partageons des
                stratégies éprouvées pour protéger efficacement votre commerce.
              </p>

              <h2>L&apos;ampleur du problème</h2>

              <p>
                Les vols dans les commerces peuvent prendre différentes formes
                et avoir des impacts significatifs :
              </p>

              <ul>
                <li>
                  Pertes financières directes liées aux marchandises volées
                </li>
                <li>Coûts additionnels pour renforcer la sécurité</li>
                <li>Impact sur le moral et la sécurité du personnel</li>
                <li>Perturbation des opérations commerciales quotidiennes</li>
                <li>
                  Atteinte potentielle à la réputation de l&apos;établissement
                </li>
              </ul>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/bijou2.png"
                  alt="Protection de bijouterie"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Stratégies de prévention efficaces</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center mb-3">
                    <FaStore className="text-yellow-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">
                      Aménagement du magasin
                    </h3>
                  </div>
                  <ul className="text-white/80 space-y-2">
                    <li>Optimiser la visibilité dans tout l&apos;espace</li>
                    <li>Éviter les zones d&apos;angle mort</li>
                    <li>Installer des miroirs de surveillance stratégiques</li>
                    <li>Limiter les issues et contrôler les accès</li>
                  </ul>
                </div>

                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center mb-3">
                    <FaEye className="text-yellow-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">
                      Systèmes de surveillance
                    </h3>
                  </div>
                  <ul className="text-white/80 space-y-2">
                    <li>Caméras de sécurité visibles et discrètes</li>
                    <li>Systèmes d&apos;alarme modernes</li>
                    <li>Dispositifs antivol sur les produits</li>
                    <li>Affichage clair des mesures de sécurité</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center mb-3">
                    <FaUserShield className="text-yellow-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">
                      Formation du personnel
                    </h3>
                  </div>
                  <ul className="text-white/80 space-y-2">
                    <li>Identifier les comportements suspects</li>
                    <li>Protocoles d&apos;accueil des clients</li>
                    <li>Procédures en cas de vol ou d&apos;agression</li>
                    <li>Techniques de service client préventives</li>
                  </ul>
                </div>

                <div className="bg-slate-900 p-5 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center mb-3">
                    <FaShieldAlt className="text-yellow-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">
                      Agents de sécurité
                    </h3>
                  </div>
                  <ul className="text-white/80 space-y-2">
                    <li>Présence visible ou discrète selon les besoins</li>
                    <li>Agents formés aux spécificités du commerce</li>
                    <li>Rondes régulières et surveillance ciblée</li>
                    <li>Intervention professionnelle en cas d&apos;incident</li>
                  </ul>
                </div>
              </div>

              <h2>Adaptation à votre type de commerce</h2>

              <p>
                Les mesures de sécurité doivent être adaptées à la nature
                spécifique de votre commerce :
              </p>

              <h3>Bijouteries et commerces de luxe</h3>
              <p>
                Les commerces proposant des articles de grande valeur
                nécessitent des mesures de sécurité renforcées :
              </p>
              <ul>
                <li>Vitrines sécurisées et résistantes aux chocs</li>
                <li>Contrôle d&apos;accès avec sas d&apos;entrée</li>
                <li>Présence d&apos;agents de sécurité spécialisés</li>
                <li>Procédures strictes pour la présentation des articles</li>
                <li>Coffres-forts sécurisés pour le stockage</li>
              </ul>

              <h3>Grandes surfaces et supermarchés</h3>
              <p>Pour les commerces à fort trafic et grande surface :</p>
              <ul>
                <li>Système de vidéosurveillance complet</li>
                <li>Portiques antivol aux entrées/sorties</li>
                <li>Agents de sécurité en civil et en uniforme</li>
                <li>
                  Protection spécifique des zones à risque (alcools,
                  électronique)
                </li>
                <li>Contrôle des caisses et des sorties de secours</li>
              </ul>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/bijou2.png"
                  alt="Surveillance de grande surface"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>L&apos;importance d&apos;une approche intégrée</h2>

              <p>
                Une stratégie de sécurité efficace combine plusieurs éléments :
              </p>

              <ol>
                <li>
                  <strong>Évaluation des risques</strong> - Analyser les
                  vulnérabilités spécifiques de votre commerce.
                </li>
                <li>
                  <strong>Plan de sécurité personnalisé</strong> - Développer
                  une stratégie adaptée à vos besoins.
                </li>
                <li>
                  <strong>Mise en œuvre progressive</strong> - Implémenter les
                  mesures par ordre de priorité.
                </li>
                <li>
                  <strong>Formation continue</strong> - Maintenir la vigilance
                  de votre personnel.
                </li>
                <li>
                  <strong>Évaluation et ajustement</strong> - Réviser
                  régulièrement l&apos;efficacité des mesures.
                </li>
              </ol>

              <h2>L&apos;apport des professionnels de la sécurité</h2>

              <p>
                Si les mesures internes sont essentielles, l&apos;expertise
                d&apos;une agence de sécurité professionnelle peut faire une
                différence significative :
              </p>

              <ul>
                <li>Analyse professionnelle des risques et vulnérabilités</li>
                <li>
                  Agents formés spécifiquement pour le contexte commercial
                </li>
                <li>Intervention rapide et efficace en cas d&apos;incident</li>
                <li>Effet dissuasif de la présence professionnelle</li>
                <li>
                  Coordination avec les forces de l&apos;ordre en cas de besoin
                </li>
                <li>Adaptabilité aux périodes à risque (soldes, fêtes)</li>
              </ul>

              <h2>Conclusion</h2>

              <p>
                La prévention des vols dans les commerces requiert une approche
                stratégique et multidimensionnelle. En combinant un aménagement
                réfléchi, des systèmes de surveillance adaptés, une formation du
                personnel et potentiellement le recours à des agents de sécurité
                professionnels, vous créez un environnement sécurisé pour vos
                marchandises, votre personnel et vos clients.
              </p>

              <p>
                Chez SAR Security, nous comprenons les défis spécifiques
                auxquels font face les commerçants. Notre équipe de
                professionnels peut vous accompagner dans l&apos;élaboration et
                la mise en œuvre d&apos;une stratégie de sécurité sur mesure
                pour votre établissement.
              </p>

              <div className="bg-slate-900 p-6 rounded-lg border-l-4 border-yellow-500 mt-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  Besoin d&apos;une protection sur mesure pour votre commerce ?
                </h3>
                <p className="text-white/80 mb-4">
                  Nos spécialistes peuvent évaluer vos besoins spécifiques et
                  vous proposer une solution adaptée à votre établissement et
                  votre budget.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-800 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <FaArrowLeft className="mr-2" />
                Retour à tous les articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
