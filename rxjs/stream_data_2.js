/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 *
 * @param {any} array
 * @return {{stop(): void}|{init(*): {stop(): void}}}
 */
function generateElements(array) {
  return {
    init(fn) {
      let index = 0
      const interval = setInterval(() => {
        if (index >= array.length) {
          clearInterval(interval)
        } else {
          fn(array[index])
          index++
        }
      }, 1000)

      return {
        stop() {
          clearInterval(interval)
        }
      }
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const temp1 = generateElements(numbers)
const exec1 = temp1.init(num => {
  console.log(2 ** num)
})

setTimeout(() => {
  exec1.stop()
}, 4000)

