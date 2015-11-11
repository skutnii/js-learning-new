define(['jquery', 'view', 'text!templates/cart.html'], function($, View, cartHTML) {
  function CartView(cart) {
    this.cart = cart;
  }

  CartView.prototype = new View({
    source: cartHTML,

    redraw: function() {
      var oldHandle = this.getHandle();
      this.render();
      this.replace(oldHandle);
    },

    onRender: function() {

    }
  });

  CartView.prototype.constructor = CartView;

  return CartView;
});