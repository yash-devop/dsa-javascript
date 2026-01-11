// https://leetcode.com/problems/rotate-array/description/

// SUBMISSION using js =>   https://leetcode.com/problems/rotate-array/submissions/1881463644/

// Basically it is : Left Rotate the array

// now they can give you qurstions like : rotate the array to the left by one/two/10 etc.

// that count is basically : k

// const rotate = function (nums, k) {
//   // [1,2,3,4,5]
//   let i = 0;
//   let j = nums.length - 1;
//   let temp = 0;

//   while (i < k) {
//     temp = nums[j];
//     while (j >= 0) {
//       if (j == 0) {
//         nums[j] = temp;
//         break;
//       }
//       nums[j] = nums[j - 1];
//       j--;
//     }
//     i++;
//     j = nums.length - 1;
//   }
// };

// const nums = [1, 2, 3, 4, 5];
// const nums = [1, 2, 3, 4, 5, 6, 7];
// rotate(nums, 3);
// console.log(nums);

/**
 *
 * * Visuallization of my brute appraoch :
 *
 * [1,2,3,4,5] => temp = 5;
 *
 * [1,2,3,4,_] ==> now shift each to the right.
 *
 * [_,1,2,3,4] => put it in the first  ==> [5,1,2,3,4];
 *
 *  likewise do this for all..
 *
 *
 *
 *
 * * Issues in the above brute force.
 *
 * @_1 : outer while loop runs till k. ( eg: arrLength = 3, k = 100 , so i starts from 0 till k);
 *       while inner loop shifts the entire array
 *
 *      so timecomplexity will be : 100 * 3 = > 300;
 *
 *      i.e: O(k * n) where n is length of the array.
 *
 *
 * @_2 : in this:  nums[j] = nums[j - 1];   this shifts the elements repeatedly and EXPENSIVE Process.
 *
 *
 * @_3 : edge cases not handled.
 *
 *
 */

/**
 * optimal good approach -- @Reversal_Algorithm for @Rotate_Arrays .
 */

function OptimalRotateArray(nums, k) {
  if (nums.length === 0) return;
  if (!k) return;
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
OptimalRotateArray(arr, k);

console.log("arr after optimal approach", arr);

// VISUALIZATION OF MY APPROCH :

/**   eg:  [ 1,2,3,4,5 ] => length 5 and k = 3;
 *
 *    rotate(0, 5-1) => rotate(0,4)     => swappng each => [5,4,3,2,1]      (FULL ARRAY)
 *    rotate(0, 3-1) => rotate(0,2)     => swapping => [3,4,5,2,1]          (LEFT PART)
 *    rotate(k, 5-1) => rotate(3,4)     => swapping => [3,4,5,1,2]          (RIGHT PART)
 *
 *    this is called @Reversal_Algorithm used for rotation of array.
 */
