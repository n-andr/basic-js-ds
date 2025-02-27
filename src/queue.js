const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.queueNode = null;
	}
  //const queueNode = new ListNode;

  getUnderlyingList() {
    return this.queueNode;
  }

  enqueue(value) {
    let newElement = new ListNode(value);

	if (!this.queueNode)
		this.queueNode = newElement;
	else {
		let last = this.queueNode;
		while (last.next)
			last = last.next;
		last.next = newElement;
	}
	return this.queueNode;
  }

  dequeue() {
	if(!this.queueNode) return null;
	let dequeueEl = this.queueNode.value;
    this.queueNode = this.queueNode.next;
	return dequeueEl;
  }
}

module.exports = {
  Queue
};
