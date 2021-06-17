/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const readLine = require('readline')

/**
 * @param {string} question
 */
function getAnswer(question) {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    rl.question(question, resp => {
      resolve(resp)
      rl.close()
    })
  })
}

function Girlfriend() {
  console.log('G: turn off the lights. 💡')
  console.log('G: ask for silence. 🤫')
  console.log('G: surprise!!! 🎉 🎉')
}

function BuildingManager() {
  console.log('BM: monitoring noise.')
}

async function Concierge(interested) {
  while (true) {
    const response = await getAnswer('Has the boyfriend arrived? (y/N,q) ')
    if (response.toLowerCase() === 'y') {
      (interested || []).forEach(obs => obs())
    } else if (response.toLowerCase() === 'q') {
      break
    }
  }
}

Concierge([Girlfriend, BuildingManager])
