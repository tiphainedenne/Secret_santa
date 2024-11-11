// Simulation de la base de données locale
let database = {
  users: {}
};

function confirmName() {
  const name = document.getElementById("nameDropdown").value;
  if (!name) {
      alert("Veuillez sélectionner votre prénom.");
      return;
  }

  if (!database.users[name]) {
      let password = prompt("Créez un mot de passe :");
      if (password) {
          database.users[name] = { password: password, wishlist: "" };
          alert("Mot de passe créé avec succès !");
          redirectToDashboard(name);
      }
  } else {
      let password = prompt("Entrez votre mot de passe :");
      if (password === database.users[name].password) {
          alert("Connexion réussie !");
          redirectToDashboard(name);
      } else {
          alert("Mot de passe incorrect.");
      }
  }
}

function redirectToDashboard(name) {
  localStorage.setItem("currentUser", name); // Sauvegarde l'utilisateur actuel
  window.location.href = "dashboard.html";
}

function loadDashboard() {
  const name = localStorage.getItem("currentUser");
  if (name && database.users[name]) {
      document.getElementById("personName").textContent = name;  // Nom de la personne tirée
      document.getElementById("wishlistContent").textContent = database.users[name].wishlist || "Pas de souhaits renseignés";
  }
}

function openWishlistInput() {
  document.getElementById("wishlistInputModal").style.display = "block";
}

function saveWishlist() {
  const name = localStorage.getItem("currentUser");
  const wishlist = document.getElementById("wishlistInput").value;
  if (name && database.users[name]) {
      database.users[name].wishlist = wishlist;
      document.getElementById("wishlistContent").textContent = wishlist;
      document.getElementById("wishlistInputModal").style.display = "none";
  }
}

// Assurez-vous que loadDashboard soit appelé quand la page se charge
document.addEventListener("DOMContentLoaded", loadDashboard);
