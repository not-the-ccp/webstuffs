// The Marsh Road Diary — small touches; the page reads fine without this.

(function () {
  // visitor counter rolls up like an odometer
  var counter = document.getElementById("counter");
  if (counter) {
    var target = parseInt(counter.getAttribute("data-count"), 10) || 0;
    var step = Math.max(1, Math.round(target / 40));
    var value = 0;
    var timer = setInterval(function () {
      value = Math.min(target, value + step);
      counter.textContent = String(value).padStart(6, "0");
      if (value === target) { clearInterval(timer); }
    }, 40);
  }

  // sign the book: appends a grease-pencil line
  var form = document.getElementById("book-form");
  var book = document.querySelector(".book");
  if (form && book) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.name.value || "").trim() || "someone at the bar";
      var line = document.createElement("p");
      line.textContent = "\u2014 " + name + ": \u201cThe anise is the anise.\u201d";
      book.appendChild(line);
      form.name.value = "";
    });
  }
})();
