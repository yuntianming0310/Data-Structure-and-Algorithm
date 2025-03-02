class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)
    // - If the size is equal to 0, set the first and last property to be the newly created node
    if (this.size === 0) {
      this.first = this.last = newNode
    }
    // - Otherwise, create a current pointer to the first, then move the first to newNode, make the next of newNode points to the current
    else {
      const currentNode = this.first
      this.first = newNode
      newNode.next = currentNode
    }

    // Increament the size
    return ++this.size
  }

  pop() {
    // If there are no nodes in the stack, return null
    if (!this.first || this.size === 0) return null

    // Create a temporary variable to store the first property on the stack
    const temp = this.first
    // If there is only 1 node, set the first and last property to null
    if (this.size === 1) {
      this.first = this.last = null
    }
    // If there is more than one node, set the first property to be the next property on the current first
    else {
      this.first = temp.next
    }

    this.size--
    return temp.val
  }
}
