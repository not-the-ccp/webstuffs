/* Thread 214 — bench touches. The thread reads fine without this. */
(function () {
  "use strict";

  var textarea = document.getElementById("reply-text");
  var note = document.getElementById("reply-note");
  var postBtn = document.getElementById("post-reply");

  if (!textarea || !note || !postBtn) return;

  document.querySelectorAll(".quote-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = document.getElementById(btn.getAttribute("data-post"));
      if (!body) return;
      var text = body.innerText.replace(/\s+/g, " ").trim();
      var quote = "[quote]" + text + "[/quote]\n";
      textarea.value = (textarea.value ? textarea.value + "\n" : "") + quote;
      textarea.focus();
    });
  });

  postBtn.addEventListener("click", function () {
    if (!textarea.value.trim()) {
      note.textContent = "The bench is not offended by nothing, but please write a reply first.";
      return;
    }
    note.textContent = "Queued for the morning post — Thread 214, reply 7. You will be first, probably.";
    textarea.value = "";
  });

  var online = document.getElementById("online-count");
  if (online) {
    var n = parseInt(online.textContent, 10) || 317;
    setInterval(function () {
      n += Math.random() < 0.5 ? -1 : 1;
      if (n < 280) n = 280;
      if (n > 360) n = 360;
      online.textContent = String(n);
    }, 5000);
  }
})();
