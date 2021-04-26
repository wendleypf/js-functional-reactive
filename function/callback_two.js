/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const fs = require('fs')
const path = require('path')

const pathToFile = path.join(__dirname, 'data.txt')

/**
 * @param _
 * @param {Buffer} content
 */
function showContent (_, content) {
  console.log(content.toString())
}

console.log('Init')
fs.readFile(pathToFile, showContent)
fs.readFile(pathToFile, (_, content) => console.log(content.toString()))
console.log('End')

console.log('Init Sync')
const content = fs.readFileSync(pathToFile)
console.log(content.toString())
console.log('End Sync')
