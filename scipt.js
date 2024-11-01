// Stocker les participants et idées cadeaux
let participants = [];

// Fonction pour afficher ou masquer des éléments
function toggleVisibility(elementId, shouldShow) {
  document.getElementById(elementId).style.display = shouldShow ? "block" : "none";
}

// Fonction pour enregistrer un participant
function registerParticipant(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les données du formulaire
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Valider les champs
  if (!name || !email) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  // Ajouter le participant à la liste
  participants.push({ name, email, ideas: "" });
  console.log("Participants :", participants);

  // Afficher la section d'idées cadeaux
  toggleVisibility("gift-ideas", true);

  // Réinitialiser le formulaire et masquer
  document.getElementById("registration-form").reset();
  toggleVisibility("registration-form", false); // On masque le formulaire après inscription
}

// Fonction pour enregistrer les idées cadeaux
function saveGiftIdeas() {
  const ideas = document.getElementById("ideas").value.trim();
  if (ideas) {
    // Associer les idées cadeaux au dernier participant inscrit
    participants[participants.length - 1].ideas = ideas;
    console.log("Idées mises à jour :", participants);

    // Réinitialiser le champ et masquer la section d'idées cadeaux
    document.getElementById("ideas").value = "";
    toggleVisibility("gift-ideas", false);
    alert("Vos idées cadeaux ont été enregistrées !");
  } else {
    alert("Veuillez entrer une idée cadeau avant de sauvegarder.");
  }
}

// Écouteur pour le formulaire d'inscription
document.getElementById("registration-form").addEventListener("submit", registerParticipant);

// Écouteur pour le bouton d'enregistrement des idées cadeaux
document.getElementById("submit-ideas").addEventListener("click", saveGiftIdeas);