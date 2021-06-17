/**
 * @author wendleypf <wendleypf@gmail.com>
 */
/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const path = require('path')
const utils = require('./utils')
const {sortBy} = require('lodash')
const {toArray, map, groupBy, mergeMap, reduce} = require('rxjs/operators')

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
    groupBy(el => el),
    mergeMap(grupo => grupo.pipe(toArray())),
    map(words => ({element: words[0], amount: words.length})),
    toArray(),
    map(array => sortBy(array, el => -el.amount))
  ).subscribe(console.log)

