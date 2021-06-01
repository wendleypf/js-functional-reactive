/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const letters = [
  'H', 'e', 'l', 'l', 'o',
  ' ',
  'w', 'o', 'r', 'd',
  '!', '!', '!', '!'
]

const result = letters.map(t => t.toUpperCase()).reduce((a, b) => a + b)
console.log(result)
