class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head && this.length === 0) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  popping() {
    // handle edge case
    if (!this.head || this.length === 0) return undefined

    // pop the tail
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }

    this.length--
    return poppedNode
  }

  shift() {
    if (!this.head || this.length === 0) return undefined

    let shiftNode = this.head
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = shiftNode.next
      shiftNode.next = this.head.prev = null
    }

    this.length--
    return shiftNode
  }

  unshift(val) {
    const newNode = new Node(val)

    if (!this.head && this.length === 0) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (typeof index !== 'number' || index < 0 || index >= this.length)
      return undefined

    let startNode, dir
    const newIndex = Math.min(Math.abs(index - this.length + 1), index)

    if (newIndex === index) {
      startNode = this.head
      dir = 'next'
    } else {
      startNode = this.tail
      dir = 'prev'
    }

    for (let i = 0; i < newIndex; i++) {
      startNode = startNode[dir]
    }

    return startNode
  }

  set(index, val) {
    const currentNode = this.get(index)
    if (!currentNode) return false

    currentNode.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false

    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    const currentNode = this.get(index)
    const newNode = new Node(val)

    newNode.next = currentNode
    newNode.prev = currentNode.prev
    current.prev.next = newNode
    current.prev = newNode

    this.length++
    return true
  }

  remove(index) {
    // handle edge cases
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    // get the node to remove
    const currentNode = this.get(index)

    // update the pointers
    currentNode.prev.next = currentNode.next
    currentNode.next.prev = currentNode.prev

    // clean up the removed node
    currentNode.next = null
    currentNode.prev = null

    this.length--
    return currentNode
  }
}
