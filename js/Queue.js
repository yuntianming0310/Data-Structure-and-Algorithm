class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor(val) {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    const newNode = new Node(val)

    if (!this.first || this.size === 0) {
      this.first = this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }

  dequeue() {
    if (!this.first || this.size === 0) return null

    const popped = this.first
    if (this.size === 1) {
      this.first = this.last = null
    } else {
      this.first = popped.next
    }

    this.size--
    return popped.val
  }
}
