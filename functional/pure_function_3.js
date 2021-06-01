/**
 * @author wendleypf <wendleypf@gmail.com>
 */

let countExecution = 0
const sum = (a, b) => {
  countExecution++
  return a + b
}
console.log(countExecution)
console.log(sum(1, 2))
console.log(sum(1, 2))
console.log(sum(1, 2))
console.log(sum(1, 2))
console.log(sum(1, 2))
console.log(countExecution)
