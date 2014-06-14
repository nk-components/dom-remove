'use strict';

var _toString = {}.toString;
var each = require('for-each');

module.exports = function remove(el) {
  if (!el) return;

  if ('[object Array]' === _toString.call(el)) {
    each(el, remove);
    return;
  }

  var parent = el.parentNode;
  if (parent) {
    parent.removeChild(el);
  }
};
