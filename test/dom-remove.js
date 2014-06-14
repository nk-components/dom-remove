/* global describe, it, beforeEach, afterEach */
'use strict';

var assert = require('assert');
var remove = require('dom-remove');


describe('dom-remove', function() {
  var parent;

  function createEl() {
    var el = document.createElement('div');
    parent.appendChild(el);
    return el;
  }

  beforeEach(function() {
    parent = document.createElement('div');
    document.body.appendChild(parent);

  });

  afterEach(function() {
    document.body.removeChild(parent);
  });

  it('should remove an element', function(done) {
    assert.equal(parent.children.length, 0);

    var el = createEl();
    assert.equal(parent.children.length, 1);

    remove(el);
    assert.equal(parent.children.length, 0);

    done();
  });

  it('should remove a list of elements', function(done) {
    assert.equal(parent.children.length, 0);

    var els = [createEl(), createEl(), createEl()];
    assert.equal(parent.children.length, 3);

    remove(els);
    assert.equal(parent.children.length, 0);

    done();
  });
});


