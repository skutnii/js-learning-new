define(['view_controller'], function(ViewController) {

  function SearchController(options) {
    ViewController.call(this, options);
  };

  SearchController.prototype = new ViewController({
    constructor: SearchController,
    getBooks: function(query) {

    },
    addToCart: function(book) {
      this.addCallback(book);
    }
  });

  return SearchController;
});