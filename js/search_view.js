define(['jquery', 'view', 'text!templates/search.html', 'book_view'], function($, View, searchHTML, BookView) {
  SearchView = function(options) {
    this.books = [];
    View.call(this, options);
  };

  SearchView.prototype = new View({
    source: searchHTML,

    updateWithBooks: function(books) {
      this.removeAllSubviews();
      var booksView = new View({
        source: "<div></div>"
      });

      books.forEach(function(book) {
        var bookView = new BookView({book: book});
        booksView.addSubview(bookView);
      });

      this.addSubview(booksView);
    },

    onRender: function() {
      var queryInput = this.sub("#query");
      var self = this;
      this.sub("#find").on("click", function(Event) {
        var query = queryInput.val();
        self.doSearch(query);
        return false;
      });
    }
  });

  SearchView.prototype.constructor = SearchView;

  return SearchView;
});