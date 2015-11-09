define([], function() {
  function Extensible(hash) {
    for (var key in hash) {
      this[key] = hash[key];
    }
  };
  Extensible.prototype.constructor = Extensible;

  return Extensible;
});