// Work · Clock the pipeline — three items through a 5-stage pipeline, no hazards.
(function () {
  var root = document.querySelector('[data-pipeline]');
  if (!root) return;

  var stages = root.querySelectorAll('[data-stage]');
  var results = root.querySelectorAll('[data-result]');
  var btn = root.querySelector('[data-clock]');
  var cycleEl = root.querySelector('[data-cycle]');
  var noteEl = root.querySelector('[data-note]');

  var tokens = Array.prototype.map.call(results, function (r) { return r.dataset.token; });
  var N = tokens.length;            // items
  var S = stages.length;            // stages
  var LAST = N + S - 1;             // cycles to drain
  var cyc = 0;

  function note() {
    if (cyc === 0) return 'Three things are loaded: my résumé, my skills, and a way to say hi.';
    if (cyc < N) return 'A new item enters every cycle, so several are in flight at once. That’s pipelining.';
    if (cyc < S) return 'The pipeline is full, with every item in its own stage, all working at the same time.';
    if (cyc < LAST) return 'Out of write back and onto the page. From here, one item finishes every cycle.';
    return 'Done: ' + N + ' items in ' + LAST + ' cycles. One at a time, it would have taken ' + (N * S) + '.';
  }

  function render() {
    stages.forEach(function (stage, s) {
      var i = cyc - 1 - s;               // item i sits in stage s during cycle cyc
      var busy = i >= 0 && i < N;
      stage.classList.toggle('is-busy', busy);
      stage.querySelector('[data-slot]').textContent = busy ? tokens[i] : 'empty';
    });
    results.forEach(function (r, i) { r.hidden = cyc < S + i; });
    cycleEl.textContent = cyc;
    noteEl.textContent = note();
    btn.textContent = cyc >= LAST ? 'Run it again ↺' : 'Clock ▸';
  }

  btn.addEventListener('click', function () {
    cyc = cyc >= LAST ? 0 : cyc + 1;
    render();
  });

  render();
})();
