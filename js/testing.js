const radixSort = require('./RadixSort.js')
const mergeSort = require('./MergeSort.js')
const quickSort = require('./QuickSort.js')

const randomArray = Array.from({ length: 10000000 }, () =>
  Math.floor(Math.random() * 1000)
)

performance.mark('RadixSortStart')
radixSort(randomArray)
performance.mark('RadixSortEnd')

performance.mark('MergeSortStart')
mergeSort(randomArray)
performance.mark('MergeSortEnd')

performance.mark('QuickSortStart')
quickSort(randomArray)
performance.mark('QuickSortEnd')

performance.measure('RadixSortDuration', 'RadixSortStart', 'RadixSortEnd')
performance.measure('MergeSortDuration', 'MergeSortStart', 'MergeSortEnd')
performance.measure('QuickSortDuration', 'QuickSortStart', 'QuickSortEnd')

const radixSortMeasure = performance.getEntriesByName('RadixSortDuration')[0]
const mergeSortMeasure = performance.getEntriesByName('MergeSortDuration')[0]
const quickSortMeasure = performance.getEntriesByName('QuickSortDuration')[0]

console.log(`Radix Sort Takes Time: ${radixSortMeasure.duration} ms`)
console.log(`Merge Sort Takes Time: ${mergeSortMeasure.duration} ms`)
console.log(`Quick Sort Takes Time: ${quickSortMeasure.duration} ms`)
