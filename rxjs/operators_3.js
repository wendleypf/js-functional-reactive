/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const {Observable} = require('rxjs')

/**
 *
 * @param elements
 * @param time
 * @return {Observable<unknown>}
 */
function ofWithDelay(time, ...elements) {
  return new Observable(subscriber => {
    (elements || []).forEach((element, index) => {
      setTimeout(() => {
        subscriber.next(element)
        if (elements.length === index + 1) {
          subscriber.complete()
        }
      }, time * (index + 1))
    })
  })
}

ofWithDelay(1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10).subscribe(console.log)
