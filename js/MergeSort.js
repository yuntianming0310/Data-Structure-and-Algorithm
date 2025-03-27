function mergeSort(arr) {
  if (arr.length === 1) return arr

  const middleIdx = Math.floor(arr.length / 2)
  return merge(
    mergeSort(arr.slice(0, middleIdx)),
    mergeSort(arr.slice(middleIdx))
  )
}

function merge(arr1, arr2, comparator = (a, b) => a - b) {
  let i, j
  i = j = 0
  let results = []

  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) < 0) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

// Built-in Comparator
function mergeSortIn(arr, comparator = (a, b) => a - b) {
  function merge(arr1, arr2) {
    let i = 0
    let j = 0
    const results = []

    while (i < arr1.length && j < arr2.length) {
      if (comparator(arr1[i], arr2[j]) < 0) {
        results.push(arr1[i])
        i++
      } else {
        results.push(arr2[j])
        j++
      }
    }

    while (i < arr1.length) {
      results.push(arr1[i])
      i++
    }

    while (j < arr2.length) {
      results.push(arr2[j])
      j++
    }

    return results
  }

  if (arr.length <= 1) return arr

  const middleIdx = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, middleIdx), comparator)
  const right = mergeSort(arr.slice(middleIdx), comparator)

  return merge(left, right)
}

function optimizedMergeSort(arr) {
  const aux = [...arr]

  function mergeSortHelper(start, end) {
    if (end - start <= 1) return

    const mid = Math.floor((start + end) / 2)
    mergeSortHelper(start, mid)
    mergeSortHelper(mid, end)
    optimizedMerge(arr, aux, start, mid, end)
  }

  mergeSortHelper(0, arr.length)
  return arr
}

function optimizedMerge(arr, aux, start, mid, end) {
  let i = start,
    j = mid,
    k = start

  while (i < mid && j < end) {
    if (arr[i] <= arr[j]) {
      aux[k++] = arr[i++]
    } else {
      aux[k++] = arr[j++]
    }
  }

  while (i < mid) aux[k++] = arr[i++]
  while (j < end) aux[k++] = arr[j++]

  for (let i = start; i < end; i++) {
    arr[i] = aux[i]
  }
}

// module.exports = mergeSort

module.exports = optimizedMergeSort
