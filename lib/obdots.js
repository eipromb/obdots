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
module.exports = {
  stringify: function(object) {
    var key = Object.keys(object)[0];
    var value;

    if (typeof object != 'object') {
      return '';
    } else  if (typeof object !== 'object') {
      value = Object.keys(object[key])['0'];
      return key+'.'+value+'.'+identity_string(object[key][Object.keys(object[key])[0]]);
    } else {
      return key;
    }
  }
}
