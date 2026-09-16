(function () {
  var questionEl = document.getElementById("question");
  var counterEl = document.getElementById("counter");
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

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  var wrapEl = document.getElementById("qwrap");

  function render() {
    var text = deck[index];
    questionEl.classList.remove("q-md", "q-sm", "q-xs");
    if (text.length > 300) questionEl.classList.add("q-xs");
    else if (text.length > 180) questionEl.classList.add("q-sm");
    else if (text.length > 90) questionEl.classList.add("q-md");
    questionEl.textContent = text;
    counterEl.textContent = pad(index + 1) + " / " + pad(deck.length);
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

  drawBtn.addEventListener("click", next);
  card.addEventListener("click", next);

  next();
})();
