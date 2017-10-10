var assert = require('assert');
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Addition of two numbers', () => {
	it('should return 3 when the 1 and 2 are added', () => {
		assert.equal(3, 1 + 2);
	});
});