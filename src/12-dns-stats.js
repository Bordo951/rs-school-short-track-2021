/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};

  for (let j = 0; j < domains.length; j++) {
    const arr = domains[j].split('.').reverse().map((element) => `.${element}`);
    let string = '';

    for (let i = 0; i < arr.length; i++) {
      string += arr[i];
      if (DNS[string]) {
        DNS[string] += 1;
      } else {
        DNS[string] = 1;
      }
    }
  }
  return DNS;
}

module.exports = getDNSStats;
