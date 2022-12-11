// merge sort

const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]){
      sorted.push(arr1.shift())
    } else {
      sorted.push(arr2.shift())
    }
  }

  return sorted.concat(arr1.slice()).concat(arr2.slice())
}

// console.log(merge([2, 5, 10, 57], [9, 12, 13]));

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let midpoint = Math.floor(arr.length / 2)
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([2, 5, 10, 57, 100, 2323, 1]));

