// TASK 7: Arrow functions and this

// Task 7: Exercise

function Translator() {
  this.phrase = "good day";
  this.englishBulgarianDictionary = {
    good: "ÃÂ´ÃÂ¾ÃÂ±ÃÂÃÂ",
    day: "ÃÂ´ÃÂµÃÂ½",
  };
}

Translator.prototype.getBulgarianPhrase = function () {
  return this.phrase
    .split(" ")
    .map((word) => this.englishBulgarianDictionary[word])
    .join(" ");
};

const translator = new Translator();
console.log(translator.getBulgarianPhrase());
