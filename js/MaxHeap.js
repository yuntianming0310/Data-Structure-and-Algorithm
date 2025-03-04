class MaxHeap {
  constructor() {
    this.variables = []
  }

  push(val) {
    this.variables.push(val)

    this._bubleUp(val, this.variables.length - 1)
  }

  pop() {
    if (!this.variables.length) return null

    const first = this.variables[0]
    const last = this.variables.pop()
    if (this.length !== 0) {
      this.variables[0] = last
      this._extractMax(last, 0)
    }

    return first
  }

  _extractMax(value, index) {
    const half = this.variables.length >>> 1

    while (index < half) {
      const leftIndex = index * 2 + 1
      const left = this.variables[leftIndex]
      const rightIndex = leftIndex + 1
      const right = this.variables[rightIndex]

      if (this._compare(left, value) > 0) {
        if (right && this._compare(left, right) > 0) {
          this.variables[leftIndex] = value
          this.variables[index] = left
          index = leftIndex
        } else {
          this.variables[rightIndex] = value
          this.variables[index] = right
          index = rightIndex
        }
      } else if (right && this._compare(right, value)) {
        this.variables[rightIndex] = value
        this.variables[index] = right
        index = rightIndex
      } else {
        return
      }
    }
  }

  _bubleUp(value, index) {
    while (index !== 0) {
      const parentIndex = (index - 1) >>> 1
      const parent = this.variables[parentIndex]

      if (this._compare(parent, value) < 0) {
        this.variables[parentIndex] = value
        this.variables[index] = parent
        index = parentIndex
      } else {
        return
      }
    }
  }

  _compare(a, b) {
    return a - b
  }
}

const heap = new MaxHeap()
heap.push(100)
heap.push(80)
heap.push(90)
heap.push(120)
heap.push(40)
heap.push(50)
heap.push(10)
heap.push(70)

console.log(heap.variables)

heap.pop()
