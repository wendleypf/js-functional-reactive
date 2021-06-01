/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const path = require('path')
const utils = require('./utils')

const directoryPath = path.join(__dirname, 'subtitles')
const symbols = ['.', '?', '-', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']

const processing = utils.composition(utils.readDirSync,
  files => utils.filterFilesWithTheExtension(files, '.srt'),
  utils.readFiles,
  utils.mergeContent,
  utils.separateTextBy('\n'),
  utils.removeIfEmpty,
  utils.removeIfInclude('-->'),
  utils.removeIfOnlyNumbers,
  utils.removeSymbols(symbols),
  utils.mergeContent,
  utils.separateTextBy(' '),
  utils.removeIfEmpty,
  utils.removeIfOnlyNumbers,
  utils.groupWords,
  utils.sortBy('amount', 'desc'))
processing(directoryPath).then(console.log)
