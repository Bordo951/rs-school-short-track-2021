/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const indicesArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indicesArr.push(arr.indexOf(arr[i], i));
    } else {
      newArr.push(arr[i]);
    }
  }
  newArr.sort((a, b) => a - b);
  if (indicesArr.length > 0) {
    indicesArr.forEach((element) => {
      newArr.splice(element, 0, -1);
    });
  }
  return newArr;
}

module.exports = sortByHeight;
