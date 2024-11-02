// Stocker les participants et idées cadeaux
let participants = [];

// Fonction pour afficher ou masquer des éléments
function toggleVisibility(elementId, shouldShow) {
  document.getElementById(elementId).style.display = shouldShow ? "block" : "none";
}

// Vérifier si l'utilisateur a un mot de passe enregistré
function checkIfPasswordExists(name) {
    return localStorage.getItem(name) !== null;
  }

// Enregistrer un nouveau mot de passe
function savePassword(name, password) {
    localStorage.setItem(name, password);
  }
  
  // Vérifier le mot de passe lors de la connexion
  function validatePassword(name, enteredPassword) {
    const storedPassword = localStorage.getItem(name);
    return storedPassword === enteredPassword;
  }

// Gérer la connexion
function handleLogin(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
  
    if (!name || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    if (checkIfPasswordExists(name)) {
      // Si le mot de passe existe déjà, on vérifie
      if (validatePassword(name, password)) {
        alert("Connexion réussie !");
        toggleVisibility("gift-ideas", true);
        toggleVisibility("login-form", false);
      } else {
        alert("Mot de passe incorrect.");
      }
    } else {
      // Si c'est la première connexion, on enregistre le mot de passe
      savePassword(name, password);
      alert("Mot de passe créé avec succès !");
      toggleVisibility("gift-ideas", true);
      toggleVisibility("login-form", false);
    }
  
    // Réinitialiser le champ mot de passe
    document.getElementById("password").value = "";
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