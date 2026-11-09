/* The Brackish Pot — limited exchange counter */
(function () {
  var button = document.createElement("button");
  button.className = "drip";
  button.type = "button";
  button.textContent = "exchanges with the Atlantic: 0";
  button.title = "The exchange is limited. Tap to count how limited.";
  document.body.appendChild(button);

  var count = 0;
  button.addEventListener("click", function () {
    count += 1;
    button.textContent = "exchanges with the Atlantic: " + count;
    button.classList.remove("drop");
    void button.offsetWidth; /* restart the animation */
    button.classList.add("drop");
  });
})();
