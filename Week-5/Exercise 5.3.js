function hasDuplicate(arr) {
    let arrSet = new Set(arr);
  
    return arrSet.size !== arr.length;
  }
  
  console.log(hasDuplicate([1, 2, 1, 3, 4, 3, 5, 6, 5]));
  console.log(hasDuplicate([1, 2, 9, 4, 8, 6, 7]));
  console.log(hasDuplicate([1, 2, 1, 4, 5, 6, 5]));