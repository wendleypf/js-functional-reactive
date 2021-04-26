/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 *
 * @param {number} a
 * @returns {function}
 */
function sum (a) {
  /**
   * @param {number} b
   * @returns {function}
   */
  return function (b) {
    /**
     * @param {number} c
     * @returns {number}
     */
    return function (c) {
      return a + b + c
    }
  }
}

/**
 *
 * @param {number} a
 * @returns {function(*=): function(*): *}
 */
function calculate(a) {
  /**
   * @param {number} b
   * @returns {function}
   */
  return function (b) {
    /**
     * @param {function} fn
     * @returns {number}
     */
    return function (fn) {
      return fn(a,b)
    }
  }
}

const result = sum(1)(2)(3)
console.log(result)

console.log('sum', calculate(1)(2)((a, b) => a + b))
console.log('subtraction', calculate(4)(3)((a, b) => a - b))
console.log('multiplication', calculate(4)(2)((a, b) => a * b))
console.log('division', calculate(2)(1)((a, b) => a / b))
