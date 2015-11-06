define(['view_controller'], function(ViewController) {

  function CartController(options) {
    ViewController.call(this, options);
  };

  CartController.prototype = new ViewController({
    add: function(book, quantity) {
    },
    loadView: function(tag) {
      //Stub
      return {};
    }
  });

  CartController.prototype.constructor = CartController;

  return CartController;
});