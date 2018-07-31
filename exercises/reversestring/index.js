// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for (const char of str) {
      reversed = char + reversed;
    }
    return reversed;
}

// function reverse(str) {
//     let revStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str.charAt(i);
//     }
//     return revStr;
// }

// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
