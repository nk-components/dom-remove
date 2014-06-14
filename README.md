# dom-remove

Remove an Element from the DOM

## Installation

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
