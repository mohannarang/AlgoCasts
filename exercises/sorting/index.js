// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function swap(arr, i , j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp; 
}

function bubbleSort(arr) {
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = 0; j < arr.length - 1 - i; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             swap(arr, j, j + 1);
    //             isSorted = false;
    //         }
    //     }
    // }

    // for (let i = 0; i < arr.length - 1; i++) {
    //     let isSorted = true;
    //     for (let j = 0; j < arr.length - 1 - i; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             swap(arr, j , j + 1);
    //             isSorted = false;
    //         }
    //     }
    //     if (isSorted) {
    //         break;
    //     }
    // }
    let isSorted = false;
    let lastUnsorted = arr.length - 1;
    while (!isSorted) {
        isSorted = true;
        for (let j = 0; j < lastUnsorted; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSorted = false;
            }
        }
        lastUnsorted--;
    }
    return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      if (i != minIndex) {
          swap(arr, i, minIndex);
      }
  }
  return arr;
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  
  let lCounter = 0;
  let rCounter = 0;
  while (lCounter < left.length && rCounter < right.length) {
      if (left[lCounter] < right[rCounter]) {
        result.push(left[lCounter++]);
      } else {
        result.push(right[rCounter++]);
      }
  }
  while(lCounter < left.length) {
    result.push(left[lCounter++]);
  }

  while(rCounter < right.length) {
    result.push(right[rCounter++]);
  }
  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort , merge};
