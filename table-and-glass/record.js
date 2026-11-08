/* Stamp the record once it is on the page. */
document.addEventListener('DOMContentLoaded', function () {
  var stamp = document.getElementById('stamp');
  if (stamp) {
    stamp.classList.add('stamped');
  }
});
