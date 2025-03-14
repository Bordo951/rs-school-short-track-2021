/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  for (let i = 0, counter = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter !== 1) {
        result += counter + str[i];
      } else {
        result += str[i];
      }
      counter = 1;
    }
  }

  return result;
}

module.exports = encodeLine;
