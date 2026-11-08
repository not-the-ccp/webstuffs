document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var seal = document.querySelector('.seal-ring');
  if (!seal) return;
  seal.addEventListener('click', function () {
    seal.classList.toggle('wax-sealed');
  });
  seal.setAttribute('role', 'button');
  seal.setAttribute('aria-label', 'Toggle wax seal');
  seal.style.cursor = 'pointer';
});
