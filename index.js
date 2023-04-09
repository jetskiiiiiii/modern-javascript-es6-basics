// Task 1: Introduction

// console.log("Hello,ES6");

// ---------------------------------------------
// Task 2: Variables (let) and Scoping

// Task 2: Execise 1: Fix the code to print 15

// let age = 15;

// for (let age = 1; age <= 10; age++) {
//   console.log(age);
// }

// console.log(age); // Should print 15 instead of 10

// // Task 2: Execise 2: Fix the code to print Jack Russell Terrier

// let myDog = "Jack Russell Terrier";
// let shortLeggies = true;

// if (shortLeggies) {
//   let myDog = "Welsh Corgie";
//   console.log(myDog);
// } else {
//   let myDog = "Border Collie";
//   console.log(myDog);
// }

// console.log(myDog); // Jack Russell Terrier

// ---------------------------------------------
// Task 3: Variables (const) and Immutability

// TASK 3: Exercise: Refactor the code to use let/const

// const painter = {
//   name: "Van Gogh",
//   nationality: "Dutch",
//   paintings: ["The Starry Night", "Irises", "Almond Blossoms"],
// };

// Object.freeze(painter);
// // Object.freeze(painter.paintings);
// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

// console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

// ---------------------------------------------
// TASK 4: Destructuring

// Task 4: Exercise: Extract data with destructuring

const ingredients = {
  //   tea: "black",
  milk: "soy",
  sweetener: "honey",
  spices: ["ginger", "cardamom", "cinnamon", "nutmeg"],
};

const { milk: myMilk, ...myIngredients } = ingredients;
console.log(myMilk, myIngredients);

const dupe = ["max", "jade", "luke"];
const [, , luke] = dupe;
console.log(luke);

// Destructure the parameters
function prepareChai({
  tea = "black",
  milk = "white",
  sweetener = "red",
  spices = "brown",
}) {
  //   const tea = tea;
  //   const spices = spices;
  //   const milk = milk;
  //   const sweetener = sweetener;

  console.log(
    "Mix the " +
      tea +
      " tea " +
      "with the " +
      spices +
      " in a small pot. " +
      "Add a cup of water and bring to boil. Boil for 2-3 min. " +
      "Add " +
      milk +
      " milk and " +
      sweetener +
      ". " +
      "Simmer for 3 min. Serve masala chai hot or warm!"
  );
}

prepareChai(ingredients);

// ---------------------------------------------
// TASK 5: Strings and Interpolation

// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

// const country = "Bulgaria";
// const city = "Sofia";

// if (country.indexOf("Bulg") > - 1) {
//     console.log("The country starts with Bulg");
// }

// if (city.indexOf("So") === 0) {
//     console.log("The name starts with So");
// }

// if (city.lastIndexOf("a") === city.length - 1) {
//     console.log("The name ends with a");
// }

// console.log(
//     "The capital of " + country +
//     " is the city of " + city
// );

// ---------------------------------------------
// TASK 6: Arrow functions

// TASK 6: Exercise: Filter out only the prime numbers from the array

// const primeNumbers = [1, 2, 3, 4, 5, 6].filter(/* add the function to filter out the prime numbers */);
// console.log(primeNumbers);

// ---------------------------------------------
// TASK 7: Arrow functions and this

// Task 7: Exercise

// function Translator() {
//    this.phrase = "good day";
//    this.englishBulgarianDictionary = {
//        good: "ÃÂ´ÃÂ¾ÃÂ±ÃÂÃÂ",
//        day: "ÃÂ´ÃÂµÃÂ½"
//    }
// }

// Translator.prototype.getBulgarianPhrase = function() {
//    return this.phrase
//        .split(" ")
//        .map(function(word) {
//            return this.englishBulgarianDictionary[word]
//        })
//        .join(" ");
// }

// const translator = new Translator();
// console.log(translator.getBulgarianPhrase());