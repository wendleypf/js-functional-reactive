/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const {Observable} = require('rxjs')


/**
 *
 * @param {number} min
 * @param {number} max
 * @return {Observable<number>}
 */
function between(min, max) {
  if (min > max) [min, max] = [max, min]
  return new Observable(subscriber => {
    for (let i = min; i <= max; i++) {
      subscriber.next(i)
    }
    subscriber.complete()
  })
}


between(10, 1).subscribe({
  next: console.log,
  complete: () => console.log('end!')
})

