// ############ Connexion ###########

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


// ############ Dashboard

// Charger les informations du destinataire après la connexion
function loadRecipientInfo() {
    const recipientName = "Alice"; // Exemple : remplacer par le nom aléatoire sélectionné pour l'utilisateur connecté
    const recipientWishlist = ["Parfum", "Livre", "Écharpe"]; // Exemple : remplacer par la liste d'idées du destinataire
  
    document.getElementById("recipient-name").textContent = recipientName;
    const wishlistElement = document.getElementById("recipient-wishlist");
  
    // Ajouter chaque idée cadeau dans la liste
    recipientWishlist.forEach(idea => {
      const listItem = document.createElement("li");
      listItem.textContent = idea;
      wishlistElement.appendChild(listItem);
    });
  }

// Enregistrer la liste d'envies de l'utilisateur
function saveMyWishlist() {
    const myWishlist = document.getElementById("my-wishlist").value.trim();
    
    if (myWishlist) {
      // Sauvegarde locale pour cet exemple
      localStorage.setItem("myWishlist", myWishlist);
      alert("Votre liste d'envies a été enregistrée !");
    } else {
      alert("Veuillez entrer au moins une idée dans votre liste d'envies.");
    }
  }

// Appel des fonctions après le chargement de la page
window.onload = function() {
    loadRecipientInfo();
    document.getElementById("save-wishlist").addEventListener("click", saveMyWishlist);
  };

  function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Vérification d'un mot de passe, par exemple
    if (username && password) {
      // Code de validation du mot de passe
      // S'il est correct, rediriger vers la page de tableau de bord
      window.location.href = "dashboard.html";
    } else {
      alert("Veuillez entrer votre nom d'utilisateur et votre mot de passe.");
    }
  }
