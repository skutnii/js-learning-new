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
      return $(this.getHandle()).find(tag);
    },

    //Customization point. Redefine in derived objects
    onRender: function() {
    },

    //Customization point
    defaultBindings: function() {
      return {};
    },

    render: function(options) {
      var bindings = this.defaultBindings();
      for (var key in options) {
        bindings[key] = options[key];
      };

      var html = this.template(bindings);

      this.domHandle = $(html);

      this.onRender();
    },

    getHandle: function() {
      if (typeof this.domHandle == 'undefined') {
        this.render();
      }

      return this.domHandle;
    },

    replace: function(selector) {
      this.domHandle = this.getHandle().replaceAll(selector);
    },

    appendTo: function(selector) {
      this.domHandle = this.getHandle().appendTo(selector);
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
      view.appendTo(this.getHandle());
    },

    addSubviews: function(views) {
      var fragment = document.createDocumentFragment();
      views.forEach(function(view) {
        this.subviews.push(view);
        view.appendTo(fragment);
      });

      $(this.getHandle()).append(fragment);
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