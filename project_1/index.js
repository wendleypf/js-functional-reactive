/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const path = require('path')
const utils = require('./utils')

const directoryPath = path.join(__dirname, 'subtitles')
const symbols = ['.', '?', '-', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']


utils.readDirSync(directoryPath)
  .then(files => utils.filterFilesWithTheExtension(files, '.srt'))
  .then(utils.readFiles)
  .then(utils.mergeContent)
  .then(utils.separateTextBy('\n'))
  .then(utils.removeIfEmpty)
  .then(utils.removeIfInclude('-->'))
  .then(utils.removeIfOnlyNumbers)
  .then(utils.removeSymbols(symbols))
  .then(utils.mergeContent)
  .then(utils.separateTextBy(' '))
  .then(utils.removeIfEmpty)
  .then(utils.removeIfOnlyNumbers)
  .then(utils.groupWords)
  .then(utils.sortBy('amount', 'desc'))
  .then(console.log)
