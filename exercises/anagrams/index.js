// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    const charMap = {};
    for (const char of stringA) {
        charMap[char] = charMap[char] + 1 || 1;          
    }
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    for (const char of stringB) {
        if (charMap[char] == undefined) {
            return false;
        }
        charMap[char]--;
        if (charMap[char] === 0) {
            delete charMap[char];
        }
    }
    return Object.keys(charMap).length === 0;
}

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    return stringA.split('').sort().join('') === stringB.split('').sort().join('');
}

module.exports = anagrams;
