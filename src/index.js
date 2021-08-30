(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.empty = function (inTarget) {
    if (!inTarget || typeof inTarget !== 'object') return inTarget;
    if (Array.isArray(inTarget)) {
      inTarget.length = 0;
    } else {
      nx.forIn(inTarget, (key) => delete inTarget[key]);
    }
    return inTarget;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.empty;
  }
})();
