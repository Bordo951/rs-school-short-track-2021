const ListNode = require('../extensions/list-node');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  let newList = null;
  let listNode;

  while (list !== null) {
    if (list.value === k) {
      list = list.next;
    }

    listNode = new ListNode(list.value);

    if (!newList) {
      newList = listNode;
    } else {
      let currentList = newList;
      while (currentList.next) {
        currentList = currentList.next;
      }
      currentList.next = listNode;
    }

    list = list.next;
  }

  return newList;
}

module.exports = removeKFromList;
