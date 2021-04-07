/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const goodMorning = () => console.log('Good Morning!')
goodMorning()

/**
 * @param {string} name
 * @returns {string}
 */
const salutation = name => `Hello ${name} !`
console.log(salutation('Wendley'))

/**
 * @param {number[]} numbers
 * @returns {number}
 */
const sum = numbers => {
  let total = 0
  for (let n of numbers) {
    total += n
  }
  return total
}
console.log(sum([1, 2, 3, 4, 5, 6]))

/**
 *
 * @param {number} numbers
 * @returns {number}
 */
const sumRestParameters = (...numbers) => {
  let total = 0
  for (let n of numbers) {
    total += n
  }
  return total
}
console.log(sumRestParameters(1, 2, 3, 4, 5, 6, 7, 8, 9))

/**
 * Return a function from another function
 * @param {number} base
 * @returns {function}
 */
const pow = base => exponent => Math.pow(base, exponent)
const pow2 = pow(2)
console.log(pow2(8))

const pow34 = pow(3)(4)
console.log(pow34)
