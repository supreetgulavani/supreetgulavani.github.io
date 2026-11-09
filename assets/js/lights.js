// Home · Lights out — an F1 start-light reaction timer.
(function () {
  var root = document.querySelector('[data-lights]');
  if (!root) return;

  var pods = root.querySelectorAll('[data-pod]');
  var gantry = root.querySelector('[data-gantry]');
  var btn = root.querySelector('[data-lights-btn]');
  var note = root.querySelector('[data-lights-note]');
  var bestEl = root.querySelector('[data-lights-best]');

  var fmt = new Intl.NumberFormat(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 });
  var sec = function (ms) { return fmt.format(ms / 1000) + ' s'; };
  var now = function () { return window.performance && performance.now ? performance.now() : Date.now(); };

  var LABEL = { idle: 'Start the lights', arming: 'Wait…', go: 'GO!', done: 'Again ↺', jump: 'Try again ↺' };
  var NOTE = {
    idle: 'Five red lights. When they all go out, hit the button as fast as you can.',
    arming: 'Wait for it…',
    go: 'Lights out and away we go!',
    jump: 'Jump start! You went before the lights went out. Go again.'
  };

  var phase = 'idle';
  var timers = [];
  var t0 = 0;
  var best = null;
  var handledByPointer = false;

  function clear() { timers.forEach(clearTimeout); timers = []; }

  function setLit(n) {
    pods.forEach(function (p, i) { p.classList.toggle('is-on', i < n); });
    gantry.setAttribute('aria-label', n + ' of 5 start lights on');
  }

  function set(p, text) {
    phase = p;
    root.dataset.phase = p;
    btn.textContent = LABEL[p];
    note.textContent = text || NOTE[p];
  }

  function verdict(ms) {
    if (ms < 200) return 'That’s F1-driver quick.';
    if (ms < 300) return 'Good launch. F1 drivers sit around 0.2 s.';
    return 'Bit of wheelspin there. Go again?';
  }

  function start() {
    clear();
    setLit(0);
    set('arming');
    for (var i = 1; i <= 5; i++) {
      (function (n) { timers.push(setTimeout(function () { setLit(n); }, n * 800)); })(i);
    }
    var out = 4600 + Math.random() * 1800;
    timers.push(setTimeout(function () { setLit(0); t0 = now(); set('go'); }, out));
  }

  function act() {
    if (phase === 'arming') { clear(); setLit(0); set('jump'); return; }
    if (phase === 'go') {
      var ms = Math.round(now() - t0);
      best = best == null ? ms : Math.min(best, ms);
      bestEl.textContent = 'BEST · ' + sec(best);
      set('done', sec(ms) + '. ' + verdict(ms));
      return;
    }
    start();
  }

  // React on press, not release, so the measured time is fair.
  btn.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    handledByPointer = true;
    act();
  });
  // Keyboard (Enter/Space) and other activations arrive as click.
  btn.addEventListener('click', function () {
    if (handledByPointer) { handledByPointer = false; return; }
    act();
  });

  window.addEventListener('pagehide', clear);
})();
