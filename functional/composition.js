/**
 * @author wendleypf <wendleypf@gmail.com>
 */


function composition(...fns) {
  return function (value) {
    return fns.reduce((v, fn) => {
      return fn(v)
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
 * @return {string}
 */
const slow = text => text.split('').join(' ')

const exaggerated = composition(shoutOut, emphasize, slow)
const aLittleLessExaggerated = composition(shoutOut, emphasize)

const result1 = exaggerated('hello')
const result2 = aLittleLessExaggerated('word')
console.log(result1)
console.log(result2)
