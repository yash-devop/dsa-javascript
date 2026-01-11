// const arr = [2, 5, 1, 3, 0];
// const arr = [3,3,3,3,3];
// const arr = [4, 3, 8, 12, 12, -1, 13];
// const arr = [5, 0, 4, 0];
const arr = [4, 3, 8, 12, 15, -1, 13];

function findSecondLargest(arr: number[]) {
  if (arr.length < 2) {
    return [-1, -1];
  }
  let max = Math.max(arr[0], arr[1]); // 4
  let smax = Math.min(arr[0], arr[1]); // 3

  let i = 2;

  while (i < arr.length) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    } else if (arr[i] > smax) {
      smax = arr[i];
    }
    i++;
  }

  return [max, smax];
}

const result = findSecondLargest(arr);

console.log("[max, secondMax]", result);

// Time Complexity: O(n);
// Space Complexity: O(1);
