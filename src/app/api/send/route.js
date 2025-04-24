import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log("=== Début de la requête d'envoi d'email ===");
  console.log(
    "API Key (partielle):",
    process.env.RESEND_API_KEY
      ? `${process.env.RESEND_API_KEY.substring(0, 5)}...`
      : "Non définie"
  );

  try {
    console.log("Parsing de la requête...");
    const { name, email, phone, subject, message, service } =
      await request.json();
    console.log("Données reçues:", {
      name,
      email,
      phone: phone || "Non fourni",
      subject: subject || "Non fourni",
      service: service || "Non fourni",
      messageLength: message?.length || 0,
    });

    // Déterminer le sujet
    const emailSubject = subject
      ? `[SAR Security] ${subject}`
      : `[SAR Security] Nouvelle demande${service ? ` - ${service}` : ""}`;
    console.log("Sujet de l'email:", emailSubject);

    // Construire le corps de l'email
    const htmlContent = `
      <h1>Nouveau message via le formulaire de contact</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
      ${service ? `<p><strong>Service concerné:</strong> ${service}</p>` : ""}
      <h2>Message:</h2>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><i>Cette demande a été envoyée depuis le formulaire de contact du site www.sar-security.ch.</i></p>
      <p><i>Pour répondre, envoyez directement un email à l'expéditeur : ${email}</i></p>
    `;

    console.log("Envoi d'email via Resend...");
    console.log("Configuration:", {
      from: "SAR Security <onboarding@resend.dev>",
      to: ["sar.ribeiro79@gmail.com"],
      replyTo: email,
      subject: emailSubject,
      htmlLength: htmlContent.length,
    });

    // Utiliser l'adresse par défaut de Resend et envoyer à l'adresse vérifiée
    const data = await resend.emails.send({
      from: "SAR Security <onboarding@resend.dev>",
      to: ["sar.ribeiro79@gmail.com"],
      reply_to: email,
      subject: emailSubject,
      html: htmlContent,
    });

    console.log("Réponse de Resend:", JSON.stringify(data));

    if (data.error) {
      throw new Error(`Erreur Resend: ${data.error.message}`);
    }

    console.log("Email envoyé avec succès!");

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    console.error("Message d'erreur:", error.message);
    console.error("Détails:", error.details || "Pas de détails disponibles");
    console.error("Stack:", error.stack);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: error.details || "Pas de détails disponibles",
      },
      { status: 500 }
    );
  } finally {
    console.log("=== Fin de la requête d'envoi d'email ===");
  }
}
