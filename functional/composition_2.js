/**
 * @author wendleypf <wendleypf@gmail.com>
 */


function composition(...fns) {
  return function (value) {
    return fns.reduce(async (v, fn) => {
      if (Promise.resolve(v) === v) {
        return fn(await v)
      } else {
        return fn(v)
      }
    }, value)
  }
}

/**
 * @param {string} text
 * @return {string}
 */
const shoutOut = text => text.toUpperCase()

/**
 *
 * @param {string} text
 * @return {string}
 */
const emphasize = text => `${text} !!`

/**
 *
 * @param {string} text
 * @return {Promise<string>}
 */
const slow = text => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(text.split('').join(' '))
    }, 3000)
  })
}

const exaggerated = composition(shoutOut, emphasize, slow)
const aLittleLessExaggerated = composition(shoutOut, emphasize)

exaggerated('hello').then(console.log)
aLittleLessExaggerated('word').then(console.log)
