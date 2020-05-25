// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
  { name: { first: "Nathalie", middle: "Sarah", last: "Benarroch" }, age: 56 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

//-------------------------------------------------
function averageAge(peopleArr) {
  ///!!!!!!!why arr
  let sumAges = 0;
  const numberAges = peopleArr.length;

  peopleArr.forEach((person) => {
    sumAges += person.age;
  });
  return sumAges / numberAges;
}

console.log(`The average age is ${averageAge(people)}.`);
// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?
// TRIAL 0
// people.forEach((person) => {
//   if (person === " ") {
//     console.log(person.name);
//   }
// });
// LIKE BELOW
// staffMembers.forEach((member) => {
//   if (member.name === "Chuck Taylor") {
//     console.log(member.skillLevels.javascript);
//   }
// });
// TRIAL 1
// console.log(Object.values(people.name));
// TRIAL 2
// function fullName(peopleArr) {
//   // Your code here
// function fullName(peopleArr) {
//   const peopleNames = [];
//   peopleArr.forEach((person) => {
//     const fullName = Object.values(person.name).join(" ");
//     peopleNames.push(fullName);
//   });

//   return peopleNames;
// }
// TRIAL 3
// function fullNameMap(peopleArr) {
//   return peopleArr.map((person) => {
//     const allNames = Object.values(person.name);
//     const fullNames = allNames.join(" ");

//     return fullNames;
//   });
// }
// console.log(fullNameMap(people));
//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// // returns an array of just the people that are older than the specified age..
// MY START
// function olderPeople(peopleArr, age);
//   if (people.age > 26)
//   return
// Your code here

function olderPeople(peopleArr, age) {
  return peopleArr.filter((person) => {
    return person.age > age;
  });
}

console.log(olderPeople(people, 26));
