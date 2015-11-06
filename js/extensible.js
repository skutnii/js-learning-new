define([], function() {
  function Extensible(hash) {
    for (key in hash) {
      this[key] = hash[key];
    }
  };
  Extensible.prototype.constructor = Extensible;

  return Extensible;
});