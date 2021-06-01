/**
 * @author wendleypf <wendleypf@gmail.com>
 */
/**
 *
 * @param {number} min
 * @param {number} max
 * @param {Error} error
 * @param {string} text
 */
function textWithSizeBetween(min, max, error, text) {
  const length = (text || '').trim().length
  if (length < min || length > max) {
    throw error
  }
}

const product = {name: 'A', price: 14.99, discount: 0.25}
textWithSizeBetween(4, 255, new Error('Name invalid'), product.name)
