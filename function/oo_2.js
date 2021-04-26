/**
 * @author wendleypf <wendleypf@gmail.com>
 */

class Product {
  /**
   * @param {string} name
   * @param {number} price
   * @param {number=} discount
   */
  constructor(name, price, discount = 0.15) {
    this.name = name
    this.price = price
    this.discount = discount
  }

  /**
   * @returns {string}
   */
  get name () {
    return `Product ${this._name}`
  }

  /**
   * @param {string} newName
   */
  set name (newName) {
    this._name = newName.toUpperCase()
  }

  /**
   * @returns {number}
   */
  get price () {
    return this._price
  }

  /**
   * @param {number} newPrice
   */
  set price (newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice
    }
  }

  /**
   * @returns {number}
   */
  get finalPrice () {
    return this.price * (1 - this.discount)
  }
}

const productOne = new Product('Pen', 10)
const productTwo = new Product('fridge', 500)
console.log(productOne.name)
console.log(productTwo.price)
console.log(productTwo.finalPrice)
