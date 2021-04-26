/**
 * @author wendleypf <wendleypf@gmail.com>
 */
/**
 * @param {number} min
 * @param {number} max
 * @param {number} time
 * @returns {Promise<number>}
 */
function generateNumberBetween(min, max, time) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(() => {
      const factor = max - min + 1
      const randomNumber = parseInt(Math.random() * factor) + min
      resolve(randomNumber)
    }, time)
  })
}

/**
 * @returns {Promise<number[]>}
 */
function generateSeveralNumbers () {
  return Promise.all([
    generateNumberBetween(1,60,4000),
    generateNumberBetween(1,60,1000),
    generateNumberBetween(1,60,500),
    generateNumberBetween(1,60,3000),
    generateNumberBetween(1,60,100),
    generateNumberBetween(1,60,1500),
  ])
}

console.time('promise')
generateSeveralNumbers()
  .then(console.log)
  .then(() => {
    console.timeEnd('promise')
  })
