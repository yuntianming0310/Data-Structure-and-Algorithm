const array = [9, 10, 5, 3, 7, 2, 1, 8, 6, 4, 12]

/**
 * BubbleSort
 */
function bubbleSort(arr) {
  const results = [...arr]

  for (let i = results.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (results[j] > results[j + 1]) {
        swap(results, j, j + 1)
      }
    }
  }

  return results
}

function optimizedBubbleSort(arr) {
  const results = [...arr]
  let noSwaps

  for (let i = results.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (results[j] > results[j + 1]) {
        swap(results, j, j + 1)
        noSwaps = false
      }
    }

    if (noSwaps) break
  }

  return results
}

/**
 * Selection Sort
 */
function selectionSort(arr) {
  const results = [...arr]

  for (let i = 0; i < results.length - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < results.length; j++) {
      if (results[j] < results[minIdx]) {
        minIdx = j
      }
    }

    if (i !== minIdx) swap(results, i, minIdx)
  }

  return results
}

/**
 * Insertion Sort
 */
function insertionSort(arr) {
  const results = [...arr]
  if (results.length <= 1) return results

  for (let curIdx = 1; curIdx < results.length; curIdx++) {
    for (
      let insIdx = curIdx;
      insIdx > 0 && results[insIdx] < results[insIdx - 1];
      insIdx--
    ) {
      swap(results, insIdx, insIdx - 1)
    }
  }

  return results
}

function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

// console.log(optimizedBubbleSort(array))
// console.log(selectionSort(array))
// console.log(insertionSort(array))
// console.log(mergeSort(array))
// console.log(array)
