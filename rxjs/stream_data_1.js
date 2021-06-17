/**
 * @author wendleypf <wendleypf@gmail.com>
 */
function generateNumbers() {
  return {
    init(fn, timeout = 1000) {
      let number = 0
      const interval = setInterval(() => {
        fn(number++)
      }, timeout)

      return {
        stop() {
          clearInterval(interval)
        }
      }
    }
  }
}

const temp1 = generateNumbers()
const exec1 = temp1.init(number => {
  console.log(`#1 ${number * 2}`)
})

const temp2 = generateNumbers()
const exec2 = temp2.init(a => {
  console.log(`#2 ${a + 100}`)
}, 2000)


setTimeout(() => {
  exec1.stop()
  exec2.stop()
}, 10000)
