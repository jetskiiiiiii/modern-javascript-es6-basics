// TASK 5: Strings and Interpolation

// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria";
const city = "Sofia";

if (country.indexOf("Bulg") > -1) {
  console.log("The country starts with Bulg");
}

if (country.includes("Bulg")) {
  console.log("The country starts with Bulg");
}

if (city.indexOf("So") === 0) {
  console.log("The name starts with So");
}

if (city.startsWith("So")) {
  console.log("The name starts with So");
}

if (city.lastIndexOf("a") === city.length - 1) {
  console.log("The name ends with a");
}

if (city.endsWith("a")) {
  console.log("The name ends with a");
}

console.log("The capital of " + country + " is the city of " + city);
console.log(`The capital of ${country} is the city of ${city}`);
