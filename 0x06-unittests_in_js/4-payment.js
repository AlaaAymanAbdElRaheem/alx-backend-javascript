const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const a = totalAmount;
  const b = totalShipping;
  const total = Utils.calculateNumber('SUM', a, b);
  console.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
