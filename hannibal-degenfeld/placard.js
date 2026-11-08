/* Placard No. 12 — campaign timeline switchboard */
(function () {
  var campaigns = {
    candia: {
      title: "1669 — Candia, Crete",
      text: "The Venetian garrison of Candia, old capital of Crete, capitulates after a siege begun in 1648 — the longest of the early modern record. Degenfeld stands in the relieving squadron's chain of quarters; the scabbard's walnut cap is turned in that year's shipwright's shed on board the fleet."
    },
    franco: {
      title: "1672–1678 — Franco-Dutch War",
      text: "Service in the Dutch States Army, on the water and the dike. In July 1675 the island of Terschelling is inundated to keep the French out: the water stands three feet at its first day, and the minutes carry a tide entry for that morning in Degenfeld's own hand."
    },
    scanian: {
      title: "1675–1679 — Scanian War",
      text: "Dano-Norwegian service against the Swedish positions of Scania, Öland and Blekinge, including the long blockade of the south Swedish coast. The volume's weather page from this winter lists fourteen gales and one frozen sea."
    },
    bavaria: {
      title: "1678 — Bavaria",
      text: "Entry into the court of Prince-Elector Maximilian II Emanuel, who is raising a standing army from scratch. Degenfeld is named to the forming board and drafts the drill order still quoted in the Electorate's case books; the 1684 household register styles him 'one of those who built the army'."
    },
    vienna: {
      title: "1683 — Battle of Vienna",
      text: "The young Bavarian formation takes the Austrian left of the kaiser's main camp on the plains south of the capital. The Turkish relief army is broken, the camp is carried, and Vienna is saved. The case label dates Degenfeld's field service in the battle to the decisive charge of the heavy horse."
    },
    morea: {
      title: "1687–1691 — Morean War",
      text: "Back in the Venetian service: the landing in the Peloponnese, the reduction of the Corinth isthmus, and the winter quarters of 1690–91. Degenfeld dies on 12 October 1691, and the minutes stop. The last entry is a tide entry again."
    }
  };

  var card = document.getElementById("campaignCard");
  var stops = Array.prototype.slice.call(document.querySelectorAll("#timeline .stop"));
  if (!card || !stops.length) { return; }

  function show(key) {
    var c = campaigns[key];
    if (!c) { return; }
    card.innerHTML = "<h3>" + c.title + "</h3><p>" + c.text + "</p>";
    stops.forEach(function (s) {
      s.classList.toggle("active", s.getAttribute("data-campaign") === key);
    });
  }

  stops.forEach(function (s) {
    s.addEventListener("click", function () {
      show(s.getAttribute("data-campaign"));
    });
  });

  show("candia");
})();
