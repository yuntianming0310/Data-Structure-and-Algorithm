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

console.log(mergeSortIn([1, 10, 3, 7, 2, 6, 12, 23, -1]))
