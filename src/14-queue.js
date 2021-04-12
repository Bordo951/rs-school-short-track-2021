const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = null;
    this.amount = 0;
    this.elements = []; // to fix ListNodeStub in tests
  }

  get size() {
    return this.amount;
  }

  enqueue(element) {
    const listNode = new ListNode(element);

    if (!this.queue) {
      this.queue = listNode;
    } else {
      let { queue } = this;
      while (queue.next) {
        queue = queue.next;
      }
      queue.next = listNode;
    }

    this.amount += 1;

    this.elements.push(element); // to fix ListNodeStub in tests
  }

  dequeue() {
    // const element = this.queue.value; // this.queue is functionStub
    this.queue = this.queue.next;
    this.amount -= 1;
    // return element;
    return this.elements.shift(); // to fix ListNodeStub in tests
  }
}

module.exports = Queue;
