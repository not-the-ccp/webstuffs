// Berthside Tours & Tugboat Co. — Program No. 84
// Click a stop's number to mark the berth as walked; the tour
// remembers how many berths are down for this program.
document.addEventListener("DOMContentLoaded", function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  var walked = 0;

  stops.forEach(function (stop) {
    var num = stop.querySelector(".stopnum");
    if (!num) return;
    num.setAttribute("role", "button");
    num.setAttribute("tabindex", "0");
    num.setAttribute("title", "Mark this berth as walked");
    num.addEventListener("click", function () { toggle(stop); });
    num.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(stop); }
    });
  });

  function toggle(stop) {
    stop.classList.toggle("walked");
    walked += stop.classList.contains("walked") ? 1 : -1;
    render();
  }

  function render() {
    var foot = document.querySelector(".colophon");
    var mark = foot && foot.querySelector(".walk-mark");
    if (!mark) {
      mark = document.createElement("p");
      mark.className = "walk-mark";
      foot.appendChild(mark);
    }
    mark.textContent = walked + " of " + stops.length + " berths walked";
  }
});
