// The Lonely Tree — sapling row: 17 fir-cut marks, one per sapling tile.
(function () {
  var section = document.querySelector(".chapter h2");
  var host = null;
  var chapters = document.querySelectorAll(".chapter h2");
  for (var i = 0; i < chapters.length; i++) {
    if (/Seventeen/.test(chapters[i].textContent)) {
      host = chapters[i].parentNode;
      break;
    }
  }
  if (!host) return;

  var row = document.createElement("div");
  row.className = "sapling-row";
  var marks = "";
  for (var n = 1; n <= 17; n++) {
    marks += '<span title="sapling ' + n + '" class="sapling-mark">&#9650;</span>';
  }
  row.innerHTML = marks;
  host.appendChild(row);

  var style = document.createElement("style");
  style.textContent =
    ".sapling-mark{display:inline-block;margin:0 2px;color:#7a9a7f;cursor:default;transition:color .3s, transform .3s;}" +
    ".sapling-mark.grown{color:#2e5233;transform:translateY(-3px);}";
  document.head.appendChild(style);

  row.addEventListener("mouseover", function (e) {
    if (e.target && e.target.classList) e.target.classList.add("grown");
  });
  row.addEventListener("mouseout", function (e) {
    if (e.target && e.target.classList) e.target.classList.remove("grown");
  });
})();
