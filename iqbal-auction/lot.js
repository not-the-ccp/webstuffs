/* Lot 214 — bring a card of the album to the counter.
   Without this script every card is shown in order; with it,
   the picker reveals one card at a time. */
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".card-tab"));
  if (!tabs.length) return;
  var cards = tabs
    .map(function (tab) { return document.getElementById("card-" + tab.dataset.card); })
    .filter(Boolean);

  function show(id) {
    tabs.forEach(function (tab) {
      tab.setAttribute("aria-selected", String(tab.dataset.card === id));
    });
    cards.forEach(function (card) {
      card.hidden = card.id !== "card-" + id;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { show(tab.dataset.card); });
  });

  show(tabs[tabs.length - 1].dataset.card); // the last card, where the fare stands
})();
