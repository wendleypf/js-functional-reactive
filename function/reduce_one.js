/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const {mockProducts} = require('../mock/mock-product')

const cart = mockProducts()

/**
 * @param {{amount: number, price: number, name: string}} product
 * @returns {number}
 */
const totalValueOfEachItem = product => product.amount * product.price
/**
 * @param {number} acc
 * @param {number} el
 * @returns {number}
 */
const sum = (acc, el) => acc + el

const grandTotalOfItems = cart.map(totalValueOfEachItem).reduce(sum, 0)
console.log(grandTotalOfItems)

Array.prototype.myReduce = function (fn, initialValue) {
  let acc = initialValue
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i, this)
    }
  }
  return acc
}

const grandTotalOfItemsWithMyReduce = cart.map(totalValueOfEachItem).myReduce(sum, 0)
console.log(grandTotalOfItemsWithMyReduce)
