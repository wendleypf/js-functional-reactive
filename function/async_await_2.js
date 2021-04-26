/**
 * @author wendleypf <wendleypf@gmail.com>
 */
/**
 * @param {number} min
 * @param {number} max
 * @param {number[]} forbiddenNumbers
 * @returns {Promise<number>}
 */
function generateNumberBetween(min, max,forbiddenNumbers) {
  if (min > max) {
    [max, min] = [min, max]
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1
    const randomNumber = parseInt(Math.random() * factor) + min
    if (forbiddenNumbers.includes(randomNumber)) {
      reject('Repeated number.')
    } else {
      resolve(randomNumber)
    }
  })
}

/**
 * @param {number} numberOfNumbers
 */
async function generateMegaSena (numberOfNumbers) {
  try {
    const numbers = []
    for (let _ of Array(numberOfNumbers).fill()) {
      numbers.push(await generateNumberBetween(1,60, numbers))
    }
    return numbers
  } catch (error) {
    throw 'Is bad!!!'
  }
}

generateMegaSena(8).then(console.log).catch(console.log)
