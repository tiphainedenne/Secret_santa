document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    console.log("Nom :", name, "Email :", email);
    
    // Afficher la section d'idées cadeaux
    document.getElementById("gift-ideas").style.display = "block";
  });
  