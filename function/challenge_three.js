/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const fs = require('fs')
const path = require('path')

/**
 *
 * @param {string} path
 * @returns {Promise<unknown>}
 */
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, content) => {
      if(error) {
        reject(error)
      } else {
        resolve(content.toString())
      }
    })
  })
}

const pathToFile = path.join(__dirname, 'data.txt')
readFile(pathToFile).then((content) => {
  console.log(content)
}).catch((error) => {
  console.log(error)
})
