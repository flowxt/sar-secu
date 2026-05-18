export default async function sitemap() {
  const baseUrl = "https://sar-security.ch";
  const currentDate = new Date();

  const blogSlugs = [
    "histoires-syndics-coproprietes-geneve",
    "immersion-24h-agent-immeuble",
    "syndic-immeuble-securite",
    "surveillance-immeubles-geneve",
    "conciergerie-securisee-coproprietes",
    "securite-parkings-immeubles",
    "securite-fetes-noel",
    "securite-manifestations-geneve",
    "garde-villa-geneve",
    "service-ordre-fete-nationale",
    "agents-securite-competences",
    "videosurveillance-entreprise",
    "securite-incendie",
    "controle-acces",
    "accueil-securise",
    "securite-chantiers",
    "protection-rapprochee",
    "surveillance-commerces",
    "securite-evenementielle",
  ];

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bodyguard`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return routes;
}
