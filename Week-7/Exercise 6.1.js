function maxSumContiguous(arr){
     let maxSum = 0; //used to get maximum subarray sum
  let currentSum = 0; //used to get current subarray sum


 for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return "Here is the answer :" + maxSum;
}


console.log(maxSumContiguous([1,2,3,4,5]));
console.log(maxSumContiguous([1,23,-3,-6,5]));
console.log(maxSumContiguous([-3,5,7,-2,4]));
console.log(maxSumContiguous([0,4,7,2,-8]));