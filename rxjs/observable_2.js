/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const {Observable} = require('rxjs')

const observable = new Observable(subscriber => {
  subscriber.next('RxJS')
  subscriber.next('it\'s')
  subscriber.next('very')
  subscriber.next('powerful')
  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('Error!!')
  }
})

observable.subscribe({
  next: console.log,
  error: console.error,
  complete: () => {
    console.log('end')
  }
})
