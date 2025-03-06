class Node {
  constructor(val, pri) {
    this.val = val
    this.pri = pri
  }
}

class PriorityQueue {
  constructor() {
    this.queue = []
  }

  push(node) {
    this.queue.push(node)

    this._siftUp(this.queue, node, this.queue.length - 1)
  }

  pop() {
    if (!this.queue.length) return null

    const first = this.queue[0]
    const last = this.queue.pop()

    if (last !== first) {
      this.queue[0] = last
      this._siftDown(this.queue, last, 0)
    }

    return first
  }

  _siftUp(heap, node, index) {
    while (index > 0) {
      const parentIndex = (index - 1) >>> 1
      const parent = heap[parentIndex]

      if (this._compare(parent, node) <= 0) break

      heap[parentIndex] = node
      heap[index] = parent
      index = parentIndex
    }
  }

  _siftDown(heap, node, index) {
    const length = heap.length
    const half = length >>> 1

    while (index < half) {
      const leftIndex = 2 * index + 1
      const left = heap[leftIndex]
      const rightIndex = leftIndex + 1
      const right = heap[rightIndex]

      if (this._compare(left, node) < 0) {
        if (right && this._compare(right, left) < 0) {
          heap[rightIndex] = node
          heap[index] = right
          index = rightIndex
        } else {
          heap[leftIndex] = node
          heap[index] = left
          index = leftIndex
        }
      } else if (right && this._compare(right, node) < 0) {
        heap[rightIndex] = node
        heap[index] = right
        index = rightIndex
      } else {
        return
      }
    }
  }

  _compare(a, b) {
    return a.pri - b.pri
  }
}

const priQ = new PriorityQueue()
priQ.push(new Node('Algorithm', 0))
priQ.push(new Node('Web Design', 1))
priQ.push(new Node('Threejs Journey', 2))
priQ.push(new Node('NestJs', 2))
priQ.push(new Node('School Work', 1))
