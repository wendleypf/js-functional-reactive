/**
 * @author wendleypf <wendleypf@gmail.com>
 * Diz-se que uma linguagem de programção possui
 * funções de primeira classe quando função nessa
 * linguagem são tratadas como qualquer outra variavel.
 */

const x = 3
const y = function (text) {
  return `This is text: ${text}`
}

console.log(x)
console.log(y('Hello'))
