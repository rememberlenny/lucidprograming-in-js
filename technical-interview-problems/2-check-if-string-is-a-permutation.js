/**
 * Given two strings, write a function to decide if
 * one is a permutation of the other.
 */
 
// "driving"
// "the cow jumps over the moon"
 
const testStr1 = "driving";
const testStr2 = "drivign";

function isPermutation(str1, str2) {
  str1 = str1.replace(" ", "");
  str2 = str2.replace(" ", "");
  
  if (str1.length !== str2.length) {
    return false;
  }
  
  str1.split('').forEach(char => {
    if (str2.includes(char)) {
      str2 = str2.replace(char, "");
    }
  });
  
  return str2.length === 0;
}

console.log(isPermutation(testStr1, testStr2));
