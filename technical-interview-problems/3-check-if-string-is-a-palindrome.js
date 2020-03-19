/**
 * Given a string, write a function to determine if it
 * is a palindrome
 */

// racecar
// madam
// Dammit I'm mad.

function removePunctuation(s) {
  return s.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"");
}
 
function isPalindrome(s) {
  s = s.toLowerCase();
  s = removePunctuation(s);
  s = s.split(" ").join("");
  return s === s.split('').reverse().join('');
}

const str1 = 'racecar';
const str2 = "Dammit I'm mad.";
const str3 = 'computer';

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
