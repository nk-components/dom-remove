'use strict';

var _toString = {}.toString;
var every = require('every');

module.exports = function remove(el) {
  if (!el) return;

  if ('[object Array]' === _toString.call(el)) {
    return every(el, remove);
  }

  var parent = el.parentNode;
  if (parent) {
    parent.removeChild(el);
    return true;
  }

  return false;
};
