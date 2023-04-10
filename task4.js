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
