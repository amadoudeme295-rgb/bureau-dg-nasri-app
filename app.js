const NASRI_URL =
  "https://bhkmjzutiifhssmbbrul.supabase.co/functions/v1/nasri";

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

if (chatForm && chatInput && chatMessages) {
  chatForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const message = chatInput.value.trim();

    if (!message) return;

    // Afficher le message du PDG
    const userMessage = document.createElement("div");
    userMessage.className = "message pdg";
    userMessage.textContent = "PDG : " + message;
    chatMessages.appendChild(userMessage);

    chatInput.value = "";

    // Afficher l'indicateur de réflexion
    const loadingMessage = document.createElement("div");
    loadingMessage.className = "message nasri";
    loadingMessage.textContent = "Nasri réfléchit…";
    chatMessages.appendChild(loadingMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await fetch(NASRI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur du serveur.");
      }

      loadingMessage.textContent =
        data.reply || "Nasri n'a pas retourné de réponse.";

    } catch (error) {
      loadingMessage.textContent =
        "Erreur : impossible de contacter le Bureau de Nasri.";

      console.error(error);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}
