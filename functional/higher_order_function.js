/**
 * @author wendleypf <wendleypf@gmail.com>
 * Funções que operam em outras funções,
 * tonando-as como argumentos ou retornando-as,
 * são chamadas de higher-order functions.
 */

/**
 * @param {function} fn
 * @param {Any} params
 */
function exec(fn, ...params) {
  return function (text) {
    return `${text} ${fn(...params)}!`
  }
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function sum(a, b, c) {
  return a + b + c
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function multi(a, b) {
  return a * b
}

const result1 = exec(sum, 4, 5, 6)('The result of the sum is')
const result2 = exec(multi, 30, 40)('The result of the multi is')
console.log(result1)
console.log(result2)
