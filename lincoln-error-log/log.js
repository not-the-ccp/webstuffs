// LINC-ERR — registry timestamp, kept like a tide table
(function () {
  var now = new Date();
  var stamp = now.toISOString().slice(0, 16).replace("T", " ");
  var foot = document.querySelector(".reg-foot p");
  if (foot) {
    foot.textContent += "  ·  Read " + stamp + " UTC";
  }
})();
