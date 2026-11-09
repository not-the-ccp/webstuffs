/* GB-1701/0523 — the status stamp consults the register */
(function () {
  var stamp = document.getElementById("status");
  var mirror = document.getElementById("status2");
  var states = [
    "PENDING",
    "OBJECTION NOTED",
    "PENDING — THE PAPER IS BELOW THE WATERLINE"
  ];
  var i = 0;
  var long = {
    PENDING: "PENDING \u2014 the paper is below the waterline",
    "OBJECTION NOTED": "OBJECTION NOTED \u2014 claim nine, see the examiner\u2019s margin",
    "PENDING \u2014 THE PAPER IS BELOW THE WATERLINE": "PENDING \u2014 the paper is below the waterline"
  };
  function set(n) {
    var s = states[n % states.length];
    stamp.textContent = s;
    stamp.className = "status-stamp" + (n % states.length === 1 ? " objection" : "");
    if (mirror) mirror.textContent = long[s];
  }
  if (stamp) {
    stamp.addEventListener("click", function () {
      i += 1;
      set(i);
    });
  }
  var seal = document.querySelector(".seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.style.transform = "rotate(" + (Math.random() * 14 - 8).toFixed(1) + "deg)";
    });
  }
})();
