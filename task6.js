// TASK 6: Arrow functions

// TASK 6: Exercise: Filter out only the prime numbers from the array

const primeNumbers = [1, 2, 3, 4, 5, 6].filter(
  (number) => !(number % 2 === 0 && number / 2 > 1)
);
console.log(primeNumbers);
