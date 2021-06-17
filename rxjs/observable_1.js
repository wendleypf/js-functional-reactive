/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const {Observable} = require('rxjs')

const promise = new Promise(resolve => {
  resolve('Promise is cool.')
})
promise.then(console.log)

const observable = new Observable(subscriber => {
  subscriber.next('Observable is cool.')
  subscriber.next('is')
  setTimeout(() => {
    subscriber.next('cool.')
    subscriber.complete()
  }, 1000)
})
observable.subscribe(console.log)
observable.subscribe(text => console.log(text.toUpperCase()))
