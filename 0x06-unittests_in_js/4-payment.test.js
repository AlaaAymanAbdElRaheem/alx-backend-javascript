const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  it('should Utils.calculateNumber called with ("SUM", 100, 20)', () => {
    const spyUtlis = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spyUtlis.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spyUtlis.restore();
  });

  it('should log with The total is: 10', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyLog = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(spyLog.calledWith('The total is: 10')).to.be.true;
    spyLog.restore();
  });
});
