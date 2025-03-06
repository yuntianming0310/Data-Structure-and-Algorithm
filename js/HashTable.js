class HashTable {
  constructor(size = 53) {
    this.keymap = new Array(size)
  }

  set(key, value) {
    const index = this._hash(key)
    if (!this.keymap[index]) {
      this.keymap[index] = []
    }
    this.keymap[index].push([key, value])
  }

  get(key) {
    const index = this._hash(key)

    const values = this.keymap[index]
    if (values) {
      const filterValue = values.filter(arr => arr[0] === key)
      return filterValue[0][1]
    }

    return undefined
  }

  keys() {
    const loopArr = this.keymap

    const keysArr = []
    loopArr.forEach(arr => {
      if (!arr) return

      arr.forEach(pair => {
        if (!keysArr.includes(pair[0])) keysArr.push(pair[0])
      })
    })

    return keysArr
  }

  values() {
    const loopArr = this.keymap

    const valuesArr = []
    loopArr.forEach(arr => {
      if (!arr) return

      arr.forEach(pair => {
        if (!valuesArr.includes(pair[1])) valuesArr.push(pair[1])
      })
    })

    return valuesArr
  }

  _hash(key) {
    if (typeof key !== 'string') return null

    const PRIME = 31
    let total = 0

    for (let char of key) {
      const value = char.charCodeAt(0) - 96
      total = (total * PRIME + value) % this.keymap.length
    }

    return total
  }
}
