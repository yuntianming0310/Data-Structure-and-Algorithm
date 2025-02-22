// Factorial Iteratively
function factorial(num) {
  let total = 1
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}

// Factorial Recursively
function factorialRecursion(num) {
  if (num === 1) return 1
  return num * factorialRecursion(num - 1)
}

// console.log(factorialRecursion(3))

function collectOddValuesHelper(arr) {
  const result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0])

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}

function collectOddValuesPure(arr) {
  let newArr = []

  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0])

  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)))
  return newArr
}

Math._myPow = function (num, powerTimes) {
  if (powerTimes === 0) return 1
  if (powerTimes === 1) return num
  return num * Math._myPow(num, --powerTimes)
}

Math._myFactorial = function (num) {
  if (num === 1) return 1
  return num * Math._myFactorial(num - 1)
}

function productOfArray(arr) {
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(num) {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}

function fib(index) {
  if (index <= 2) return 1
  return fib(index - 1) + fib(index - 2)
}

console.log(recursiveRange(4))
