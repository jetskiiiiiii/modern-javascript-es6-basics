// Task 3: Variables (const) and Immutability

// TASK 3: Exercise: Refactor the code to use let/const

const painter = {
  name: "Van Gogh",
  nationality: "Dutch",
  paintings: ["The Starry Night", "Irises", "Almond Blossoms"],
};

Object.freeze(painter);
// Object.freeze(painter.paintings);
painter.birthDate = "March 30, 1853";
painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }
