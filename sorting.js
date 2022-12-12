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

// console.log(mergeSort([2, 5, 10, 57, 100, 2323, 1]));

let input = [1, 5, 3, 15, 77, 66, 24, 5]

const countingSort = (arr) => {
  const max = Math.max(...arr);
  // console.log('max is...', max)
  let slots = Array(max).fill(0);
  // console.log(slots)
  let sorted = [];

  for (let i = 0; i < arr.length; i++) {
    slots[arr[i] - 1]++
    // console.log(slots)
  }

  for (let i = 0; i < slots.length; i++) {
    for (let j = 0; j < slots[i]; j++) {
      sorted.push(i + 1)
      console.log(sorted)
    }
  }
}

console.log(countingSort(input))