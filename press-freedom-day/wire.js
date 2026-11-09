/* The May Third Register — wire.js: set the dateline and let the tape run.
   The page is fully readable without this file. */
(function () {
  "use strict";

  var dateline = document.getElementById("dateline");
  if (dateline) {
    var now = new Date();
    var month = ["January","February","March","April","May","June",
                 "July","August","September","October","November","December"][now.getMonth()];
    dateline.textContent = now.getDate() + " " + month + " · year " + (now.getFullYear() - 1948) + " of Article 19";
  }

  var tape = document.getElementById("tickertape");
  if (tape) {
    /* double the tape so the loop point is not visible */
    tape.textContent += " · 04:12 Dhaka · 04:41 Narsingdi · 05:52 Dohar · 08:19 Jessore · 09:04 Khulna · 3 May · facts in order · the flag kept small ·";
  }
})();
