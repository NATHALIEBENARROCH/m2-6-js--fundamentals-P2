// Exercise 1
// -------------------
// Grubhub's "year in food" for 2018
// source: https://www.insider.com/most-popular-foods-grubhub-2018-12

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

mostPopularFood.push("buffalo-flavored cauliflower");
mostPopularFood.unshift("bean burritos");

mostPopularFood.forEach((food, index) => {
  if (food) console.log(`#${index + 1} is '${food}'`);
});

//OR

// for (x = 1; x < 11; x++) {
//   let food = mostPopularFood[x - 1];
//   if (food) console.log(`#${x} is '${food}'`);
// }

// The array holds a top-ten list of foods as ranked by Grubhub.
// #1 and #10 are missing
//       #1 is 'bean burritos'
//      #10 is 'buffalo-flavored cauliflower' (not kidding)

// Write a program that will do the following:
// Add them to the array in the right position
// Output them in a tidy top-ten fashion in the console.

// NO for loops (use `forEach` instead)
// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// values.forEach(mostPopularFood (item) {
//   console.log(item);
// });
