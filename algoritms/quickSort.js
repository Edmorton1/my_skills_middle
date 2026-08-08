const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)]

  let i = left - 1
  let j = right + 1

  while (true) {
    do {i++} while (arr[i] < pivot)
    do {j--} while (arr[j] > pivot)
  
    if (i >= j) {
      return j
    }

    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  console.log({left, right});

  if (left >= right) {
    return
  }

  const pivotIndex = partition(arr, left, right)
  quickSort(arr, left, pivotIndex)
  quickSort(arr, pivotIndex + 1, right)
}

const arr = [3, 5, 1, 4, 7, 2, -121, -4, 1, 23]

quickSort(arr)

console.log(arr);
// [-121, -4, 1, 1, 2,  3, 4, 5, 7, 23]