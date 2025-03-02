// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.tail = this.head = newNode
    } else {
      this.tail = this.tail.next = newNode
    }
    this.length += 1
    return this
  }

  traverse(callback) {
    let current = this.head
    while (current) {
      callback(current.val)
      current = current.next
    }
  }

  pop() {
    if (!this.head || this.length === 0) return undefined

    let current = this.head
    while (current.next !== this.tail) {
      current = current.next
    }

    this.tail = current
    const poppedNode = current.next
    this.tail.next = null
    this.length--

    if (this.length === 0) this.tail = this.head = null

    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined

    let shiftNode
    if (this.length === 1) {
      shiftNode = this.head
      this.head = this.tail = null
      this.length--

      return shiftNode
    }

    shiftNode = this.head
    this.head = this.head.next
    this.length--

    return shiftNode
  }

  unshift(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = this.tail = newNode
      this.length++

      return this
    }

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined

    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  set(index, val) {
    const currentNode = this.get(index)
    if (!currentNode) return false

    currentNode.val = val
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++

    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--

    return removedNode
  }

  reverse() {
    if (this.length <= 1) return undefined

    let prevNode, nextNode
    prevNode = nextNode = null
    let current = this.head
    this.head = this.tail
    this.tail = current

    for (let i = 0; i < this.length; i++) {
      nextNode = current.next
      current.next = prevNode
      prevNode = current
      current = nextNode
    }

    return this
  }
}

const list = new SinglyLinkedList()

list.push('How').push('r').push('u')

console.log(list.pop())
