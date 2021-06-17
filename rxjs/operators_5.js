/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const {of, Observable} = require('rxjs')

/**
 *
 * @param {string} string
 * @return {function(*): Observable<string>}
 */
function endsWith(string) {
  return function (source) {
    return new Observable(subscriber => {
      source.subscribe({
        next: (value) => {
          if (Array.isArray(value)) {
            subscriber.next(value.filter(v => v.endsWith(string)))
          } else if (value.endsWith(string)) {
            subscriber.next(value)
          }
        },
        error: err => {
          subscriber.error(err)
        },
        complete: () => {
          subscriber.complete()
        }
      })
    })
  }
}

of(['Marie Gates', 'Paul Gates', 'Alex Alen', 'Greg Martin'])
  .pipe(endsWith('Gates'))
  .subscribe(console.log)
