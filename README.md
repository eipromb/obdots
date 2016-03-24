# obdots
Create dot-path strings of nested objects

Overview
--------

Obdots generates dot-path strings of nested objects to that can be used to pass
into packages like Dotty.

Obdots was created to be used in conjunction with a package like Dotty to
simplify the setting of state in a React application.


Installation
------------

Here's a link to the [npm](https://www.npmjs.com/package/obdots) page.

	npm install obdots

Usage
-----

If an object has multiple properties at any given level, the first found is used
to generate the dot-path string.  Values are not returned in the path.  Arrays
are treated as values.

```javascript
var obdots = require("obdots");

var object = {
  a: {
    b: {
      x: "y",
    },
    c: {
      x: "z",
    },
  },
};

console.log(obdots(object)); // a.b.x
```

License
-------

MIT License. A copy is included with the source.

Contact
-------

* GitHub ([http://github.com/eipromb](eipromb))
* Email ([mailto:jason@makepigeonpie.com](jason@makepigeonpie.com))
