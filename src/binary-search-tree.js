const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
const {Node} = require('../extensions/list-tree.js');

class BinarySearchTree {
  
  constructor() {
	this.treeRoot = null;
  }
  root() {
   return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);

	if (!this.treeRoot){
		this.treeRoot = newNode;
		return;
	}
	let current = this.treeRoot;
	while (true){
		if(data < current.data){
			if (!current.left){
				current.left = newNode;
				return;
			}
			current = current.left;
		} else {
			if (!current.right){
				current.right = newNode;
				return;
			}
			current = current.right;
		}
	}
  }

  has(data) {
   return this.find(data) !== null;
  }

  find(data) {
    let current = this.treeRoot;
	while (current){
		if (current.data === data)
			return current;
		if (data < current.data)
			current = current.left;
		else
			current = current.right;
	}
	return null;
  }

  remove(data) {
	// if (this.treeRoot.has(data) === false)
	//   return null;
	if (!this.has(data))
		return null;

    let current = this.treeRoot;
	let parent = null;

	while (current && current.data !== data){
		parent = current;
		if (data < current.data)
			current = current.left;
		else
			current = current.right;
	}
	if (!current.left && !current.right){
		if (!parent) this.treeRoot = null;
		else if (parent.left === current) parent.left = null;
		else parent.right = null;
		return;
	}
	else if (!current.left || !current.right){
		const child = current.left || current.right;
		if (!parent) this.treeRoot = child;
		else if (parent.left === current) parent.left = child;
		else parent.right = child;
		return;
	}
	else {
		let successor = current.right;
		let successorParent = current;

		while(successor.left){
			successorParent = successor;
			successor = successor.left;
		}
		current.data = successor.data;
		if (successorParent.left === successor) successorParent.left = successor.right;
		else successorParent.right = successor.right;

	}
	
  }

  min() {
    if (!this.treeRoot)
		return null;
	let current = this.treeRoot;
	while (current.left)
	{
		current = current.left;
	}
	return current.data;
  }

  max() {
    if (!this.treeRoot)
		return null;
	let current = this.treeRoot;
	while (current.right)
	{
		current = current.right;
	}
	return current.data;
  }
}

module.exports = {
  BinarySearchTree
};