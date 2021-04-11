/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let arrIndexLeast = 0;
  let arrIndexHighest = array.length - 1;
  let arrMiddle;
  let result = false;
  let element;

  while (arrIndexLeast <= arrIndexHighest) {
    arrMiddle = Math.floor((arrIndexLeast + arrIndexHighest) / 2);
    element = array[arrMiddle];

    if (element === value) {
      result = arrMiddle;
      return result;
    }

    if (element > value) arrIndexHighest = arrMiddle - 1;

    if (element < value) arrIndexLeast = arrMiddle + 1;
  }

  return result;
}

module.exports = findIndex;
