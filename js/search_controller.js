define(['view_controller', 'search_view', 'book'], function(ViewController, SearchView, Book) {

  function SearchController(options) {
    ViewController.call(this, options);
  };

  SearchController.prototype = new ViewController({
    getBooks: function(query) {
      var self = this;

      Book.find(query, function(books) {
        self.view.updateWithBooks(books);
      });
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