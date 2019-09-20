/*!
 * name: next-canvas-measure-text
 * url: https://github.com/afeiship/next-canvas-measure-text
 * version: 1.0.0
 * date: 2019-09-20T06:40:35.208Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { context: null, callback: nx.noop, text: '' };

  nx.canvasMeasureText = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var ctx = options.context;
    options.callback(ctx);
    return ctx.measureText(options.text);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.canvasMeasureText;
  }
})();

//# sourceMappingURL=next-canvas-measure-text.js.map
