/* Chapter 9 — Anison · cassette deck, stamp counter */
(function () {
  var cassette = document.getElementById("cassette");
  var deck = document.getElementById("deck");
  var read = document.getElementById("deck-read");
  var count = document.getElementById("deck-count");
  var stamp = document.getElementById("stampbox");

  // count the logged records in the provenance table
  var logs = document.querySelectorAll(".log-table tr.log");
  var logged = 0;
  count.textContent = "records logged in this chapter: 0 / " + logs.length;

  var tracks = [
    "SIDE A · TRACK 01 — first 2010 upload, ochre cover set",
    "SIDE A · TRACK 07 — the palette change no one has settled",
    "SIDE A · TRACK 14 — two-week cycle, last entry of the year",
    "SIDE B · TRACK 01 — debut album press, 2014, MusicRay'n",
    "SIDE B · TRACK 08 — CHiCO on top of the production",
    "SIDE B · TRACK 13 — Ren'ai Series insert, docket sealed"
  ];
  var trackIdx = 0;
  var timer = null;

  function tickCount() {
    logged = Math.min(logged + 1, logs.length);
    count.textContent = "records logged in this chapter: " + logged + " / " + logs.length;
  }

  function stop() {
    cassette.classList.remove("playing");
    deck.classList.remove("playing");
    cassette.setAttribute("aria-pressed", "false");
    if (timer) { clearInterval(timer); timer = null; }
    read.textContent = "DECK IDLE — press the cassette to run Chapter 9";
  }

  function play() {
    if (timer) { stop(); return; }
    cassette.classList.add("playing");
    deck.classList.add("playing");
    cassette.setAttribute("aria-pressed", "true");
    trackIdx = 0;
    read.textContent = tracks[0];
    logged = 0;
    count.textContent = "records logged in this chapter: 0 / " + logs.length;
    timer = setInterval(function () {
      trackIdx = (trackIdx + 1) % tracks.length;
      read.textContent = tracks[trackIdx];
      tickCount();
    }, 2600);
  }

  if (cassette) {
    cassette.addEventListener("click", play);
    cassette.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); }
    });
  }

  // stamp counter: wax impressions of the chapter
  var impressions = 0;
  if (stamp) {
    stamp.addEventListener("click", function () {
      impressions += 1;
      stamp.classList.remove("stamped");
      void stamp.offsetWidth;
      stamp.classList.add("stamped");
      stamp.querySelector(".stamp-sub").textContent =
        impressions === 1
          ? "1 WAX IMPRESSION"
          : impressions + " WAX IMPRESSIONS";
    });
  }
})();
