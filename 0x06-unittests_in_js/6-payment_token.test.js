const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return promise object', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
