/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * @constructor
 * @param {string} name
 * @param {number} price
 * @param {number=} discount
 */
function Product(name, price, discount = 0.15) {
  this.name = name
  this.price = price
  this._discount = discount
  /**
   * @returns {number}
   */
  this.finalPrice = () => this.price * (1 - this._discount)
}

Product.prototype.log = function () {
  console.log(`Name: ${this.name}, Price: R$ ${this.price}`)
}


Object.defineProperty(Product.prototype, 'discount', {
  /**
   * @returns {number|any}
   */
  get: function () {
    return this._discount
  },
  /**
   * @param {number} newDiscount
   */
  set: function (newDiscount) {
    if (newDiscount >= 0 && newDiscount <= 1) {
      this._discount = newDiscount
    }
  }
})

Object.defineProperty(Product.prototype, 'discountString', {
  /**
   * @returns {string}
   */
  get: function () {
    return `${this._discount * 100}%`
  }
})

const productOne = new Product('Pen', 10)
const productTwo = new Product('fridge', 500)
console.log(productOne.name)
console.log(productOne.discount)
console.log(productOne.discountString)
productOne.discount = 0.20
console.log(productOne.discount)
console.log(productOne.discountString)
console.log(productOne.name)
productOne.log()
console.log(productTwo.price)
console.log(productTwo.finalPrice())
