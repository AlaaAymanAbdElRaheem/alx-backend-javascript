const request = require('request');
const expect = require('chai').expect;

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
