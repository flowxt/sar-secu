import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";

// Liste des articles de blog (à terme, ça pourrait être généré automatiquement)
const blogPosts = [
  {
    id: "securite-evenementielle",
    title: "La sécurité événementielle à Genève : enjeux et solutions",
    excerpt:
      "Découvrez les principaux défis et les solutions modernes pour assurer la sécurité de vos événements à Genève.",
    date: "15 mars 2024",
    image: "/images/agent2.webp",
    category: "Événementiel",
  },
  {
    id: "protection-rapprochee",
    title: "Protection rapprochée : quand faire appel à un bodyguard ?",
    excerpt:
      "Les situations qui nécessitent l'intervention d'un agent de protection rapprochée et comment choisir le bon service.",
    date: "2 mars 2024",
    image: "/images/agent4.png",
    category: "Bodyguard",
  },
  {
    id: "surveillance-commerces",
    title: "Prévention des vols dans les commerces : conseils d'experts",
    excerpt:
      "Stratégies et mesures efficaces pour protéger votre commerce contre les vols et les incivilités.",
    date: "18 février 2024",
    image: "/images/securite.webp",
    category: "Protection commerciale",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[40vh] pt-32 pb-16 overflow-hidden">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agent3.png"
            alt="Blog SAR Security"
            fill
            priority
            className="object-cover brightness-[0.3]"
          />
        </div>

        {/* Overlay foncé */}
        <div className="absolute inset-0 bg-black/60 z-1"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre <span className="text-yellow-500">Blog</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Actualités, conseils et expertise dans le domaine de la sécurité
              privée
            </p>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group">
                <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:translate-y-[-5px] h-full flex flex-col">
                  <div className="relative h-60">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black font-medium py-1 px-3 text-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-yellow-500/70 mb-3">
                      <FaCalendarAlt className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/70 text-base mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-yellow-500 flex items-center font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Lire l&apos;article
                      <FaChevronRight className="ml-2" size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Si plus d'articles à venir */}
          <div className="text-center mt-16">
            <p className="text-white/60 mb-4">
              Plus d&apos;articles seront publiés prochainement
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-md transition-colors"
            >
              Proposer un sujet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
