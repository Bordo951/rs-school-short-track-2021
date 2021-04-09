/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixWidth = matrix[0].length;
  const matrixHeight = matrix.length;
  const newMatrix = [];

  for (let i = 0; i < matrixHeight; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrixWidth; j++) {
      newMatrix[i][j] = 0;
    }
  }

  for (let i = 0; i < matrixHeight; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (matrix[i][j] === true) {
        newMatrix[i][j] = true;

        if (newMatrix[i - 1]) {
          if (typeof newMatrix[i - 1][j - 1] !== 'undefined' && newMatrix[i - 1][j - 1] !== true) {
            newMatrix[i - 1][j - 1] += 1;
          }
          if (typeof newMatrix[i - 1][j] !== 'undefined' && newMatrix[i - 1][j] !== true) {
            newMatrix[i - 1][j] += 1;
          }
          if (typeof newMatrix[i - 1][j + 1] !== 'undefined' && newMatrix[i - 1][j + 1] !== true) {
            newMatrix[i - 1][j + 1] += 1;
          }
        }

        if (newMatrix[i]) {
          if (typeof newMatrix[i][j - 1] !== 'undefined' && newMatrix[i][j - 1] !== true) {
            newMatrix[i][j - 1] += 1;
          }
          if (typeof newMatrix[i][j + 1] !== 'undefined' && newMatrix[i][j + 1] !== true) {
            newMatrix[i][j + 1] += 1;
          }
        }

        if (newMatrix[i + 1]) {
          if (typeof newMatrix[i + 1][j - 1] !== 'undefined' && newMatrix[i + 1][j - 1] !== true) {
            newMatrix[i + 1][j - 1] += 1;
          }
          if (typeof newMatrix[i + 1][j] !== 'undefined' && newMatrix[i + 1][j] !== true) {
            newMatrix[i + 1][j] += 1;
          }
          if (typeof newMatrix[i + 1][j + 1] !== 'undefined' && newMatrix[i + 1][j + 1] !== true) {
            newMatrix[i + 1][j + 1] += 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < matrixHeight; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (newMatrix[i][j] === true) newMatrix[i][j] = 1;
    }
  }

  return newMatrix;
}

module.exports = minesweeper;
