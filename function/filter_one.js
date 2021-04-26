/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const {mockProducts} = require('../mock/mock-product')

const cart = mockProducts()

/**
 * @param {{amount: number, price: number, name: string}} product
 * @returns {boolean}
 */
const amountGreaterThanZero = product => product.amount > 0
/**
 * @param {{amount: number, price: number, name: string}} product
 * @returns {string}
 */
const productName = product => product.name

const nameValidProducts = cart.filter(amountGreaterThanZero).map(productName)
console.log(nameValidProducts)

Array.prototype.myFilter = function (fn) {
  const array = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      array.push(this[i])
    }
  }
  return array
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter(n => n % 2 === 0))
