/* Temperatures Rising — format roller (progressive enhancement) */
(function () {
  var tabs = document.querySelectorAll('.roller-tab');
  var panels = document.querySelectorAll('.roller-panel');
  var show = function (name) {
    tabs.forEach(function (tab) {
      var active = tab.getAttribute('data-format') === name;
      tab.classList.toggle('pressed', active);
      tab.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.id !== 'panel-' + name;
    });
  };
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      show(tab.getAttribute('data-format'));
    });
  });
  show('one');
})();
