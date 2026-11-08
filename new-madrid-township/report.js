/* Riverview Form 3B — highlight the phrases the student "reasoned about" in the slip */
(function () {
  "use strict";
  var slip = document.getElementById("slip");
  if (!slip) return;

  var marks = [
    "Commissioner Villafuerte stood in the middle of the open channel",
    "are both open Thursdays",
    "S\u00e3o Jos\u00e9 dos Campos 14 Mar, 09:41"
  ];

  function wrap(text, needle) {
    var i = text.indexOf(needle);
    if (i === -1) return text;
    return text.slice(0, i) +
      "<mark>" + needle + "</mark>" +
      text.slice(i + needle.length);
  }

  // Operate on plain text so the exact sentence stays word for word in the DOM.
  var plain = slip.textContent.replace(/\s+/g, " ");
  marks.forEach(function (m) {
    plain = wrap(plain, m);
  });
  slip.innerHTML = plain;
})();
