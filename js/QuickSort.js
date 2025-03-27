const array = [6, 10, 8, 1, 5, 7, 9, 2]

const moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
]

function quickSort(arr, comparator = (a, b) => a - b) {
  let stack = [[0, arr.length - 1]]

  while (stack.length) {
    const [left, right] = stack.pop()
    if (left >= right) continue

    let pivotIndex = pivotHelper(arr, comparator, left, right)

    if (pivotIndex - 1 > left) stack.push([left, pivotIndex - 1])
    if (pivotIndex + 1 < right) stack.push([pivotIndex + 1, right])
  }

  return arr
}

function quickSortRecursively(
  arr,
  comparator,
  left = 0,
  right = arr.length - 1
) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, comparator, left, right)
    quickSort(arr, comparator, left, pivotIndex - 1)
    quickSort(arr, comparator, pivotIndex + 1, right)
  }

  return arr
}

function pivotHelper(
  arr,
  comparator = (a, b) => a - b,
  start = 0,
  end = arr.length - 1
) {
  const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start
  swap(arr, start, randomIndex)
  const pivot = arr[start]

  let curPivotIdx = start
  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[i], pivot) < 0) {
      curPivotIdx++
      swap(arr, curPivotIdx, i)
    }
  }

  swap(arr, curPivotIdx, start)
  return curPivotIdx
}

function optimizedQuickSort(arr, comparator = (a, b) => a - b) {
  let stack = [[0, arr.length - 1]]

  while (stack.length) {
    let [left, right] = stack.pop()
    if (left >= right) continue

    let pivotIndex = optimizedPivotHelper(arr, comparator, left, right)

    if (pivotIndex - left < right - pivotIndex) {
      stack.push([pivotIndex + 1, right])
      stack.push([left, pivotIndex])
    } else {
      stack.push([left, pivotIndex])
      stack.push([pivotIndex + 1, right])
    }
  }

  return arr
}

function optimizedPivotHelper(arr, comparator, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)]
  let i = left,
    j = right

  while (true) {
    while (comparator(arr[i], pivot) < 0) i++
    while (comparator(arr[j], pivot) > 0) j--

    if (i >= j) return j

    swap(arr, i, j)
    i++
    j--
  }
}

function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

module.exports = optimizedQuickSort
