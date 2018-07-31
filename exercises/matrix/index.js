// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let sRow = 0;
    let eRow = n - 1;
    let sColumn = 0;
    let eColumn =  n - 1;

    let count = 1;

    while (sRow <= eRow && sColumn <= eColumn) {
        for (let c = sColumn; c <= eColumn; c++) {
            result[sRow][c] = count++;
        }
        sRow++;
        
        for (let r = sRow; r <= eRow; r++) {
            result[r][eColumn] = count++;
        }
        eColumn--;

        for (let c = eColumn; c >= sColumn; c--) {
            result[eRow][c] = count++;
        }
        eRow--;

        for (let r = eRow; r >= sRow; r--) {
            result[r][sColumn] = count++;
        }
        sColumn++;
    }
    return result;
}

module.exports = matrix;
