define(['view_controller', 'search_view'], function(ViewController, SearchView) {

  function SearchController(options) {
    ViewController.call(this, options);
  };

  SearchController.prototype = new ViewController({
    getBooks: function(query) {

    },

    addToCart: function(book) {
      this.add(book);
    },

    loadView: function() {
      var self = this;

      return new SearchView({
        doSearch: function(query) {
          self.getBooks(query);
        },

        addToCart: function(book) {
          self.addToCart(book);
        }
      });
    }
  });

  SearchController.prototype.constructor = SearchController;

  return SearchController;
});