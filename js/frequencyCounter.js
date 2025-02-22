function same(arrSt, arrNd) {
  // 问题：第二个数组里是否有第一个数组中的子项平方值，且频率一致

  // if 长度不一致 false
  if (arrSt.length !== arrNd.length) return false
  // 1）将整个数组平方
  const squaredArr = arrSt.map(num => num * num)

  // 2）比较平方数组和第二个数组
  // 1. 排序两个数组
  squaredArr.sort()
  arrNd.sort()

  // 2. 挨个比较
  for (let i = 0; i < squaredArr.length; i++) {
    if (squaredArr[i] !== arrNd[i]) return false
  }

  // 3） 一致则返回true，否则返回false
  return true
}

// console.log(same([1, 2, 3], [1, 9, 4]))

// O(n)
function sameBest(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
  }

  return true
}

// mine validAnagram
function validAnagram(str1, str2) {
  if (str1 === '' && str2 === '') return true
  if (str1 === '' || str2 === '') return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false
  }

  return true
}

// teacher's version validAnagram
function tc_validAnagram(first, second) {
  if (first.length !== second.length) return false

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    const char = first[i]
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    const char = second[i]
    if (!lookup[char]) {
      return false
    } else {
      lookup[char] -= 1
    }
  }

  return true
}

function areThereDuplicates(...args) {
  let result = {}

  // 1) loop the args
  // 2) mark up the el
  // 3) if there has a value duplicated, just return true
  // 4) unless, return false
  for (let el of args) {
    if (result[el]) return true
    result[el] = 1
  }

  return false
}

function constructNote(message, letters) {
  const frequencyCounter = {}
  for (let char of letters) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
  }

  for (let char of message) {
    if (frequencyCounter[char] >= 1) frequencyCounter[char]--
    else return false
  }

  return true
}
