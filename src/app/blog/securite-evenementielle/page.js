import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft } from "react-icons/fa";

export default function SecuriteEvenementielleArticle() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] pt-32 pb-16 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent2.webp"
            alt="Sécurité événementielle à Genève"
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

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              La sécurité événementielle à Genève : enjeux et solutions
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-white/70 mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-yellow-500" />
                <span>15 mars 2024</span>
              </div>
              <div className="flex items-center">
                <FaUser className="mr-2 text-yellow-500" />
                <span>Par SAR Security</span>
              </div>
              <div className="flex items-center">
                <FaTags className="mr-2 text-yellow-500" />
                <span>Événementiel, Sécurité, Genève</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert prose-yellow mx-auto">
              <p className="lead text-xl text-white/90">
                Organiser un événement, qu&apos;il s&apos;agisse d&apos;une
                conférence professionnelle, d&apos;un gala ou d&apos;un
                festival, requiert une planification minutieuse de la sécurité.
                À Genève, ville internationale accueillant de nombreuses
                manifestations prestigieuses, les standards de sécurité
                événementielle sont particulièrement élevés.
              </p>

              <h2>
                Les défis spécifiques de la sécurité événementielle à Genève
              </h2>

              <p>
                La sécurité événementielle à Genève présente des
                caractéristiques uniques qui nécessitent une approche
                spécialisée :
              </p>

              <ul>
                <li>
                  <strong>Diversité des événements</strong> : Des conférences
                  internationales aux événements privés de luxe, en passant par
                  les manifestations culturelles, chaque type d&apos;événement
                  requiert un dispositif adapté.
                </li>
                <li>
                  <strong>Clientèle internationale</strong> : La présence
                  fréquente de personnalités et délégations étrangères impose
                  des niveaux de sécurité accrus.
                </li>
                <li>
                  <strong>Coordination avec les autorités</strong> : La
                  collaboration avec les services officiels genevois est souvent
                  nécessaire pour des événements d&apos;envergure.
                </li>
                <li>
                  <strong>Discrétion</strong> : La sécurité doit être efficace
                  tout en restant discrète pour préserver l&apos;atmosphère de
                  l&apos;événement.
                </li>
              </ul>

              <div className="my-8 relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/securite.webp"
                  alt="Équipe de sécurité événementielle en action"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Les services de sécurité événementielle essentiels</h2>

              <p>
                Pour assurer la sécurité optimale d&apos;un événement à Genève,
                plusieurs services complémentaires peuvent être déployés :
              </p>

              <h3>1. Contrôle d&apos;accès et filtrage</h3>

              <p>
                Le contrôle des entrées constitue la première ligne de défense
                de tout événement. Il comprend :
              </p>

              <ul>
                <li>Vérification des invitations et accréditations</li>
                <li>Contrôle des sacs et objets personnels</li>
                <li>Détection de matériel interdit ou dangereux</li>
                <li>
                  Gestion des files d&apos;attente et orientation des visiteurs
                </li>
              </ul>

              <h3>2. Surveillance générale</h3>

              <p>
                La surveillance continue du site permet d&apos;identifier et
                d&apos;anticiper les situations problématiques :
              </p>

              <ul>
                <li>
                  Agents en tenue ou en civil selon le type d&apos;événement
                </li>
                <li>Patrouilles régulières dans les zones sensibles</li>
                <li>Surveillance des espaces techniques et réserves</li>
                <li>Monitoring des entrées/sorties de secours</li>
              </ul>

              <h3>3. Protection des VIP</h3>

              <p>
                Pour les événements accueillant des personnalités, un service de
                protection rapprochée peut être nécessaire :
              </p>

              <ul>
                <li>Escorte depuis l&apos;arrivée jusqu&apos;au départ</li>
                <li>
                  Sécurisation des déplacements à l&apos;intérieur du site
                </li>
                <li>
                  Coordination avec les services de sécurité personnels des VIP
                </li>
                <li>Gestion des interactions avec le public</li>
              </ul>

              <h3>4. Gestion de crise</h3>

              <p>
                La préparation aux situations d&apos;urgence est indispensable :
              </p>

              <ul>
                <li>Définition des procédures d&apos;évacuation</li>
                <li>Formation du personnel aux premiers secours</li>
                <li>Coordination avec les services d&apos;urgence locaux</li>
                <li>
                  Mise en place d&apos;un poste de commandement centralisé
                </li>
              </ul>

              <h2>
                Comment choisir son prestataire de sécurité événementielle
              </h2>

              <p>
                La sélection d&apos;un partenaire de sécurité événementielle à
                Genève doit se faire selon plusieurs critères essentiels :
              </p>

              <ul>
                <li>
                  <strong>Expertise locale</strong> : Connaissance des
                  spécificités genevoises et des réglementations en vigueur
                </li>
                <li>
                  <strong>Qualification du personnel</strong> : Agents formés,
                  certifiés et expérimentés dans la sécurité événementielle
                </li>
                <li>
                  <strong>Références</strong> : Expérience démontrée sur des
                  événements similaires au vôtre
                </li>
                <li>
                  <strong>Capacité d&apos;adaptation</strong> : Flexibilité pour
                  répondre aux imprévus et aux changements de dernière minute
                </li>
                <li>
                  <strong>Discrétion</strong> : Capacité à assurer la sécurité
                  sans nuire à l&apos;expérience des participants
                </li>
              </ul>

              <h2>L&apos;approche SAR Security pour vos événements</h2>

              <p>
                Chez SAR Security, nous proposons une méthodologie éprouvée pour
                la sécurisation de vos événements à Genève :
              </p>

              <ol>
                <li>
                  <strong>Analyse préliminaire</strong> : Évaluation des risques
                  spécifiques à votre événement
                </li>
                <li>
                  <strong>Plan de sécurité personnalisé</strong> : Élaboration
                  d&apos;une stratégie adaptée à vos besoins
                </li>
                <li>
                  <strong>Sélection des agents</strong> : Attribution
                  d&apos;agents qualifiés selon les exigences de votre événement
                </li>
                <li>
                  <strong>Coordination</strong> : Liaison avec les autorités et
                  services d&apos;urgence si nécessaire
                </li>
                <li>
                  <strong>Briefing complet</strong> : Formation spécifique de
                  notre équipe aux particularités de votre événement
                </li>
                <li>
                  <strong>Supervision</strong> : Présence d&apos;un responsable
                  expérimenté durant toute la manifestation
                </li>
                <li>
                  <strong>Débriefing</strong> : Analyse post-événement pour
                  amélioration continue
                </li>
              </ol>

              <p>
                Notre approche discrète mais efficace garantit que vos invités
                se sentent en sécurité sans être importunés par des mesures trop
                visibles ou intrusives.
              </p>

              <h2>Conclusion</h2>

              <p>
                La sécurité événementielle à Genève exige professionnalisme,
                expertise locale et adaptabilité. Qu&apos;il s&apos;agisse
                d&apos;une conférence internationale, d&apos;un gala de charité
                ou d&apos;un événement d&apos;entreprise, la tranquillité
                d&apos;esprit des organisateurs et le confort des participants
                dépendent largement de la qualité du dispositif de sécurité mis
                en place.
              </p>

              <p>
                Chez SAR Security, nous comprenons que chaque événement est
                unique et mérite une attention particulière. Notre équipe est
                prête à vous accompagner dans la conception et la mise en œuvre
                d&apos;un plan de sécurité sur mesure qui répondra parfaitement
                à vos besoins.
              </p>
            </article>

            {/* Author Info */}
            <div className="mt-16 p-8 bg-slate-900 rounded-lg border-l-4 border-yellow-500">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 relative rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/logo-sans-fond.png"
                    alt="SAR Security"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    SAR Security
                  </h3>
                  <p className="text-white/70 mb-4">
                    Société de sécurité privée à Genève spécialisée dans la
                    protection des biens et des personnes. Notre équipe
                    d&apos;experts assure des prestations de haute qualité
                    adaptées à vos besoins spécifiques.
                  </p>
                  <Link
                    href="/contact"
                    className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
                  >
                    Contacter notre équipe
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin d&apos;un service de sécurité pour votre événement ?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour étudier votre projet
                et vous proposer une solution adaptée à vos besoins spécifiques.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-4 rounded-md transition-colors"
              >
                Demander un devis gratuit
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Articles similaires
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/blog/protection-rapprochee" className="group">
                  <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <div className="relative h-48">
                      <Image
                        src="/images/agent4.png"
                        alt="Protection rapprochée"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                        Protection rapprochée : quand faire appel à un bodyguard
                        ?
                      </h4>
                      <p className="text-white/70 text-sm mb-3">
                        Les situations qui nécessitent l&apos;intervention
                        d&apos;un agent de protection rapprochée et comment
                        choisir le bon service.
                      </p>
                      <div className="text-yellow-500 text-sm">
                        Lire l&apos;article
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/surveillance-commerces" className="group">
                  <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <div className="relative h-48">
                      <Image
                        src="/images/securite.webp"
                        alt="Surveillance de commerces"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                        Prévention des vols dans les commerces : conseils
                        d&apos;experts
                      </h4>
                      <p className="text-white/70 text-sm mb-3">
                        Stratégies et mesures efficaces pour protéger votre
                        commerce contre les vols et les incivilités.
                      </p>
                      <div className="text-yellow-500 text-sm">
                        Lire l&apos;article
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
