# dom-remove [![Build Status](https://travis-ci.org/nk-components/array-remove.svg)](https://travis-ci.org/nk-components/array-remove)

Remove an Element from the DOM

## Installation

With [npm](http://npmjs.org) do:

```bash
$ npm install dom-remove --save
```
Install with [component(1)](http://component.io):

```bash
$ component install nk-components/dom-remove
```

## Usage

```js
var remove = require('dom-remove');

var el = document.querySelector('#elmt')
remove(el);

var els = Array.prototype.slice.call(document.querySelectorAll('div'));
remove(els);
```

## License

MIT
