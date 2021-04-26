/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const faker = require('faker')

/**
 *
 * @returns {{amount: number, price: number, name: string}}
 */
const mockProduct = () => ({
  name: faker.lorem.word(),
  amount: faker.datatype.number({min: 1, max: 100}),
  price: faker.datatype.float({min: 1, max: 1000})
})

/**
 * @param {number} arrayLength
 * @returns {{amount: number, price: number, name: string}[]}
 */
const mockProducts = (arrayLength = 6) => Array(arrayLength).fill(null).map((_) => mockProduct())

module.exports = {
  mockProduct,
  mockProducts
}
