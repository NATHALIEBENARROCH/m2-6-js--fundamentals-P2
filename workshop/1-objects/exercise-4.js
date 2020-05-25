// Exercise 4
// -------------------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.
console.log(Object.values(foodPairings));
// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."

// TRIAL 1
// foodPairings.forEach((key, values) => {
//   if (key) console.log(`with${key} it is best to have ${values}`);
// });
//INSPIRATION
// mostPopularFood.forEach((food, index) => {
//   if (food) console.log(`#${index + 1} is '${food}'`);
// });
for (let info in foodPairings) {
  let sentence = `With ${info} , it is best to have ${foodPairings[info]}`;
  console.log(sentence);
}
