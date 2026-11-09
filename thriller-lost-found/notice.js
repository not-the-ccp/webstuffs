/* Westlake Road Lost & Found — Notice No. 82/1129 */
(function () {
  var title = document.getElementById("title-word");
  if (!title) return;
  // The counter's rule: the title word stays lit; only the third letter
  // is allowed to blink, and only when the notice is not being read.
  title.addEventListener("click", function () {
    title.classList.toggle("steady");
    if (title.classList.contains("steady")) {
      title.style.textShadow = "none";
      title.style.animation = "none";
    } else {
      title.style.textShadow = "";
      title.style.animation = "";
    }
  });
})();
