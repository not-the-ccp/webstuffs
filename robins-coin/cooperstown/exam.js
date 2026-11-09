/* The Greenbush Valley Correspondent, No. 7 — the members' examination.
   Keeps its own tally; the printed key below the questions is the
   record for tables that run without the script. */

(function () {
  var exam = document.getElementById('exam');
  if (!exam) return;

  var blocks = exam.querySelectorAll('.opts');
  var verdict = document.getElementById('verdict');
  var answered = 0, correct = 0;

  blocks.forEach(function (block) {
    var answer = block.getAttribute('data-answer');
    block.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (block.classList.contains('answered')) return;
        block.classList.add('answered');
        var mark = btn.getAttribute('data-mark');
        if (mark === answer) {
          btn.classList.add('correct');
          correct += 1;
        } else {
          btn.classList.add('wrong');
          var right = block.querySelector('[data-mark="' + answer + '"]');
          if (right) right.classList.add('correct');
        }
        answered += 1;
        if (answered === blocks.length) {
          if (correct === 5) {
            verdict.textContent = 'Five of five. The club standard is met; the secretary records it in the file, and the thermos is earned.';
          } else if (correct === 4) {
            verdict.textContent = 'Four of five. Forgiven once, as the key allows. The sixth number is noted in pencil, not ink.';
          } else {
            verdict.textContent = correct + ' of five. The junior members sit the examination again at the next supper; the key below is printed precisely for such tables.';
          }
        }
      });
    });
  });
})();
