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
