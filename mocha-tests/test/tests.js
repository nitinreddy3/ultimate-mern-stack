var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Addition of two numbers', function() {
	it('should return 3 when the 1 and 2 are added', function() {
		assert.equal(3, 1 + 2);
	});
});

describe('Object equality checking ', function() {
	it('should return true if objects are same', function() {
		var obj1 = { a: { b: 1 }};
		var obj2 = { a: { b: '1' }};
		assert.deepEqual(obj1, obj2);
	})
});

describe('Object deep equality checking ', function() {
	it('should return true if objects are exactly same', function() {
		var obj1 = { a: { b: 1 }};
		var obj2 = { a: { b: 1 }};
		assert.deepStrictEqual(obj1, obj2);
	})
});