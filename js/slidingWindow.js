function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num]
    if (tempSum > maxSum) maxSum = tempSum
  }

  return maxSum
}

console.log(maxSubarraySum([20, 2, 4, 2, 21, 4, 3, 10, 10], 3))
