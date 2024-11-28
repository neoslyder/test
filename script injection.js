(() => {
  // Localiser la liste UL contenant les éléments à trier
  const listContainer = document.querySelector(".MuiList-root");

  if (!listContainer) {
    console.error("La liste à trier est introuvable.");
    return;
  }

  // Récupérer tous les éléments LI de la liste
  const listItems = Array.from(listContainer.querySelectorAll("li"));

  if (listItems.length === 0) {
    console.error("Aucun élément à trier dans la liste.");
    return;
  }

  // Extraire le texte de chaque élément et trier par ordre alphabétique
  const sortedItems = listItems.sort((a, b) => {
    const textA = a.querySelector("span").textContent.trim().toLowerCase();
    const textB = b.querySelector("span").textContent.trim().toLowerCase();
    return textA.localeCompare(textB);
  });

  // Supprimer les anciens éléments LI
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }

  // Réinsérer les éléments triés dans la liste
  sortedItems.forEach((item) => listContainer.appendChild(item));

  console.log("La liste a été triée avec succès !");
})();
