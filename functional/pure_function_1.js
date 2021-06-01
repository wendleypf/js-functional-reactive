/**
 * @author wendleypf <wendleypf@gmail.com>
 * Uma pure function é uma função em que o valor de retorno é determinado APENAS por seus
 * valores de entrada, sem efeitos colaterais observáveis
 */

const PI = 3.14

/**
 * This function is not a pure function, because dependency of the variable PI.
 * @param {number} radius
 */
function circleArea(radius) {
  return radius * radius * Math.PI
}
console.log(circleArea(10))

/**
 * This function is a pure function, because not have dependency of the variables external.
 * @param {number} radius
 * @param {number} pi
 */
function circleAreaPure(radius, pi) {
  return radius * radius * pi
}

console.log(circleAreaPure(10, Math.PI))
console.log(circleAreaPure(10, 3.14))
console.log(circleAreaPure(10, 3.141592))
