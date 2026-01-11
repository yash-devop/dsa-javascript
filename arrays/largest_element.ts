// const arr = [2, 5, 1, 3, 0];
// const arr = [3,3,3,3,3];
const arr = [4, 3, 8, 12, 12, -1, 13];

function findLargest(arr: number[]) {
  let max = arr[0]; // 2

  let i = 1;

  while (i <= arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }

  return max;
}

const result = findLargest(arr);

console.log("max", result);

// Time Complexity: O(n);
// Space Complexity: O(1);
