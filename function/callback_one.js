/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * This callback shows something on the console.
 * @param {Function} cb
 * @param {number} a
 * @param {number} b
 */
function exec(cb, a, b) {
  cb(a, b)
}

/**
 * @param {number} a
 * @param {number} b
 */
const sum = (a, b) => console.log(a + b)

/**
 * @param {number} a
 * @param {number} b
 */
const subtraction = (a, b) => console.log(a - b)
exec(sum, 1, 5)
exec(subtraction, 4, 2)
