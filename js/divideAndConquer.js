function search(arr, val) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    const currentElement = arr[middle]

    if (currentElement > val) {
      max = middle - 1
    } else if (currentElement < val) {
      min = middle + 1
    } else {
      return middle
    }
  }

  return -1
}

console.log(search([0, 1, 3, 4, 8, 9], 4))
