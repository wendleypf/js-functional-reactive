/**
 * @author wendleypf <wendleypf@gmail.com>
 */

let value = new Promise(function (resolve) {
  resolve(3)
})

value.then(v => console.log(v))

/**
 * @param {string[]} array
 * @returns string
 */
function firstElement(array) {
  return array[0]
}

/**
 * @param {string} string
 * @returns string
 */
function firstLetter(string) {
  return string[0]
}

/**
 * @param {string} string
 * @returns string
 */
const upperCase = string => string.toLowerCase()

let array = new Promise(function (resolve) {
  resolve(['Car', 'Bike', 'Motorcycle', 'Boat'])
})

array.then(firstElement)
  .then(firstLetter)
  .then(upperCase)
  .then(console.log)
