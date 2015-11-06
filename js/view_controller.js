define(['extensible'], function(Extensible) {

  function ViewController(options) {
    Extensible.call(this, options);
    this.view = this.loadView();
  };
  ViewController.prototype = new Extensible({
    constructor: ViewController
  });

  return ViewController;
});