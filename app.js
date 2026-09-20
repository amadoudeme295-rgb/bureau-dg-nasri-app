const bureau = {
  nom: "Bureau du DG Nasri",
  pdg: "Amadou DEME",
  missions: []
};

const boutonMission = document.getElementById("new-mission");
const formulaireMission = document.getElementById("mission-form");

boutonMission.addEventListener("click", function () {
  formulaireMission.hidden = !formulaireMission.hidden;
});

formulaireMission.addEventListener("submit", function (event) {
  event.preventDefault();

  const titre = document.getElementById("mission-title").value;
  const statut = document.getElementById("mission-status").value;

  const mission = {
    titre: titre,
    statut: statut
  };

  bureau.missions.push(mission);

  alert("Mission enregistrée : " + titre);

  formulaireMission.reset();
  formulaireMission.hidden = true;

  console.log(bureau.missions);
});
