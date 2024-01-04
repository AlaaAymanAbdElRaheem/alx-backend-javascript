import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    /* eslint-disable */
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('Amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('Currency must be a Currency');
    } else {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    /* eslint-disable */
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw TypeError('Amount and conversionRate must be a number');
    } else {
      return amount * conversionRate;
    }
  }
}

export default Pricing;
