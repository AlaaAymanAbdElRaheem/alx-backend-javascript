const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return -5', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
    });

    it('should return -2', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, -3.5), -2);
    });

    it('should return 3', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 3.5), 3);
    });

    it('should return -4', () => {
      assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    });

    it('shoild have type number', () => {
      assert.strictEqual(typeof calculateNumber('SUM', 1, 3), 'number');
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 5.5), -5);
    });

    it('should return -3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should return -2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3), -2);
    });

    it('should return 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.5), 2);
    });

    it('should return 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -3.5), 4);
    });

    it('should return -5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.5), -5);
    });

    it('should return -7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 6), -7);
    });

    it('should return 7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, -6), 7);
    });

    it('should have type number', () => {
      assert.strictEqual(typeof calculateNumber('SUBTRACT', 1, 3), 'number');
    });
  });

  describe('DIVIDE', () => {
    it('should return 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });

    it('should return 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 15, 4.5), 3);
    });

    it('should return 0.25', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should return 1.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, 5), 1.6);
    });

    it('should return 0.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });

    it('should return 0.25', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
    });

    it('should return -3.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.5, -2.5), -3.5);
    });

    it('should return -0.25', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 3.5), -0.25);
    });

    it('should return 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3, -1), 3);
    });

    it('should return -0.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1, 2), -0.5);
    });

    it('should return -0.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, -2), -0.5);
    });

    it('should return Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

    it('should have type number', () => {
      assert.strictEqual(typeof calculateNumber('DIVIDE', 1, 3), 'number');
    });

    it('should have type string', () => {
      assert.strictEqual(typeof calculateNumber('DIVIDE', 1, 0), 'string');
    });
  });
});
