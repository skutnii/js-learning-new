define(['jquery', 'view', 'text!templates/book.html'], function($, View, bookHTML) {
  function BookView(options) {
    View.call(this, options);
  };

  BookView.prototype = new View({
    source: bookHTML,

    defaultBindings: function() {
      return {book: this.book};
    }
  });

  BookView.prototype.constructor = BookView;

  return BookView;
});