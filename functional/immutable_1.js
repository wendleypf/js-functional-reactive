/**
 * @author wendleypf <wendleypf@gmail.com>
 */

function order(array) {
  return [...array].sort((a, b) => a - b)
}

const nums = [3, 1, 7, 9, 4, 5]
const numsOrder = order(nums)
console.log(nums, numsOrder)
