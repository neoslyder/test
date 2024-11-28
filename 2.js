(() => {
  // Fonction pour rechercher et remplacer le texte
  const replaceTitleText = () => {
    const headings = document.getElementsByClassName('MuiTypography-root MuiTypography-body2 ean3opc0 css-v0rbmj');;
    headings.forEach((heading) => {
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

