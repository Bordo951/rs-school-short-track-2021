/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const comparedArr = ['-', 'A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = true;
  let arr = [];

  if (n.length === 17) {
    arr = n.split('');
    arr.forEach((element) => {
      if (!comparedArr.includes(element)) {
        result = false;
      }
      return result;
    });
  } else {
    result = false;
  }
  return result;
}

module.exports = isMAC48Address;
