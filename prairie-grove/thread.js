/* Night clock for Prairie Grove, December 7–8, 1862 */
(function () {
  "use strict";

  var hours = [
    {
      time: "22:00",
      place: "The prairie, west of Prairie Grove",
      text: "Hindman's First Corps closes on the high ground south of Prairie Grove and takes the rifle pits in the corn stubble. Herron's two divisions arrive by the prairie roads and the Union column is now the one that must go up."
    },
    {
      time: "23:30",
      place: "The hollow and the cornfield",
      text: "The Union infantry is thrown back out of the hollow in the rain. Crockett's men and the coming of Sturgis's 1st Missouri Cavalry Division turn Hindman's left on the far side of the prairie."
    },
    {
      time: "01:00",
      place: "The ridge above Prairie Grove",
      text: "Artillery duel on the ridge. Two pieces of Union artillery come down on Hindman's guns, and the guns talk through the night until the ammunition falls off on both sides."
    },
    {
      time: "02:30",
      place: "Hindman's line",
      text: "Outflanked on both flanks and his guns falling silent, Hindman orders the line to ground itself. The Confederates begin to peel off to the south, toward the Walnut and the long road to Little Rock."
    },
    {
      time: "04:00",
      place: "The crossroads, Washington County",
      text: "Blunt, holding the field with a division and a night of fighting behind him, makes the call: withdraw, in order, up the prairie road toward the Arkansas. He keeps the crossroads by not staying to lose it."
    },
    {
      time: "06:00",
      place: "Dawn over the wheat prairie",
      text: "A field of dead, a river to the north, and the crossroads of northwestern Arkansas kept by the Union for the winter. In his winter book the clerk writes Entry 191, set down here as they were right to."
    }
  ];

  var i = 0;
  var timeEl = document.getElementById("clock-time");
  var placeEl = document.getElementById("clock-place");
  var textEl = document.getElementById("clock-text");
  var countEl = document.getElementById("clock-count");
  var backEl = document.getElementById("clock-back");
  var nextEl = document.getElementById("clock-next");

  if (!timeEl || !placeEl || !textEl || !countEl) return;

  function show(n) {
    i = (n + hours.length) % hours.length;
    timeEl.textContent = hours[i].time;
    placeEl.textContent = hours[i].place;
    textEl.textContent = hours[i].text;
    countEl.textContent = "Hour " + (i + 1) + " of " + hours.length;
  }

  if (backEl) backEl.addEventListener("click", function () { show(i - 1); });
  if (nextEl) nextEl.addEventListener("click", function () { show(i + 1); });

  show(0);
})();
