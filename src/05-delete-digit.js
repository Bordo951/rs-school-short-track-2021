/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let number = [];
  const arrNew = [];

  for (let i = 0; i < arr.length; i++) {
    number = arr.filter((element, index) => index !== i);
    arrNew.push(Number(number.join('')));
  }

  arrNew.sort((a, b) => a - b);
  return arrNew[arrNew.length - 1];
}

module.exports = deleteDigit;
