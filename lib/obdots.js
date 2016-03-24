//
// Obdots creates dot-path string from nested objects, that can be used in other
// libraries such as dotty.
//
//
// `object` is an object
//
//
// Returns the dot-path string for the passed object, and empty string '' if the
// passed object is a value.  If an object has multiple properties at any given
// level, only the first will be returned.
//
var obdots = module.exports = function(object) {
  var key;
  var value;
  var pair;

  if (typeof object != 'object') {
    return '';
  }

  key = Object.keys(object)[0];
  if (typeof key === 'undefined') {
    return '';
  } else if (typeof object[key] === 'object') {
    value = Object.keys(object[key])[0];
    pair = key+'.'+value;

    if (object[key] instanceof Array) {
      return key;
    } else if (typeof object[key][Object.keys(object[key])[0]] === 'object' &&
        Object.keys(object[key][Object.keys(object[key])[0]]).length > 0) {
      if (object[key][Object.keys(object[key])[0]] instanceof Array) {
        return key;
      } else {
        return pair+'.'+obdots(object[key][Object.keys(object[key])[0]]);
      }
    } else if (typeof value == 'undefined') {
      return key;
    } else {
      return pair;
    }
  } else {
    return key;
  }
}
