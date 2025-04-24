// Script de test pour Resend
require("dotenv").config({ path: ".env.local" });
const { Resend } = require("resend");

// Fonction principale asynchrone pour pouvoir utiliser await
async function testResend() {
  console.log("Test d'envoi d'email via Resend");
  console.log(
    "Clé API (partielle):",
    process.env.RESEND_API_KEY
      ? `${process.env.RESEND_API_KEY.substring(0, 5)}...`
      : "Non définie"
  );

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "❌ ERREUR: La clé API Resend n'est pas définie dans .env.local"
    );
    process.exit(1);
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    console.log("Envoi d'un email de test...");

    const data = await resend.emails.send({
      from: "SAR Security <onboarding@resend.dev>",
      to: ["sar.ribeiro79@gmail.com"],
      subject: "Test de Resend depuis script Node.js",
      html: "<h1>Test de Resend</h1><p>Ceci est un email de test envoyé depuis un script Node.js.</p>",
    });

    if (data.error) {
      throw new Error(`Erreur Resend: ${data.error.message}`);
    }

    console.log("✅ Succès! Réponse:", data);
    console.log(
      "Vérifiez votre tableau de bord Resend et votre boîte Gmail (sar.ribeiro79@gmail.com)."
    );
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi:", error);
    console.error("Message d'erreur:", error.message);
    console.error("Détails:", error.details || "Non disponible");
  }
}

// Exécuter la fonction de test
testResend();
