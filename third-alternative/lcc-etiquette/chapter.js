/* Chapter IX — a light touch for the reading desk */
(function () {
  "use strict";

  var lastRead = document.getElementById("last-read");
  if (lastRead) {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
    lastRead.textContent = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  /* give each call number its full class name on hover, for the uninitiated */
  var marks = document.querySelectorAll(".mark");
  Array.prototype.forEach.call(marks, function (m) {
    var title = m.getAttribute("title");
    if (!title) return;
    m.addEventListener("mouseenter", function () { m.dataset.caption = title; });
    m.addEventListener("mouseleave", function () { delete m.dataset.caption; });
  });
})();
