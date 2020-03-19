/**
 * Implement an algorithm to determine if a string has all
 * unique characters.
 */
 
// "unique"
// "bear"
 
function isUnique(s) {
  return s.length === new Set(s).size;
}

const s1 = "unique";
const s2 = "bear";

// false
console.log(isUnique(s1));

// true
console.log(isUnique(s2));
