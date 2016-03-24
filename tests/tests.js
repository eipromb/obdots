var obdots = require("../lib/obdots.js");
var vows = require("vows");
var assert = require("assert");

vows.describe('tests').addBatch({
  'primitives': {
    'simple string': {
      topic: obdots({foo:'bar'}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
    'even number of levels string' : {
      topic: obdots({foo:{bar:'foo'}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo.bar');
      }
    },
    'odd number of levels string': {
      topic: obdots({foo:{bar:{foo:'bar'}}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo.bar.foo');
      }
    },
    'simple number': {
      topic: obdots({foo:42}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
    'even number of levels number' : {
      topic: obdots({foo:{bar:42}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo.bar');
      }
    },
    'odd number of levels number': {
      topic: obdots({foo:{bar:{foo:42}}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo.bar.foo');
      }
    },
  },
  'objects': {
    'empty object': {
      topic: obdots({}),
      'should return the correct value': function(result) {
        assert.equal(result, '');
      }
    },
    'one level, empty object value': {
      topic: obdots({foo:{}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
    'even number of levels, empty object value': {
      topic: obdots({foo:{bar:{}}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo.bar');
      }
    },
    'odd number of levels, empty object value': {
      topic: obdots({foo:{bar:{foo:{}}}}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo.bar.foo');
      }
    }
  },
  'arrays': {
    'empty array': {
      topic: obdots([]),
      'should return the correct value': function(result) {
        assert.equal(result, '');
      }
    },
    'filled array': {
      topic: obdots(['foo','bar']),
      'should return the correct value': function(result) {
        assert.equal(result, '0');
      }
    },
    'object with empty array value': {
      topic: obdots({foo:[]}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
    'object with array value': {
      topic: obdots({foo:['bar']}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
    'object with array value of empty object': {
      topic: obdots({foo:[{}]}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
    'object with array value of object': {
      topic: obdots({foo:[{bar:42}]}),
      'should return the correct value': function(result) {
        assert.equal(result, 'foo');
      }
    },
  }
}).export(module);
