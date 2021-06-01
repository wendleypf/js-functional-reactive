/**
 * @author wendleypf <wendleypf@gmail.com>
 */
/**
 *
 * @param min
 * @return {function(number): function(Error): function(string): void}
 */
function textWithSizeBetween(min) {
  return max => {
    return error => {
      return text => {
        // Lazy Evaluation
        const length = (text || '').trim().length
        if (length < min || length > max) {
          throw error
        }
      }
    }
  }
}

/**
 *
 * @param fn
 * @return {(function(any=): ({error: *}|undefined))|*}
 */
function applyValidate(fn) {
  return value => {
    try {
      fn(value)
    } catch (e) {
      return {error: e.message}
    }
  }
}

const product = {name: 'A', price: 14.99, discount: 0.25}
const product2 = {name: 'AB', price: 25.99, discount: 0.20}
const forceStandardSize = textWithSizeBetween(4)(255)
const forceValidProductName = forceStandardSize(new Error('Name invalid'))
const validateProductName = applyValidate(forceValidProductName)
console.log(validateProductName(product.name))
console.log(validateProductName(product2.name))
