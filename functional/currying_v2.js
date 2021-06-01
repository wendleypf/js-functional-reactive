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

const product = {name: 'A', price: 14.99, discount: 0.25}
const forceStandardSize = textWithSizeBetween(4)(255)
const forceValidProductName = forceStandardSize(new Error('Name invalid'))
forceValidProductName(product.name)
