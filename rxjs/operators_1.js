/**
 * There are two types
 * 1 - Creation operators
 * 2 - Pipeline operators
 * @author wendleypf <wendleypf@gmail.com>
 */

const {of} = require('rxjs')
const {last, map} = require('rxjs/operators')

of(1, 2, 'Alex', false, 'end')
  .pipe(
    last(),
    map(value => value[0])
  )
  .subscribe({
    next: value => {
      console.log(`the generated value was ${value}`)
    }
  })
