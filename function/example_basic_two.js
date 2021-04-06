/**
 * @author wendleypf <wendleypf@gmail.com>
 */

function goodMorning() {
  console.log('Good Morning!')
}

const goodAfternoon = function () {
  console.log('Good Afternoon!')
}

/**
 * Function as parameters
 * @param {Function} fn
 */
function executeAnything (fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

executeAnything(3)
executeAnything(goodMorning)
executeAnything(goodAfternoon)

/**
 * Return a function from another function
 * @param {number} base
 * @returns {function}
 */
function pow (base) {
  return function (exponent) {
    return Math.pow(base, exponent)
  }
}

const pow2 = pow(2)
console.log(pow2(8))

const pow34 = pow(3)(4)
console.log(pow34)
