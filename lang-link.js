document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.getElementById("language-selector");
  const links = document.querySelectorAll(".remote-button");

  if (!langSelector || links.length === 0) return;

  function updateLinks(lang) {
    links.forEach(link => {
      const url = new URL(link.getAttribute("href"), window.location.origin);
      url.searchParams.set("lang", lang);
      link.setAttribute("href", url.pathname + url.search);
    });
  }

  // Appliquer la langue sélectionnée dès le chargement
  updateLinks(langSelector.value);

  // Mettre à jour les liens quand la langue change
  langSelector.addEventListener("change", (e) => {
    updateLinks(e.target.value);
  });
});
