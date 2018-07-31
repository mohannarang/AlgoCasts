// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j && str.charAt(i) === str.charAt(j)) {
        i++;
        j--;
    }
    return i >= j;
}

// function palindrome(str) {
//     return str.split('').every((char, index) =>
//         char === str.charAt(str.length - index - 1));
// }

// function palindrome(str) {
//     return str == str.split('').reverse().join('');
// }

module.exports = palindrome;
