define(['jquery', 'underscore', 'extensible'], function($, _, Extensible) {
  function View(options) {

    Extensible.call(this, options);

    //Define source in initialization options
    if (typeof this.source != 'undefined') {
      this.template = _.template(this.source);
    }

    this.subviews = [];
  };

  View.prototype = new Extensible({
    //Finds descendant elements by a jQuery selector 
    sub: function(tag) {
      return $(this.getDOM()).find(tag);
    },

    //Customization point. Redefine in derived objects
    onRender: function() {
    },

    render: function(bindings) {
      this.domHandle = document.createDocumentFragment();

      if (typeof bindings == 'undefined') {
        bindings = {};
      }
      var html = this.template(bindings);

      $(this.domHandle).append(html);

      this.onRender();
    },

    getDOM: function() {
      if (typeof this.domHandle == 'undefined') {
        this.render();
      }

      return this.domHandle;
    },

    replace: function(selector) {
      $(selector).replaceWith(this.getDOM());
    },

    appendTo: function(selector) {
      $(selector).append(this.getDOM());
    },

    //Customization point. redefine in derived objects
    onDetach: function() {
    },

    detach: function() {
      this.onDetach();

      $(this.domHandle).detach();
    },

    addSubview: function(view) {
      this.subviews.push(view);
      view.appendTo(this.getDOM());
    },

    addSubviews: function(views) {
      var fragment = document.createDocumentFragment();
      views.forEach(function(view) {
        this.subviews.push(view);
        view.appendTo(fragment);
      });

      $(this.getDOM()).append(fragment);
    },

    removeSubview: function(view) {
      var index = this.subviews.indexOf(view);
      if (index != -1) {
        view.detach();
        this.subviews.splice(index, 1);
      }
    },

    removeAllSubviews: function() {
      this.subviews.forEach(function(view) {
        view.detach();
      });

      this.subviews = [];
    }
  });

  View.prototype.constructor = View;

  return View;
});