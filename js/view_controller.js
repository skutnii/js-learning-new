define(['extensible'], function(Extensible) {

  function ViewController(options) {
    Extensible.call(this, options);

    //loadView and viewTag must be set in options
    this.view = this.loadView(this.viewTag);
  };
  ViewController.prototype = new Extensible({
    constructor: ViewController
  });

  return ViewController;
});