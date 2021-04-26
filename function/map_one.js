/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const {mockProducts} = require('../mock/mock-product')
const numbers = [1, 2, 3, 4, 5]
/**
 * @param {number} number
 * @returns {number}
 */
const double = number => number * 2
console.log(numbers.map(double))

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
/**
 * @param {string} text
 * @returns {string}
 */
const firstLetter = text => text[0]
console.log(names.map(firstLetter))

const cart = mockProducts()

/**
 * @param {{amount: number, price: number, name: string}} product
 * @returns {string}
 */
const productName = product => product.name
/**
 *
 * @param  {{amount: number, price: number, name: string}} product
 * @returns {number}
 */
const stockValueOfEachProduct = product => product.amount * product.price

console.log(cart.map(productName))
console.log(cart.map(stockValueOfEachProduct))

/**
 * @param fn
 * @returns {*[]}
 */
Array.prototype.myMap = function (fn) {
  const array = []
  for (let i = 0; i < this.length; i++) {
    array.push(fn(this[i], i, this))
  }
  return array
}

console.log([1, 2, 3, 4, 5].myMap((n, i) => n * 2 * i))
