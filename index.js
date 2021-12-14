//write your code here
// Q1
// function averageAge(alumni) {
//   return  alumni.reduce((person) => Math.floor(person.age) / ??)
// }

// // Q2
// function bananaBread(alumni) {
//   return alumni.map(person => person.bananaBread = `${person.name} got banana bread at ${person.job}`) 
//   return student;
// }

// // Q3
// function ninetiesBabies(alumni) {
//   return alumni.filter(person => person.age > 21)
// }

// // Q4
// function addSchool(alumni) {
//   return alumni.map(person => person.school = "Marcy Lab School")
// }

// Q5
function allUseJavaScript(alumni) {
  return alumni.every(person => person.language === "JavaScript")
}
console.log(allUseJavaScript([
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}]))
// // Q6
// function noVowel(animals) {
//   const regex = [aeiou]
//   return animals.filter(creature => creature.replace(regex, x))
// }

// // Q7
// function onlyVowelA() {
  
// }