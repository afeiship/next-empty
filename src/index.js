import nx from '@jswork/next';

nx.empty = function (inTarget) {
  if (!inTarget || typeof inTarget !== 'object') return inTarget;
  if (Array.isArray(inTarget)) {
    inTarget.length = 0;
  } else {
    nx.forIn(inTarget, (key) => delete inTarget[key]);
  }
  return inTarget;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.empty;
}

export default nx.empty;
