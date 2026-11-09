/* Erie Field Office — prior-art log touches for Specification No. 91-0447 */

window.addEventListener("load", function () {
  var counter = document.getElementById("visitCount");
  if (counter) {
    var base = 4711;
    setInterval(function () {
      base += 1;
      counter.textContent = String(base).padStart(7, "0");
    }, 12000);
  }

  var signer = document.getElementById("signer");
  if (signer) {
    signer.addEventListener("keydown", function (e) {
      if (e.key === "Enter") signBook();
    });
  }
});

function signBook() {
  var signer = document.getElementById("signer");
  var list = document.querySelector(".guestbook .entries");
  if (!signer || !list) return;
  var name = signer.value.trim();
  if (!name) { name = "An unnamed visitor"; }
  var li = document.createElement("li");
  li.innerHTML = "<em>" + name.replace(/</g, "&lt;") + "</em> — \u201cFiled in person at the dune board, per claim 12.\u201d";
  list.appendChild(li);
  signer.value = "";
}
