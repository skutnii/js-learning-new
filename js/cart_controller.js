define(['view_controller'], function(ViewController) {

  function CartController(options) {
    ViewController.call(this, options);
  };

  CartController.prototype = new ViewController({
    constructor:CartController,
    add: function(book, quantity) {
    }
  });

  return CartController;
});