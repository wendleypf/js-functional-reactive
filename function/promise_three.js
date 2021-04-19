/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * @param {number} min
 * @param {number} max
 */
function generateNumberBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    const factor = max - min + 1
    const randomNumber = parseInt(Math.random() * factor) + min
    resolve(randomNumber)
  })
}

generateNumberBetween(1, 60)
  .then(num => num * 10)
  .then(numX10 => `The number generated was ${numX10}`).then(console.log)
