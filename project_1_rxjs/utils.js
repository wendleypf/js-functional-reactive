/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const fs = require('fs')
const path = require('path')
const {Observable} = require('rxjs')

function createPipeOperator(operatorFn) {
  return source => {
    return new Observable(subscriber => {
      const {next, error, complete} = operatorFn(subscriber)
      source.subscribe({
        next,
        error: error || (e => subscriber.error(e)),
        complete: complete || (() => subscriber.complete())
      })
    })
  }
}

/**
 *
 * @param {string} fileName
 * @param {string} extension
 * @returns {boolean}
 */
const isAFileWithTheExtension = (fileName, extension) => {
  return fileName.match(/\.[0-9a-z]+$/i)[0] === extension
}

const filterFilesWithTheExtension = (extension) => {
  return createPipeOperator(subscriber => ({
    next(file) {
      if (isAFileWithTheExtension(file, extension)) {
        subscriber.next(file)
      }
    }
  }))
}


const removeIfEmpty = () => {
  return createPipeOperator(subscriber => ({
    /**
     * @param {string} string
     */
    next(string) {
      if (string.trim()) {
        subscriber.next(string)
      }
    }
  }))
}

/**
 * @param patterns
 * @return {function(string[]): string[]}
 */
const removeIfInclude = (patterns) => {
  return function (array) {
    return array.filter(string => !string.includes(patterns))
  }
}

const removeIfOnlyNumbers = () => {
  return createPipeOperator(subscriber => ({
    /**
     * @param {string} string
     */
    next(string) {
      const number = parseInt(string.trim())
      if (number !== number) {
        subscriber.next(string)
      }
    }
  }))
}

const removeSymbols = symbols => {
  return createPipeOperator(subscriber => ({
    next(string) {
      const textWithNotSymbols = symbols.reduce((newString, symbol) => {
        return newString.split(symbol).join('')
      }, string)
      subscriber.next(textWithNotSymbols)
    }
  }))
}


const separateTextBy = symbol => {
  return createPipeOperator(subscriber => ({
    next(text) {
      text.split(symbol).forEach(t => subscriber.next(t))
    }
  }))
}

const groupWords = () => {
  return createPipeOperator(subscriber => ({
    next(words) {
      const group = Object.values(words.reduce((grouping, word) => {
        const w = word.toLowerCase()
        const amount = grouping[w] ? grouping[w].amount + 1 : 1
        grouping[w] = {element: w, amount}
        return grouping
      }, {}))
      subscriber.next(group)
    }
  }))
}

const readFile = () => {
  return createPipeOperator(subscriber => ({
    next(path) {
      try {
        const content = fs.readFileSync(path, {encoding: 'utf-8'})
        subscriber.next(content.toString())
      } catch (e) {
        subscriber.error(e)
      }
    }
  }))
}


/**
 *
 * @param {string} directoryPath
 * @returns {Observable<string[]>}
 */
function readDirSync(directoryPath) {
  return new Observable(subscriber => {
    try {
      fs.readdirSync(directoryPath).forEach(file => {
        subscriber.next(path.join(directoryPath, file))
      })
      subscriber.complete()
    } catch (e) {
      subscriber.error(e)
    }
  })
}

module.exports = {
  filterFilesWithTheExtension,
  isAFileWithTheExtension,
  removeIfEmpty,
  removeIfInclude,
  removeIfOnlyNumbers,
  removeSymbols,
  separateTextBy,
  groupWords,
  readFile,
  readDirSync
}
