define(['extensible'], function(Extensible) {

  function CartEntry(book, startAmount) {
    this.book = book;
    this.amount = startAmount;
  };

  CartEntry.prototype = new Extensible({
    add: function(amount) {
      this.amount += amount;
    },

    remove: function(amount) {
      this.amount -= amount;
      if (this.amount < 0) {
        this.amount = 0;
      }
    }
  });

  CartEntry.prototype.constructor = CartEntry;

  function Cart() {
    this.storage = {};
  };
  
  Cart.prototype = new Extensible({
    add: function(book, amount) {
      if (typeof this.storage[book.id] == 'undefined') {
        this.storage[book.id] = new CartEntry(book, amount);
      } else {
        this.storage[book.id].add(amount);
      }
    },

    remove: function(id) {
      delete this.storage[id];
    },

    totalCost: function() {
      var p = 0;
      for (var id in this.storage) {
        var entry = this.storage[id];
        p += entry.book.retailPrice.amount * entry.amount;
      }

      return p;
    }
  });

  Cart.prototype.constructor = Cart;

  return Cart;
});