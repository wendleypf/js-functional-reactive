/**
 * @author wendleypf <wendleypf@gmail.com>
 * Closure é quando uma função 'lembra' seu escopo léxico,
 * mesmo quando a função é executada fora desse escopo léxico.
 */
const closure_scope = require('./closure_scope')

const x = 100
console.log(closure_scope.sumXmore3())
console.log(closure_scope.outside())
