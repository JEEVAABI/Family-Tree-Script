function generation(x, y) {
    if (x === 0) {
      return "me!";
    } else if (x < 0) {
      // Ancestor
      if (y === "m") {
        switch (x) {
          case -1: return "father";
          case -2: return "grandfather";
          case -3: return "great grandfather";
          default: return "unknown ancestor";
        }
      } else if (y === "f") {
        switch (x) {
          case -1: return "mother";
          case -2: return "grandmother";
          case -3: return "great grandmother";
          default: return "unknown ancestor";
        }
      } else {
        return "unknown gender";
      }
    } else if (x > 0) {
      // Descendant
      if (y === "m") {
        switch (x) {
          case 1: return "son";
          case 2: return "grandson";
          case 3: return "great grandson";
          default: return "unknown descendant";
        }
      } else if (y === "f") {
        switch (x) {
          case 1: return "daughter";
          case 2: return "granddaughter";
          case 3: return "great granddaughter";
          default: return "unknown descendant";
        }
      } else {
        return "unknown gender";
      }
    } else {
      return "invalid input";
    }
  }
console.log(generation(2, "f")); // Output: "granddaughter"
// console.log(generation(-3, "m")); // Output: "great grandfather"
// console.log(generation(1, "f")); // Output: "daughter"
// console.log(generation(0, "m")); // Output: "me!"
// console.log(generation(-4, "f")); // Output: "unknown ancestor"
// console.log(generation(4, "m")); // Output: "unknown descendant"
// console.log(generation(2, "x")); // Output: "unknown gender"
// console.log(generation(0, "x")); // Output: "invalid input"
