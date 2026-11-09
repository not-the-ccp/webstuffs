/* Minutes No. 13 — interactions. All decorative; the minutes read fully without this. */
(function () {
  "use strict";

  /* 1. The paste order, typed once, word for word, as the clerk read it. */
  var line = document.getElementById("orderLine");
  if (line) {
    var text = line.textContent.replace(/\s+/g, " ").trim();
    line.textContent = "";
    var caret = document.createElement("span");
    caret.className = "caret";
    caret.setAttribute("aria-hidden", "true");
    var i = 0;
    line.setAttribute("aria-label", text);
    (function type() {
      if (i < text.length) {
        line.appendChild(document.createTextNode(text.charAt(i)));
        i++;
        line.appendChild(caret);
        var ch = text.charAt(i - 1);
        setTimeout(type, ch === "," ? 260 : ch === "." ? 420 : 24 + Math.random() * 40);
      } else {
        setTimeout(function () {
          if (caret.parentNode) caret.parentNode.removeChild(caret);
        }, 2200);
      }
    })();
  }

  /* 2. Channel 2: press and hold the channel until the row is written. */
  var ptt = document.getElementById("ptt");
  var lamp = document.getElementById("lamp");
  var count = document.getElementById("rowsWritten");
  if (ptt && lamp) {
    var holding = false;
    var n = 0;
    var setCount = function () { if (count) count.textContent = String(n); };
    var begin = function () {
      holding = true;
      ptt.classList.add("held");
      lamp.classList.add("lit");
    };
    var end = function () {
      if (!holding) return;
      holding = false;
      ptt.classList.remove("held");
      lamp.classList.remove("lit");
      n++;
      setCount();
    };
    ptt.addEventListener("pointerdown", begin);
    ptt.addEventListener("pointerup", end);
    ptt.addEventListener("pointerleave", end);
    ptt.addEventListener("pointercancel", end);
    ptt.addEventListener("keydown", function (e) {
      if ((e.key === " " || e.key === "Enter") && !e.repeat) begin();
    });
    ptt.addEventListener("keyup", function (e) {
      if (e.key === " " || e.key === "Enter") end();
    });
    ptt.setAttribute("aria-pressed", "false");
    ptt.addEventListener("click", function () {
      ptt.setAttribute("aria-pressed", ptt.getAttribute("aria-pressed") === "true" ? "false" : "true");
    });
  }

  /* 3. The sheet: sign the twelve rows and the thirteenth inks itself. */
  var sheet = document.getElementById("miniSheet");
  if (sheet) {
    var rows = ["lead, kitchen door", "the side drive", "two written-in numbers",
      "brass pins, second box", "the Odom table", "household 6",
      "the walkie pair", "household 8", "row nine of last sheet",
      "household 10", "household 11", "the porch — lamp on"];
    var signed = 0;
    var entryLine = null;

    var finish = function () {
      if (entryLine && signed === rows.length) {
        entryLine.classList.remove("pencil");
        entryLine.classList.add("inked");
        entryLine.querySelector(".mark").textContent = "inked, 27 III 2013";
      }
    };

    rows.forEach(function (who, idx) {
      var row = document.createElement("div");
      row.className = "rowline";
      row.innerHTML = '<span class="no">row ' + (idx + 1) + '</span>' +
        '<span class="who">' + who + '</span>' +
        '<span class="mark">pending</span>';
      row.addEventListener("click", function () {
        var on = row.classList.toggle("signed");
        row.querySelector(".mark").textContent = on ? "signed" : "pending";
        signed += on ? 1 : -1;
        if (!on && entryLine) {
          entryLine.classList.add("pencil");
          entryLine.classList.remove("inked");
          entryLine.querySelector(".mark").textContent = "in pencil";
        }
        finish();
      });
      sheet.appendChild(row);
    });

    entryLine = document.createElement("div");
    entryLine.className = "rowline entry pencil";
    entryLine.innerHTML = '<span class="no">row 13</span>' +
      '<span class="who">TARANTINO, Q. J. — standing entry</span>' +
      '<span class="mark">in pencil</span>';
    entryLine.addEventListener("click", function () {
      /* row 13 does not sign itself; it inks when the twelve are signed */
    });
    sheet.appendChild(entryLine);
  }
})();
