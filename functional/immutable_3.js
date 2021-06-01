/**
 * @author wendleypf <wendleypf@gmail.com>
 */

const people = {
  name: 'Josephe',
  height: 1.64,
  city: 'São Paulo'
}
// Assignment by reference
// const newPeople = people
/**
 * Passage by reference
 * function changePeople (newPeople) {
 *  newPeople.name = 'Alex'
 *  newPeople.city = 'Rio de Janeiro'
 * }
 */
function changePeople (people) {
  const newPeople = {...people}
  newPeople.name = 'Alex'
  newPeople.city = 'Rio de Janeiro'
  return newPeople
}

console.log(changePeople(people))
console.log(people)
