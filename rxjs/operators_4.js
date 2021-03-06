/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const {from, Observable} = require('rxjs')

function first() {
  return function (source) {
    return new Observable(subscriber => {
      source.subscribe({
        next: (value) => {
          subscriber.next(value)
          subscriber.complete()
        }
      })
    })
  }
}

function last() {
  return function (source) {
    return new Observable(subscriber => {
      let last
      source.subscribe({
        next: (value) => {
          last = value
        },
        complete: () => {
          subscriber.next(last)
          subscriber.complete()
        }
      })
    })
  }
}

from([1, 2, 3, 4, 5])
  .pipe(last())
  .subscribe(console.log)
