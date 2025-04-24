import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sar-security.ch"),
  title: {
    default: "SAR Security | Société de sécurité privée à Genève",
    template: "%s | SAR Security Genève",
  },
  description:
    "SAR Security est une société de sécurité polyvalente et dynamique basée à Genève en Suisse. Surveillance, garde rapprochée, protection des biens et des personnes.",
  keywords: [
    "sécurité privée",
    "garde rapprochée",
    "bodyguard",
    "surveillance",
    "sécurité Genève",
    "agent de sécurité",
    "protection rapprochée",
    "sécurité commerces",
    "surveillance villas",
  ],
  authors: [{ name: "SAR Security" }],
  creator: "SAR Security",
  publisher: "SAR Security",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "https://sar-security.ch",
    siteName: "SAR Security",
    title: "SAR Security | Société de sécurité privée à Genève",
    description:
      "Services de sécurité professionnels à Genève. Protection des biens et des personnes, garde rapprochée, surveillance et interventions.",
    images: [
      {
        url: "https://sar-security.ch/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAR Security - Services de sécurité à Genève",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAR Security | Société de sécurité privée à Genève",
    description:
      "Services de sécurité professionnels à Genève. Protection des biens et des personnes, garde rapprochée, surveillance et interventions.",
    images: ["https://sar-security.ch/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  verification: {
    google: "à-remplacer-par-votre-code-de-vérification",
  },
  category: "security",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <meta name="geo.region" content="CH-GE" />
        <meta name="geo.placename" content="Genève" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-black text-white">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SAR Security",
              description:
                "Société de sécurité privée à Genève offrant des services de garde rapprochée, surveillance de biens et protection des personnes.",
              url: "https://sar-security.ch",
              logo: "https://sar-security.ch/images/logo.png",
              image: "https://sar-security.ch/images/og-image.jpg",
              telephone: "+41 79 850 15 78",
              email: "contact@sar-security.ch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rue Butini 15",
                addressLocality: "Genève",
                postalCode: "1202",
                addressCountry: "CH",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:30",
                closes: "18:00",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "Place",
                name: "Genève et région lémanique",
              },
              serviceType: [
                "Protection rapprochée",
                "Surveillance de propriétés",
                "Sécurité commerciale",
                "Garde du corps",
                "Services événementiels",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
