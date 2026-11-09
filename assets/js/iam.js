// Curious · "I am …" — cycles through short phrases, then settles on "I am."
// Autoplay runs ~15 s, so it has Skip and Say-it-again controls (AGENTS.md).
(function () {
  var root = document.querySelector('[data-iam]');
  if (!root) return;

  var words;
  try { words = JSON.parse(root.dataset.words || '[]'); } catch (e) { words = []; }
  var wordEl = root.querySelector('[data-iam-word]');
  var dotEl = root.querySelector('[data-iam-dot]');
  var skipBtn = root.querySelector('[data-iam-skip]');
  var replayBtn = root.querySelector('[data-iam-replay]');
  var timer = null;
  var i = 0;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function show(word) {
    wordEl.textContent = ' ' + word;
    wordEl.className = 'iam-word';
    void wordEl.offsetWidth;            // restart the rise animation
    wordEl.className = 'iam-word is-new';
  }

  function settle() {
    clearInterval(timer);
    wordEl.textContent = '';
    dotEl.hidden = false;
    skipBtn.hidden = true;
    replayBtn.hidden = false;
  }

  function play() {
    if (!words.length || reduce) { settle(); return; }
    clearInterval(timer);
    i = 0;
    dotEl.hidden = true;
    skipBtn.hidden = false;
    replayBtn.hidden = true;
    show(words[0]);
    timer = setInterval(function () {
      i += 1;
      if (i >= words.length) settle();
      else show(words[i]);
    }, 2100);
  }

  skipBtn.addEventListener('click', function () { settle(); replayBtn.focus(); });
  replayBtn.addEventListener('click', function () { play(); skipBtn.focus(); });
  window.addEventListener('pagehide', function () { clearInterval(timer); });

  play();
})();
