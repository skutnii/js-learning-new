define(['view_controller', 'cart'], function(ViewController, Cart) {

  function CartController(options) {
    ViewController.call(this, options);

    this.cart = new Cart();
  };

  CartController.prototype = new ViewController({
    add: function(book, quantity) {
      this.cart.add(book, quantity);
      this.view.redraw();
    },

    loadView: function(tag) {
      //Stub
      return {};
    }
  });

  CartController.prototype.constructor = CartController;

  return CartController;
});