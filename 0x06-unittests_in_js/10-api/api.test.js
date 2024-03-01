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

describe('GET /cart/12', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('shoild return status code 404', (done) => {
    request('http://localhost:7865/cart/b', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/login', () => {
  it('should return status code 200', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: {
        userName: 'Betty',
      },
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status code 404', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'GET',
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('GET /available_payments', () => {
  it('should return status code 200', (done) => {
    request(
      'http://localhost:7865/available_payments',
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}',
        );
        done();
      },
    );
  });
});
