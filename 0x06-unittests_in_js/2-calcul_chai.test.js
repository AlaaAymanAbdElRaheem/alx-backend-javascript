const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('calculateNumber', () => {
    describe('SUM', () => {
      it('should return 6', () => {
        chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });

      it('should return 4', () => {
        chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      });

      it('should return 5', () => {
        chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      });

      it('should return 5', () => {
        chai.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      });

      it('should return 6', () => {
        chai.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      });

      it('should return -5', () => {
        chai.expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
      });

      it('should return -2', () => {
        chai.expect(calculateNumber('SUM', 1.4, -3.5)).to.equal(-2);
      });

      it('should return 3', () => {
        chai.expect(calculateNumber('SUM', -1.4, 3.5)).to.equal(3);
      });

      it('should return -4', () => {
        chai.expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
      });

      it('shoild have type number', () => {
        chai.expect(typeof calculateNumber('SUM', 1, 3)).to.equal('number');
      });
    });

    describe('SUBTRACT', () => {
      it('should return -2', () => {
        chai.expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      });

      it('should return -5', () => {
        chai.expect(calculateNumber('SUBTRACT', 1.4, 5.5)).to.equal(-5);
      });

      it('should return -3', () => {
        chai.expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      });

      it('should return -2', () => {
        chai.expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
      });

      it('should return -2', () => {
        chai.expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      });

      it('should return 3', () => {
        chai.expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
      });

      it('should return 4', () => {
        chai.expect(calculateNumber('SUBTRACT', 1.4, -3.5)).to.equal(4);
      });

      it('should return -7', () => {
        chai.expect(calculateNumber('SUBTRACT', -1, 6)).to.equal(-7);
      });

      it('should return 7', () => {
        chai.expect(calculateNumber('SUBTRACT', 1, -6)).to.equal(7);
      });

      it('should have type number', () => {
        chai
          .expect(typeof calculateNumber('SUBTRACT', 1, 3))
          .to.equal('number');
      });
    });

    describe('DIVIDE', () => {
      it('should return 2', () => {
        chai.expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
      });

      it('should return 3', () => {
        chai.expect(calculateNumber('DIVIDE', 15, 4.5)).to.equal(3);
      });

      it('should return 0.25', () => {
        chai.expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      });

      it('should return 1.6', () => {
        chai.expect(calculateNumber('DIVIDE', 7.5, 5)).to.equal(1.6);
      });

      it('should return 0.5', () => {
        chai.expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      });

      it('should return 0.25', () => {
        chai.expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.equal(0.25);
      });

      it('should return -3.5', () => {
        chai.expect(calculateNumber('DIVIDE', 6.5, -2.5)).to.equal(-3.5);
      });

      it('should return -0.25', () => {
        chai.expect(calculateNumber('DIVIDE', -1.4, 3.5)).to.equal(-0.25);
      });

      it('should return 3', () => {
        chai.expect(calculateNumber('DIVIDE', -3, -1)).to.equal(3);
      });

      it('should return -0.5', () => {
        chai.expect(calculateNumber('DIVIDE', -1, 2)).to.equal(-0.5);
      });

      it('should return -0.5', () => {
        chai.expect(calculateNumber('DIVIDE', 1, -2)).to.equal(-0.5);
      });

      it('should return Error', () => {
        chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
      });

      it('should have type number', () => {
        chai.expect(typeof calculateNumber('DIVIDE', 1, 3)).to.equal('number');
      });

      it('should have type string', () => {
        chai.expect(typeof calculateNumber('DIVIDE', 1, 0)).to.equal('string');
      });
    });
  });
});
