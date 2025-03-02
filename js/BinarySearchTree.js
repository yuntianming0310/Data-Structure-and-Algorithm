class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insertRecursively(val) {
    const newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
    } else {
      this.root = _insertRecursivelyHelper(this.root, val)
    }

    function _insertRecursivelyHelper(curNode, val) {
      if (!curNode) return newNode

      if (curNode.val === val) return curNode

      if (val < curNode.val)
        curNode.left = _insertRecursivelyHelper(curNode.left, val)
      else curNode.right = _insertRecursivelyHelper(curNode.right, val)

      return curNode
    }
  }

  insertIteratively() {
    const newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
      return
    }

    let curNode = this.root
    while (true) {
      if (val === curNode.val) return this
      if (val > curNode.val) {
        if (!curNode.right) {
          curNode.right = newNode
          return this
        }
        curNode = curNode.right
      } else {
        if (!curNode.left) {
          curNode.left = newNode
          return this
        }
        curNode = curNode.left
      }
    }
  }

  find(val) {
    if (!this.root) return undefined

    let curNode = this.root
    while (true) {
      if (curNode.val === val) return curNode

      if (val > curNode.val) {
        if (!curNode.right) return undefined
        curNode = curNode.right
      } else {
        if (!curNode.left) return undefined
        curNode = curNode.left
      }
    }
  }
}
