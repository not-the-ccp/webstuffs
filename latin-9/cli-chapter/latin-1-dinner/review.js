/* Hôtel 8859 — the room shows its numbers: wrap Latin-1 glyphs so a
   resting reader sees the code point on hover. Nothing changes without JS. */
(function () {
  var GLYPHS = {
    "\u00E7": "U+00E7", "\u00E8": "U+00E8", "\u00EA": "U+00EA", "\u00E9": "U+00E9",
    "\u00F1": "U+00F1", "\u00FC": "U+00FC", "\u00F6": "U+00F6", "\u00E4": "U+00E4",
    "\u00DF": "U+00DF", "\u00E6": "U+00E6", "\u009C": "U+009C", "\u0085": "U+0085",
    "\u2122": "153", "\u00B5": "181", "\u2030": "183", "\u00AA": "170", "\u2665": "159"
  };
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      var has = Object.keys(GLYPHS).some(function (g) { return node.nodeValue.indexOf(g) !== -1; });
      return has ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function (node) {
    var frag = document.createDocumentFragment();
    var rest = node.nodeValue;
    while (rest.length) {
      var hit = null, pos = Infinity;
      Object.keys(GLYPHS).forEach(function (g) {
        var i = rest.indexOf(g);
        if (i !== -1 && i < pos) { pos = i; hit = g; }
      });
      if (!hit) { frag.appendChild(document.createTextNode(rest)); break; }
      if (pos > 0) frag.appendChild(document.createTextNode(rest.slice(0, pos)));
      var span = document.createElement("span");
      span.className = "codepoint";
      span.title = GLYPHS[hit] + " — one byte wide, carried in on the standard";
      span.textContent = hit;
      frag.appendChild(span);
      rest = rest.slice(pos + 1);
    }
    node.parentNode.replaceChild(frag, node);
  });
})();
