// Task 2: Variables (let) and Scoping

// Task 2: Execise 1: Fix the code to print 15

let age = 15;

for (let age = 1; age <= 10; age++) {
  console.log(age);
}

console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
  let myDog = "Welsh Corgie";
  console.log(myDog);
} else {
  let myDog = "Border Collie";
  console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier
