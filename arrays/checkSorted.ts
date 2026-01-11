// https://takeuforward.org/data-structure/check-if-an-array-is-sorted

// const arr = [2, 5, 1, 3, 0];
// const arr = [3,3,3,3,3];
// const arr = [-1,-1,-1,-1,-1,-1];
// const arr = [-1, 0, 1, 2, 3, 4];
const arr = [-1, 0, 0, 0, -1, -1, 0];

// [1, 2, 3, 4, 5];
// [(5, 4, 3, 2, 1)];

// [1, 2, 3, 0, 1, 2];

function isArraySorted(arr: number[], shouldOptimize = false) {
  if (!shouldOptimize) {
    // brute force approach.

    // Time complexity: o(n^2)

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          return false;
        }
      }
    }
    return true;
  }

  // optimal approach.

  // Time Complexity: O(n);
  // Space Complexity: O(1);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1])
      // If any element is smaller than the previous one, return false
      return false;
  }
}

const isSorted = isArraySorted(arr, true);

console.log("isSorted", isSorted);
