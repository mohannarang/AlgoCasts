// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charMap = {};
    for (const char of str) {
        if (charMap[char] == undefined) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    let maxCount = 0;
    let maxChar = '';
    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
