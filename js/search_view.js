define(['jquery', 'view', 'text!templates/search.html'], function($, View, searchHTML) {
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
        //TODO
      });

      this.addSubview(booksView);
    },

    onRender: function() {
      var queryInput = this.sub("#query");

      this.sub("#find").on("click", function(Event) {
        var query = queryInput.value();
        this.doSearch(query);
        return false;
      });
    }
  });

  SearchView.prototype.constructor = SearchView;

  return SearchView;
});