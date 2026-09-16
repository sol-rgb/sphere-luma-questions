(function () {
  var questionEl = document.getElementById("question");
  var drawBtn = document.getElementById("draw");
  var card = document.getElementById("card");
  var noticeEl = document.getElementById("placeholder-notice");

  if (typeof PLACEHOLDER !== "undefined" && PLACEHOLDER) {
    noticeEl.hidden = false;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fisher-Yates shuffle: everyone at the table sees the whole deck before any repeat.
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var deck = shuffled(QUESTIONS);
  var index = -1;
  var busy = false;

  var wrapEl = document.getElementById("qwrap");
  var SIZE_STEPS = ["", "q-md", "q-sm", "q-xs"];

  function applyStep(i) {
    questionEl.classList.remove("q-md", "q-sm", "q-xs");
    if (SIZE_STEPS[i]) questionEl.classList.add(SIZE_STEPS[i]);
  }

  function render() {
    var text = deck[index];
    var step = text.length > 300 ? 3 : text.length > 180 ? 2 : text.length > 90 ? 1 : 0;
    questionEl.textContent = text;
    applyStep(step);
    // Step the type down until the question fits the card; scroll only as a last resort.
    while (step < 3 && wrapEl && wrapEl.scrollHeight > wrapEl.clientHeight + 1) {
      step++;
      applyStep(step);
    }
    if (wrapEl) wrapEl.scrollTop = 0;
  }

  function next() {
    if (busy) return;
    index++;
    if (index >= deck.length) {
      var last = deck[deck.length - 1];
      deck = shuffled(QUESTIONS);
      // avoid showing the same question twice in a row across reshuffles
      if (deck.length > 1 && deck[0] === last) {
        deck.push(deck.shift());
      }
      index = 0;
    }
    if (reduceMotion) {
      render();
      return;
    }
    busy = true;
    questionEl.classList.add("is-leaving");
    setTimeout(function () {
      render();
      questionEl.classList.remove("is-leaving");
      busy = false;
    }, 150);
  }

  drawBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    next();
  });
  card.addEventListener("click", next);

  // Re-fit the current question when the real fonts arrive or the viewport changes.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { if (index >= 0) render(); });
  }
  window.addEventListener("resize", function () { if (index >= 0) render(); });

  next();
})();
