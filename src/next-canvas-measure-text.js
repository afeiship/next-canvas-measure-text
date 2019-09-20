(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { context: null, text: '' };

  nx.canvasMeasureText = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var ctx = options.context;
    return ctx.measureText(options.text);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.canvasMeasureText;
  }
})();
