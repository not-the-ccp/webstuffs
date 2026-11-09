/* North End Relay Office — recovered-copy stamp and relay lamp */
(function () {
  // the stamp lands once the sheet has settled
  window.addEventListener("load", function () {
    document.body.classList.add("stamped");
  });

  // the lamp in the masthead corner flickers; clicking it dims the room
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.title = "The relay lamp";
    stamp.style.cursor = "pointer";
    stamp.addEventListener("click", function () {
      document.body.classList.toggle("lamp-dim");
    });
  }
})();
