/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * #3 - Recursion
 */
/**
 *
 * @param {number[]} array
 * @param {number}total
 */
function sum(array, total = 0) {
  if (array.length === 0) {
    return total
  }
  return sum(array.slice(1), total + array[0])
}

const nums = [3, 1, 7, 9, 4, 5]
const total = sum(nums)
console.log(total)

/**
 * #2 - Reduce
 * const nums = [3, 1, 7, 9, 4, 5]
 * const sum = (a, b) => a + b
 * const total = nums.reduce(sum)
 * console.log(total)
 */
/**
 * #1 - changeable data
 *
 * const nums = [3, 1, 7, 9, 4, 5]
 * let total = 0
 * for (let i = 0; i < nums.length; i++) {
 *  total += nums[i]
 * }
 * console.log(total)
 */
