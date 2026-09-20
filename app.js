const bureau = {
    nom: "Bureau du DG Nasri",
    pdg: "Amadou DEME",
    missions: []
};

// --- GESTION DES MISSIONS ---
const boutonMission = document.getElementById("new-mission");
const formulaireMission = document.getElementById("mission-form");
const listeMissions = document.getElementById("missions-list");

if (boutonMission && formulaireMission) {
    boutonMission.addEventListener("click", function () {
        formulaireMission.hidden = !formulaireMission.hidden;
    });
}

if (formulaireMission) {
    formulaireMission.addEventListener("submit", function (event) {
        event.preventDefault();

        const titre = document.getElementById("mission-title").value;
        const statut = document.getElementById("mission-status").value;

        bureau.missions.push({
            titre: titre,
            statut: statut
        });

        afficherMissions();

        formulaireMission.reset();
        formulaireMission.hidden = true;
    });
}

function afficherMissions() {
    if (!listeMissions) return;
    listeMissions.innerHTML = "";

    bureau.missions.forEach(function (mission) {
        const element = document.createElement("div");
        element.className = "mission";
        element.innerHTML = `
            <strong>${mission.titre}</strong>
            <span>État : ${mission.statut}</span>
        `;
        listeMissions.appendChild(element);
    });
}

// --- GESTION DU CHAT (PDG -> NASRI) ---
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

if (chatForm) {
    chatForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la page de se recharger

        const message = chatInput.value.trim();

        if (message === "") {
            return;
        }

        // 1. Affichage du message du PDG
        const messageElement = document.createElement("div");
        messageElement.className = "message pdg";
        messageElement.textContent = `PDG: ${message}`;
        chatMessages.appendChild(messageElement);

        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 2. Réponse automatique de Nasri après 1 seconde
        setTimeout(function () {
            const nasriElement = document.createElement("div");
            nasriElement.className = "message nasri";
            nasriElement.textContent = `Nasri: Bien reçu PDG. Je traite votre demande: "${message}"`;
            chatMessages.appendChild(nasriElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    });
}
