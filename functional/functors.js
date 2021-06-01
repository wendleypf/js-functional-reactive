/**
 * @author wendleypf <wendleypf@gmail.com>
 * Functors são objetos que implementam a função MAP
 * que também é um 'wrapper' de um valor
 */

const nums = [1, 4, 8, 9, 4]
const newNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, newNums)

function SafeType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined
    },
    map(fn) {
      if (this.invalid()) {
        return SafeType(null)
      }
      return SafeType(fn(this.value))
    },
    flatMap(fn) {
      return this.map(fn).value
    }
  }
}


const result = SafeType('Hello word')
  .map(text => text.toUpperCase())
  .map(text => `${text} !!`)
  .map(text => text.split('').join(' '))

const result2 = SafeType('Hello word')
  .map(text => text.toUpperCase())
  .map(text => `${text} !!`)
  .flatMap(text => text.split('').join(' '))

console.log(result.value)
console.log(result2)
