define(['search_controller', 'cart_controller'], function(SearchController, CartController) {
  
  function BookStore() {
    var self = this;
    this.searchController = new SearchController({
      viewTag: "#search_view",
      addCallback: function(book) {
        self.addToCart(book);
      }
    });

    this.cartController = new CartController({
      viewTag: "#cart_view"
    });
  };

  BookStore.prototype.addToCart = function(book) {
    this.cartController.add(book, 1);
  };

  BookStore.prototype.constructor = BookStore;

  return BookStore;
});