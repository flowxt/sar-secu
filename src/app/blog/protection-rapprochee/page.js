import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

export default function ProtectionRapprocheeArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] pt-32 pb-16 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/garde-corps2.png"
            alt="Protection rapprochée"
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
              Protection rapprochée : quand faire appel à un bodyguard ?
            </h1>
            <div className="flex items-center text-yellow-500/80 mb-8">
              <FaCalendarAlt className="mr-2" />
              <span>2 mars 2024</span>
              <span className="mx-3">•</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                Bodyguard
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
                Dans un monde où les menaces pour la sécurité personnelle
                peuvent provenir de différentes sources, les services de
                protection rapprochée sont devenus une nécessité pour de
                nombreuses personnes. Mais quand exactement devriez-vous
                envisager d&apos;engager un bodyguard professionnel ?
              </p>

              <h2>Qui a besoin d&apos;un service de protection rapprochée ?</h2>

              <p>
                Contrairement à l&apos;idée reçue, les services de protection
                rapprochée ne sont pas réservés aux célébrités ou aux
                personnalités politiques. De nombreuses situations peuvent
                justifier le recours à un bodyguard professionnel :
              </p>

              <ul>
                <li>
                  <strong>Dirigeants d&apos;entreprises</strong> - Les cadres
                  supérieurs et PDG peuvent être la cible de menaces en raison
                  de leur position ou des décisions impopulaires qu&apos;ils
                  doivent parfois prendre.
                </li>
                <li>
                  <strong>Personnalités publiques</strong> - Célébrités,
                  influenceurs et figures médiatiques qui attirent
                  l&apos;attention du public.
                </li>
                <li>
                  <strong>Personnes fortunées</strong> - Les individus à forte
                  valeur nette peuvent être ciblés pour des tentatives
                  d&apos;extorsion ou d&apos;enlèvement.
                </li>
                <li>
                  <strong>Personnes menacées</strong> - Individus recevant des
                  menaces spécifiques ou impliqués dans des litiges à haut
                  risque.
                </li>
                <li>
                  <strong>Témoins judiciaires</strong> - Personnes témoignant
                  dans des affaires sensibles.
                </li>
                <li>
                  <strong>Personnalités en déplacement</strong> - Voyageurs se
                  rendant dans des zones à risque ou peu familières.
                </li>
              </ul>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/garde-corps2.png"
                  alt="Agent de protection rapprochée en action"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>
                Signes indiquant que vous pourriez avoir besoin d&apos;un
                bodyguard
              </h2>

              <p>
                Plusieurs indicateurs peuvent suggérer qu&apos;il est temps de
                considérer sérieusement l&apos;embauche d&apos;un professionnel
                de la protection rapprochée :
              </p>

              <ol>
                <li>
                  <strong>Menaces directes</strong> - Vous avez reçu des menaces
                  explicites contre vous ou votre famille.
                </li>
                <li>
                  <strong>Notoriété accrue</strong> - Votre profil public a
                  récemment augmenté de manière significative.
                </li>
                <li>
                  <strong>Incidents de harcèlement</strong> - Vous êtes
                  confronté à des comportements de harcèlement ou de traque.
                </li>
                <li>
                  <strong>Transport de valeurs</strong> - Vous transportez
                  régulièrement des objets de grande valeur.
                </li>
                <li>
                  <strong>Voyage dans des zones à risque</strong> - Vous
                  prévoyez de vous rendre dans des régions instables ou
                  dangereuses.
                </li>
                <li>
                  <strong>Événements à haute visibilité</strong> - Vous
                  participez à des événements publics où votre sécurité pourrait
                  être compromise.
                </li>
              </ol>

              <h2>Comment choisir le bon service de protection rapprochée</h2>

              <p>
                La sélection d&apos;un service de bodyguard adapté à vos besoins
                spécifiques est cruciale :
              </p>

              <ul>
                <li>
                  <strong>Vérifiez les certifications</strong> - Assurez-vous
                  que les agents sont correctement formés et certifiés dans le
                  domaine de la protection rapprochée.
                </li>
                <li>
                  <strong>Expérience antérieure</strong> - Recherchez une agence
                  avec une expérience prouvée dans des situations similaires à
                  la vôtre.
                </li>
                <li>
                  <strong>Discrétion</strong> - La capacité à assurer votre
                  protection sans attirer l&apos;attention est souvent
                  essentielle.
                </li>
                <li>
                  <strong>Évaluation des risques</strong> - Une bonne agence
                  commencera par une analyse complète de votre situation et des
                  menaces potentielles.
                </li>
                <li>
                  <strong>Adaptabilité</strong> - Votre service de protection
                  doit être personnalisé selon vos besoins spécifiques et votre
                  style de vie.
                </li>
              </ul>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/guard2.png"
                  alt="Agent de sécurité professionnel"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Les avantages d&apos;une protection professionnelle</h2>

              <p>
                Au-delà de la sécurité physique immédiate, un service de
                protection rapprochée professionnel offre de nombreux avantages
                :
              </p>

              <ul>
                <li>
                  <strong>Tranquillité d&apos;esprit</strong> - Vous pouvez vous
                  concentrer sur vos activités sans vous préoccuper constamment
                  de votre sécurité.
                </li>
                <li>
                  <strong>Prévention</strong> - Les bodyguards sont formés pour
                  identifier et neutraliser les menaces avant qu&apos;elles ne
                  se concrétisent.
                </li>
                <li>
                  <strong>Gestion de crise</strong> - En cas d&apos;incident,
                  vous bénéficiez d&apos;une réponse immédiate et
                  professionnelle.
                </li>
                <li>
                  <strong>Assistance logistique</strong> - Au-delà de la
                  protection, ils peuvent faciliter vos déplacements et votre
                  organisation quotidienne.
                </li>
                <li>
                  <strong>Confidentialité</strong> - Vos informations
                  personnelles restent protégées.
                </li>
              </ul>

              <h2>Conclusion</h2>

              <p>
                La décision de faire appel à un service de protection rapprochée
                ne doit pas être prise à la légère, mais ne devrait pas non plus
                être reportée jusqu&apos;à ce qu&apos;un incident se produise.
                Une évaluation professionnelle de votre situation vous aidera à
                déterminer le niveau de protection dont vous avez réellement
                besoin.
              </p>

              <p>
                Chez SAR Security, nous proposons des services de protection
                rapprochée personnalisés, discrets et hautement professionnels.
                Notre équipe d&apos;agents expérimentés est formée pour assurer
                votre sécurité tout en respectant votre vie privée et votre
                style de vie.
              </p>

              <div className="bg-slate-900 p-6 rounded-lg border-l-4 border-yellow-500 mt-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  Besoin d&apos;une consultation personnalisée ?
                </h3>
                <p className="text-white/80 mb-4">
                  Nos experts en sécurité sont disponibles pour évaluer vos
                  besoins spécifiques et vous proposer une solution adaptée.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Nous contacter
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
