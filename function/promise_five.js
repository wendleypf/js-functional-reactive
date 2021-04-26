/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * @param {any} value
 * @param {number} chance
 * @returns {Promise<string|any>}
 */
function workOrNot (value, chance) {
  return new Promise(((resolve, reject) => {
    if (Math.random() < chance) {
      reject('An error has occurred.')
    } else {
      resolve(value)
    }
  }))
}

workOrNot(10, 0.2).then(console.log).catch(console.log)
