(() => {
  // Fonction pour rechercher et remplacer le texte
  const replaceTitleText = () => {
    const headings = document.querySelectorAll("h2");
    headings.forEach((heading) => {
      if (heading.textContent.includes("Manual Review")) {
        heading.textContent = "Test";
      }
    });
  };

  // Attendre que la page soit entièrement chargée
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replaceTitleText);
  } else {
    replaceTitleText();
  }
})();
