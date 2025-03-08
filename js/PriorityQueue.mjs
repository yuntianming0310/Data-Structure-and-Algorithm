export default class PriorityQueue {
  constructor(priorityUnit) {
    if (!priorityUnit || typeof priorityUnit !== 'string') {
      throw new Error('Priority unit is required and must be string')
    }

    this.queue = []
    this.unit = priorityUnit
  }

  enqueue(node) {
    this.queue.push(node)

    this._siftUp(this.queue, node, this.queue.length - 1)
  }

  dequeue() {
    if (!this.queue.length) return null

    const first = this.queue[0]
    const last = this.queue.pop()

    if (last !== first) {
      this.queue[0] = last
      this._siftDown(this.queue, last, 0)
    }

    return first
  }

  isEmpty() {
    return this.queue.length === 0
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
    return a?.[this.unit] - b?.[this.unit]
  }
}
