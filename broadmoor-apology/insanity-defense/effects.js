/* The Gatehouse Answers — small effects for the register.
   Everything degrades: the text stands on its own without this file. */

(function () {
  "use strict";

  // Questions open one at a time, like the archive room's single chair.
  var faq = document.querySelector(".faq");
  if (faq) {
    var panels = Array.prototype.slice.call(faq.querySelectorAll("details.q"));
    panels.forEach(function (panel) {
      panel.addEventListener("toggle", function () {
        if (!panel.open) return;
        panels.forEach(function (other) {
          if (other !== panel) other.open = false;
        });
      });
    });
  }

  // The seal answers when it is knocked on.
  var seal = document.getElementById("seal");
  if (seal) {
    seal.setAttribute("tabindex", "0");
    var knock = function () {
      seal.style.transition = "none";
      seal.style.transform = "scale(0.88) rotate(-7deg)";
      // let the transform land before the CSS animation takes it back
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          seal.style.transition = "transform 0.45s cubic-bezier(0.2, 1.6, 0.4, 1)";
          seal.style.transform = "scale(1) rotate(0deg)";
        });
      });
    };
    seal.addEventListener("click", knock);
    seal.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        knock();
      }
    });
  }

  // A ledger line counts the questions set down in the register.
  var num = document.createElement("p");
  num.className = "count";
  num.style.cssText =
    "text-align:center;font-family:'IM Fell English SC',serif;" +
    "letter-spacing:0.28em;font-size:0.8rem;color:#7c2d12;margin:1.6rem 0 0;";
  var register = document.querySelector(".faq");
  if (register) {
    var qs = register.querySelectorAll("details.q").length;
    num.textContent = "QUESTIONS SET DOWN: " + qs;
    register.after(num);
  }
})();
