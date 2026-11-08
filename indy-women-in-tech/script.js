// Class 7B report sheet: counts the words in the report and confirms the grade stamp.
(function () {
  var body = document.querySelector("main");
  if (!body) return;
  var text = body.textContent.replace(/\s+/g, " ").trim();
  var words = text ? text.split(" ").length : 0;
  var el = document.getElementById("wordcount");
  if (el) el.textContent = String(words);

  var stamp = document.getElementById("grade-stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.transform = stamp.style.transform === "rotate(-8deg)"
        ? "rotate(-14deg)"
        : "rotate(-8deg)";
    });
  }
})();
