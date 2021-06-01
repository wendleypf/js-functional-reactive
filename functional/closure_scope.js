/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const x = 3

function outside() {
  const x = 97
  function sumXmore3() {
    return x + 3
  }
  return sumXmore3()
}

function sumXmore3() {
  return x + 3
}

module.exports = { sumXmore3, outside }

