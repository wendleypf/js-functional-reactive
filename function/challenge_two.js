/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const faker = require('faker')
const {mockProducts} = require('../mock/mock-product')

const cart = mockProducts().map(product => ({...product, fragile: faker.datatype.boolean()}))

/**
 * 1 - fragile is true
 * 2 - amount * price -> Total
 * 3 - average total
 */

/**
 * @param {{amount: number, price: number, name: string}} product
 * @returns {number}
 */
const totalValueOfEachItem = product => product.amount * product.price

/**
 *
 * @param {{amount: number, total: number, avg: number}} acc
 * @param {number }el
 * @returns {{amount: number, total: number, avg: number}}
 */
const avgOfTheProduct = (acc, el) => {
  const amount = acc.amount + 1
  const total = acc.total + el
  return {
    amount,
    total,
    avg: total / amount
  }
}

const avg = cart.filter(product => product.fragile)
  .map(totalValueOfEachItem)
  .reduce(avgOfTheProduct, {amount: 0, total: 0, avg: 0})
console.log(avg)
