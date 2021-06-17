/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const path = require('path')
const utils = require('./utils')
const {sortBy} = require('lodash')
const {toArray, map} = require('rxjs/operators')

const directoryPath = path.join(__dirname, 'subtitles')
const symbols = ['.', '?', '!', '-', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']


utils.readDirSync(directoryPath)
  .pipe(
    utils.filterFilesWithTheExtension('.srt'),
    utils.readFile(),
    utils.separateTextBy('\n'),
    utils.removeIfEmpty(),
    utils.removeIfOnlyNumbers(),
    utils.removeSymbols(symbols),
    utils.separateTextBy(' '),
    utils.removeIfEmpty(),
    utils.removeIfOnlyNumbers(),
    toArray(),
    utils.groupWords(),
    map(array => sortBy(array, el => -el.amount))
  ).subscribe(console.log)
