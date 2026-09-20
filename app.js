// Remplacez la partie écouteur du formulaire de chat dans app.js par ceci :

if (chatForm) {
    chatForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const message = chatInput.value.trim();
        if (message === "") return;

        // 1. Affichage du message du PDG
        const messageElement = document.createElement("div");
        messageElement.className = "message pdg";
        messageElement.textContent = `PDG: ${message}`;
        chatMessages.appendChild(messageElement);

        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 2. Indicateur de réflexion de Nasri
        const loadingElement = document.createElement("div");
        loadingElement.className = "message nasri";
        loadingElement.textContent = "Nasri réfléchi...";
        chatMessages.appendChild(loadingElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Appel à l'API OpenAI (ou modèle équivalent)
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer VOTRE_CLE_API_ICI"
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "system",
                            content: "Tu es Nasri, le Directeur Général virtuel de l'agence IA. Tu t'adresses à votre PDG Amadou DEME. Tu es professionnel, structuré et proactif."
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ]
                })
            });

            const data = await response.json();
            const reponseIA = data.choices[0].message.content;

            // Remplacer l'indicateur par la réponse réelle
            loadingElement.textContent = `Nasri: ${reponseIA}`;

        } catch (error) {
            loadingElement.textContent = "Nasri: Désolé PDG, une erreur est survenue lors de la connexion à mon cerveau IA.";
            console.error("Erreur API:", error);
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
}
const SUPABASE_URL = "https://bhkmjzutiifhssmbbrul.supabase.co"; // Récupéré de votre capture précédente
const SUPABASE_KEY = "VOTRE_CLE_PUBLISHABLE_ICI"; // Collez la clé copiée à l'Étape 1
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
