function sendCommand(command) {
    const url = `http://172.16.3.246:8080/cgi-bin/do.sh?key=${command}`;

    fetch(url, {
        method: 'GET', // Envoie une requête GET
        mode: 'no-cors' // Désactive la vérification CORS
    })
    .then(() => {
        console.log(`Commande envoyée : ${url}`);
    })
    .catch(error => {
        console.error('Erreur lors de l’envoi de la commande :', error);
        alert('Impossible de se connecter au serveur.');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.querySelector(".language-menu select");
  
    // 1. Récupère la langue sauvegardée (ou mets fr par défaut)
    const savedLang = localStorage.getItem("lang") || "fr";
    languageSelect.value = savedLang;
    applyLanguage(savedLang);
  
    // 2. Écoute quand on change la langue
    languageSelect.addEventListener("change", function () {
      const selectedLang = this.value;
      localStorage.setItem("lang", selectedLang); // sauvegarde
      applyLanguage(selectedLang);
    });
  
    // 3. Applique les traductions à la volée
    function applyLanguage(lang) {
      const t = translations[lang];
  
      if (!t) return; // au cas où la langue n'existe pas
  
      document.getElementById("title").innerText = t.title;
      document.getElementById("label-normal").innerText = t.normal;
      document.getElementById("label-hearing").innerText = t.hearing;
      document.getElementById("label-cognitive").innerText = t.cognitive;
      document.getElementById("label-visual").innerText = t.visual;
    }
  });
  