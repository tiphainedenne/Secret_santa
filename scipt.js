// Gestion de la connexion
function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username && password) {
      // Si la connexion réussit, redirection vers dashboard.html
      window.location.href = "dashboard.html";
    } else {
      alert("Veuillez entrer votre nom d'utilisateur et votre mot de passe.");
    }
  }
  
  // Charger les informations du destinataire après la connexion
  function loadRecipientInfo() {
    const recipientName = "Alice"; // Nom tiré au sort
    const recipientWishlist = ["Parfum", "Livre", "Écharpe"];
  
    document.getElementById("recipient-name").textContent = recipientName;
    const wishlistElement = document.getElementById("recipient-wishlist");
  
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
      localStorage.setItem("myWishlist", myWishlist);
      alert("Votre liste d'envies a été enregistrée !");
    } else {
      alert("Veuillez entrer au moins une idée dans votre liste d'envies.");
    }
  }
  
  window.onload = function() {
    if (document.getElementById("recipient-name")) {
      loadRecipientInfo();
    }
    if (document.getElementById("save-wishlist")) {
      document.getElementById("save-wishlist").addEventListener("click", saveMyWishlist);
    }
  };
  