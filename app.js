const bureau = {
  nom: "Bureau du DG Nasri",
  pdg: "Amadou DEME",
  missions: []
};

const boutonMission = document.getElementById("new-mission");
const formulaireMission = document.getElementById("mission-form");
const listeMissions = document.getElementById("missions-list");

boutonMission.addEventListener("click", function () {
  formulaireMission.hidden = !formulaireMission.hidden;
});

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

function afficherMissions() {
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
