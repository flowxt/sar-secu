import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaTags, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Blog Sécurité | Conseils et Actualités | SAR Security Genève",
  description:
    "Articles, conseils et actualités sur la sécurité privée à Genève. Protection des biens et des personnes, sécurité événementielle, bodyguard.",
  alternates: {
    canonical: "https://sar-security.ch/blog",
  },
};

// Articles de blog statiques
const blogPosts = [
  {
    id: "securite-fetes-noel",
    title: "Sécurité pendant les fêtes de Noël : célébrer en toute sérénité",
    excerpt:
      "Conseils et services de sécurité pour les fêtes de Noël à Genève. Protection des biens, surveillance d'événements festifs et tranquillité pendant les célébrations.",
    date: "15 décembre 2025",
    category: "Sécurité festive",
    image: "/images/noel.jpg",
    slug: "securite-fetes-noel",
  },
  {
    id: "securite-manifestations-geneve",
    title: "Sécurité des manifestations à Genève : service d'ordre professionnel",
    excerpt:
      "Services de sécurité pour manifestations et rassemblements à Genève. Gestion des foules, service d'ordre discret et protection des participants.",
    date: "10 novembre 2025",
    category: "Service d'ordre",
    image: "/images/manif.png",
    slug: "securite-manifestations-geneve",
  },
  {
    id: "garde-villa-geneve",
    title: "Garde de villa à Genève : sérénité et protection de votre résidence",
    excerpt:
      "Services de garde de villa professionnels à Genève. Protection discrète de votre résidence, surveillance personnalisée et tranquillité d'esprit lors de vos absences.",
    date: "29 août 2025",
    category: "Surveillance résidentielle",
    image: "/images/villa.jpg",
    slug: "garde-villa-geneve",
  },
  {
    id: "service-ordre-fete-nationale",
    title:
      "Service d'ordre pour la fête nationale suisse : sécurité du feu d'artifice",
    excerpt:
      "Découvrez comment assurer la sécurité lors des festivités du 1er août en Suisse. Gestion des foules, protection du feu d'artifice et service d'ordre professionnel.",
    date: "2 août 2025",
    category: "Événementiel & Service d'ordre",
    image: "/images/fete-suisse.png",
    slug: "service-ordre-fete-nationale",
  },
  {
    id: "agents-securite-competences",
    title: "Agents de sécurité : quelles compétences pour quelles missions ?",
    excerpt:
      "Focus sur les différentes missions des agents de sécurité et les compétences essentielles à chaque type de mission. L'expertise au service de votre sécurité.",
    date: "23 juillet 2025",
    category: "Recrutement & ressources humaines",
    image: "/images/formation-agent.png",
    slug: "agents-securite-competences",
  },
  {
    id: "videosurveillance-entreprise",
    title:
      "Vidéosurveillance en entreprise : un outil de dissuasion et d'analyse",
    excerpt:
      "Découvrez comment les systèmes de vidéosurveillance modernes permettent non seulement de dissuader les intrusions, mais aussi d'analyser les comportements.",
    date: "4 juillet 2025",
    category: "Technologie & surveillance",
    image: "/images/video-surveillance.png",
    slug: "videosurveillance-entreprise",
  },
  {
    id: "securite-incendie",
    title:
      "Sécurité incendie : obligations et bonnes pratiques pour les entreprises",
    excerpt:
      "Quelles sont les obligations légales en Suisse concernant la sécurité incendie ? Extincteurs, alarmes, évacuations : un guide complet pour se mettre en conformité.",
    date: "20 juin 2025",
    category: "Prévention & réglementation",
    image: "/images/securite-incendie.png",
    slug: "securite-incendie",
  },
  {
    id: "controle-acces",
    title:
      "Sécuriser les accès : contrôle d'accès, badges et technologies connectées",
    excerpt:
      "Tour d'horizon des solutions de contrôle d'accès modernes : badges, QR codes, biométrie… et comment elles s'intègrent dans une stratégie de sécurité globale.",
    date: "3 juin 2025",
    category: "Sécurité électronique",
    image: "/images/controle-acces.png",
    slug: "controle-acces",
  },
  {
    id: "accueil-securise",
    title:
      "Accueil sécurisé en entreprise : allier sécurité et image professionnelle",
    excerpt:
      "L'accueil sécurisé permet de concilier sécurité et hospitalité. Nos agents polyvalents valorisent votre image tout en protégeant vos locaux.",
    date: "30 mai 2025",
    category: "Accueil sécurisé",
    image: "/images/agent2.webp",
    slug: "accueil-securise",
  },
  {
    id: "securite-chantiers",
    title:
      "Sécurité sur les chantiers à Genève : prévenir les intrusions et les vols de matériel",
    excerpt:
      "Les chantiers de construction sont des cibles privilégiées pour les intrusions et vols. Découvrez nos solutions adaptées au secteur BTP.",
    date: "15 avril 2025",
    category: "Sécurité de chantier",
    image: "/images/chantier.png",
    slug: "securite-chantiers",
  },
  {
    id: "protection-rapprochee",
    title: "Protection rapprochée : quand faire appel à un bodyguard ?",
    excerpt:
      "Situations à risque, menaces spécifiques, événements sensibles... Découvrez dans quels cas la protection rapprochée s&apos;avère indispensable.",
    date: "15 novembre 2024",
    category: "Protection rapprochée",
    image: "/images/garde-corps.png",
    slug: "protection-rapprochee",
  },
  {
    id: "surveillance-commerces",
    title: "Prévention des vols dans les commerces : stratégies efficaces",
    excerpt:
      "Comment protéger efficacement votre commerce contre les vols et intrusions. Solutions humaines et technologiques adaptées.",
    date: "20 octobre 2024",
    category: "Commerce & retail",
    image: "/images/bijouterie.png",
    slug: "surveillance-commerces",
  },
  {
    id: "securite-evenementielle",
    title: "Sécurité événementielle à Genève : enjeux et solutions",
    excerpt:
      "Organisation d&apos;événements publics ou privés : découvrez les enjeux sécuritaires et nos solutions sur mesure.",
    date: "10 septembre 2024",
    category: "Événementiel",
    image: "/images/event.png",
    slug: "securite-evenementielle",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog <span className="text-yellow-500">Sécurité</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Conseils d&apos;experts, actualités et analyses sur la sécurité
              privée à Genève. Protégez efficacement vos biens et vos proches.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-slate-900 rounded-lg overflow-hidden hover:bg-slate-800 transition-colors group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-white/60 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>{post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-white/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
                  >
                    Lire l&apos;article
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Besoin de conseils personnalisés ?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Nos experts en sécurité sont à votre disposition pour analyser vos
              besoins spécifiques et vous proposer des solutions adaptées.
            </p>
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Demander un conseil d&apos;expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
