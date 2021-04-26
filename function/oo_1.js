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
  this.discount = discount

  this.finalPrice = () => this.price * (1 - this.discount)
}

const productOne = new Product('Pen', 10)
const productTwo = new Product('fridge', 500)
console.log(productOne.name)
console.log(productTwo.price)
console.log(productTwo.finalPrice())
