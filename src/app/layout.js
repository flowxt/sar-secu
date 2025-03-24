import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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
  title: "SAR Security | Société de sécurité privée à Genève",
  description:
    "SAR Security est une société de sécurité polyvalente et dynamique basée à Genève en Suisse. Surveillance, garde rapprochée, protection des biens et des personnes.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
