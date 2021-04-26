/**
 * @author wendleypf <wendleypf@gmail.com>
 */

/**
 * Callback Hell
 */

// setTimeout(function () {
//   console.log('Running callback...')
//   setTimeout(function () {
//     console.log('Running callback...')
//     setTimeout(function () {
//       console.log('Running callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)

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

waitFor().then(() => waitFor()).then(waitFor)
