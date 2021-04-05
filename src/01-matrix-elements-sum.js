/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixNew = matrix;
  let matrixConcat = [];
  for (let i = 0; i < matrixNew.length; i++) {
    for (let j = 0; j < matrixNew[0].length; j++) {
      if (matrixNew[i][j] === 0 && typeof matrix[i + 1] !== 'undefined') {
        matrixNew[i + 1][j] = 0;
      }
    }
  }
  matrixConcat = matrixNew.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
  return matrixConcat.reduce((accumulator, currentValue) => accumulator + currentValue);
}

module.exports = getMatrixElementsSum;
