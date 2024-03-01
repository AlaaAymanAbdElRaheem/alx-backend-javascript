const spy = require('sinon').spy;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  it('should Utils.calculateNumber called with ("SUM", 100, 20)', () => {
    const spyUtlis = spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spyUtlis.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spyUtlis.restore();
  });
});
