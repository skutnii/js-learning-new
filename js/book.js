define(['jquery', 'extensible'], function($, Extensible) {

  var module = {
    rootURL: "https://www.googleapis.com/books/v1/volumes"
  };

  function InternalBook(options) {
    this.update(this.options);
  };

  InternalBook.prototype = new Extensible({
    
    update: function(options) {
      Extensible.call(this, options);
    }

  });

  InternalBook.prototype.constructor = InternalBook;

  module.create = function(options) {
    return new InternalBook(options);
  };

  module.parse = function(data) {
    var initOptions = {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      authors: data.authors,
      description: data.description,
      saleable: false,
      retailPrice: data.retailPrice
    };

    var imLinks = data.imageLinks;
    if (typeof imLinks != "undefined") {
      initOtions.thumbnail = imLinks.smallThumbnail;
    };

    var saleInfo = data.saleInfo;
    if (typeof saleInfo != "undefined") {
      if (saleInfo.saleability == "FOR_SALE") {
        initOptions.saleable = true;
      }
    };

    return new InternalBook(initOptions);
  };

  module.reportFailure = function(link) {
      Console.log("Loading " + link + " failed.");
  };

  module.get = function(id, callback) {
    var link = this.rootURL + '/' + id;

    $.getJSON(link)
    .done(function(data) {
      var book = module.parse(data);
      callback(book);
    })
    .fail(function() {
      module.reportFailure(link);
    });
  };

  module.find = function(query, callback) {
    var link = this.rootURL + '?q=' + query;

    $.getJSON(link)
    .done(function(data) {
      var books = [];
      
      data.items.forEach(function(item) {
        var book = module.parse(item);
        books.push(book);
      });

      callback(books);
    })
    .fail(function() {
      module.reportFailure(link);
    });
  };

  return module;
});