function sumZero(arr) {
  const result = []
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) return [arr[left], arr[right]]
    else if (sum > 0) right--
    else left++
  }

  return result
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

function countUniqueValues(arr) {
  if (arr.length === 0) return 0

  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  return i + 1
}

function areThereDuplicates(...args) {
  let i = 0
  for (let j = i + 1; j < args.length; j++) {
    if (args[i] !== args[j]) {
      i++
      args[i] = args[j]
    } else {
      return true
    }
  }

  return false
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 1))

// console.log(countUniqueValues([]))
