const bureau = {
  nom: "Bureau du DG Nasri",
  pdg: "Amadou DEME",
  missions: 0,
  candidatures: 0,
  alertes: 0,
  decisions: 0
};

document.getElementById("missions").textContent = bureau.missions;
document.getElementById("candidatures").textContent = bureau.candidatures;
document.getElementById("alertes").textContent = bureau.alertes;
document.getElementById("decisions").textContent = bureau.decisions;
