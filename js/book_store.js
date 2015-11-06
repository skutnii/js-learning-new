define(['search_controller', 'cart_controller'], function(SearchController, CartController) {
  
  function BookStore() {
    var self = this;
    this.searchController = new SearchController({
      addToCart: function(book) {
        self.addToCart(book);
      }
    });
    this.searchController.view.appendTo("body");

    this.cartController = new CartController({
    });
  };

  BookStore.prototype.addToCart = function(book) {
    this.cartController.add(book, 1);
  };

  BookStore.prototype.constructor = BookStore;

  return BookStore;
});