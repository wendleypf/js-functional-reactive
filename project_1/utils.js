/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const fs = require('fs')
const path = require('path')

/**
 *
 * @param {string} fileName
 * @param {string} extension
 * @returns {boolean}
 */
const isAFileWithTheExtension = (fileName, extension) => {
  return fileName.match(/\.[0-9a-z]+$/i)[0] === extension
}
/**
 *
 * @param {string[]} files
 * @param  {string} extension
 * @return {string[]}
 */
const filterFilesWithTheExtension = (files, extension) => files.filter(file => isAFileWithTheExtension(file, extension))
/**
 *
 * @param {string} string
 * @return {string[]}
 */
const removeNewLine = (string) => string.split(/\r\n|\n\r|\n|\r/)

/**
 *
 * @param {string[]} array
 * @return {string[]}
 */
const removeIfEmpty = (array) => array.filter(string => string.trim())

/**
 * @param patterns
 * @return {function(string[]): string[]}
 */
const removeIfInclude = (patterns) => {
  return function (array) {
    return array.filter(string => !string.includes(patterns))
  }
}

/**
 *
 * @param {string[]} array
 * @return {string[]}
 */
const removeIfOnlyNumbers = (array) => array.filter(string => {
  const number = parseInt(string.trim())
  return number !== number
})

/**
 *
 * @param {string[]} symbols
 * @return {function(string[]): string[]}
 */
const removeSymbols = symbols => {
  return function (array) {
    return array.map(string => {
      return symbols.reduce((newString, symbol) => {
        return newString.split(symbol).join('')
      }, string)
    })
  }
}

/**
 *
 * @param {string[]} contents
 * @return {string}
 */
const mergeContent = contents => contents.join(' ')

/**
 *
 * @param {string} symbol
 * @return {function(string): string[]}
 */
const separateTextBy = symbol => {
  return function (text) {
    return text.split(symbol)
  }
}

/**
 *
 * @param {string[]} words
 * @return  {{element: string, amount: number}[]}
 */
const groupWords = words => {
  return Object.values(words.reduce((grouping, word) => {
    const w = word.toLowerCase()
    const amount = grouping[w] ? grouping[w].amount + 1 : 1
    grouping[w] = {element: w, amount}
    return grouping
  }, {}))
}

/**
 * @param {string} props
 * @param {string} type
 * @return {function(string[]): *}
 */
const sortBy = (props, type = 'asc') => {
  return function (array) {
    const asc = (a, b) => a[props] - b[props]
    const desc = (a, b) => b[props] - a[props]
    return [...array].sort(type === 'asc' ? asc : desc)
  }
}

/**
 *
 * @param {string} path
 * @returns {Promise<string>}
 */
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(path, {encoding: 'utf-8'})
      resolve(content.toString())
    } catch (e) {
      reject(e)
    }
  })
}

/**
 *
 * @param {string[]} paths
 * @returns {Promise<string[]>}
 */
const readFiles = (paths) => Promise.all(paths.map(path => readFile(path)))

/**
 *
 * @param {string} directoryPath
 * @returns {Promise<string[]>}
 */
function readDirSync(directoryPath) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(directoryPath).map(file => path.join(directoryPath, file))
      resolve(files)
    } catch (e) {
      reject(e)
    }
  })
}

function composition(...fns) {
  return function (value) {
    return fns.reduce(async (v, fn) => {
      if (Promise.resolve(v) === v) {
        return fn(await v)
      } else {
        return fn(v)
      }
    }, value)
  }
}

module.exports = {
  filterFilesWithTheExtension,
  isAFileWithTheExtension,
  removeNewLine,
  removeIfEmpty,
  removeIfInclude,
  removeIfOnlyNumbers,
  removeSymbols,
  mergeContent,
  separateTextBy,
  groupWords,
  sortBy,
  readFile,
  readFiles,
  readDirSync,
  composition
}
