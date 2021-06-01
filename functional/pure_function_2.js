/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function generateRandomNumber(min, max) {
  const factor = max - min + 1
  return parseInt(Math.random() * factor) + min
}

console.log(generateRandomNumber(5, 6))
console.log(generateRandomNumber(5, 6))
console.log(generateRandomNumber(5, 6))
