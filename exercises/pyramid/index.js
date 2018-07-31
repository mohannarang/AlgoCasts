// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (n == row) {
        return;
    }
    if (level.length == 2 * n - 1) {
        console.log(level);
        pyramid(n, row + 1);
        return;
    }
    const mid = n - 1;
    const add = level.length >= mid - row &&
        level.length <= mid + row ? '#': ' ';
    pyramid(n, row, level + add);
}

// function pyramid(n) {
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let column = 0; column < 2 * n - 1; column++) {
//           const mid = n - 1;
//           if (column >= mid - row && column <= mid + row) {
//               level += '#';
//           } else {
//               level += ' ';
//           }
//         }
//         console.log(stair);
//     }
// }

module.exports = pyramid;
