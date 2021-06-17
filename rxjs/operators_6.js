/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const {from, Observable} = require('rxjs')

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

function first() {
  return createPipeOperator(subscriber => ({
    next: (value) => {
      subscriber.next(value)
      subscriber.complete()
    }
  }))
}

function none() {
  return createPipeOperator(subscriber => ({
    next: () => subscriber.complete()
  }))
}

function last() {
  return createPipeOperator(subscriber => {
    let last
    return {
      next: (value) => {
        last = value
      },
      complete: () => {
        subscriber.next(last)
        subscriber.complete()
      }
    }
  })
}

from([1, 2, 3, 4, 5])
  .pipe(last())
  .subscribe(console.log)
