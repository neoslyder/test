(() => {
  var listToModify = document.querySelector("ul");
var listItemsToShuffle = listToModify.querySelectorAll("li");
for (var i = 0; i < listItemsToShuffle.length - 1; i++) {
    listToModify.appendChild(listItemsToShuffle[i]);
}
})();

