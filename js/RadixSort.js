function radixSort(arr) {
  const maxDigits = mostDigits(arr)

  // Outer Loop
  for (let i = 0; i <= maxDigits; i++) {
    const buckets = new Array(10).fill(null).map(() => [])

    // Inner Loop
    arr.forEach(num => {
      const digit = getDigit(num, i)
      buckets[digit].push(num)
    })

    // update results with sorted arr
    arr = [].concat(...buckets)
  }

  return arr
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitNum(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(numArr) {
  let max = 0
  for (const num of numArr) {
    max = Math.max(max, digitNum(num))
  }

  return max
}

module.exports = radixSort
