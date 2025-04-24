/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sar-security.ch",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500"],
  sitemapSize: 5000,
};
