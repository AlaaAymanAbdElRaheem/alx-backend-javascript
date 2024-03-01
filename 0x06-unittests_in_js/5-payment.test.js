const spy = require('sinon').spy;
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
let spyConsole;

beforeEach(() => {
  spyConsole = spy(console, 'log');
});

afterEach(() => {
  spyConsole.restore();
});

describe('sendPaymentRequestToApi', () => {
  it('call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.calledOnceWith('The total is: 20')).to.be.true;
  });
});
