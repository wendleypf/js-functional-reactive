/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * @param {number} time
 * @returns {Promise}
 */
function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Running promise...')
      resolve()
    }, time)
  })
}

async function exec () {
  await waitFor(1000)
  console.log('Async/Await 1')

  await waitFor(1000)
  console.log('Async/Await 2')

  await waitFor(1000)
  console.log('Async/Await 3')
  return 10
}

exec().then(console.log)
