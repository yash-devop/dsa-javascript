// https://leetcode.com/problems/rotate-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  // [1,2,3,4,5]
  let i = 0;
  let j = nums.length - 1;
  let temp = 0;

  while (i < k) {
    temp = nums[j];
    while (j >= 0) {
      if (j == 0) {
        nums[j] = temp;
        break;
      }
      nums[j] = nums[j - 1];
      j--;
    }
    i++;
    j = nums.length - 1;
  }
};

// const nums = [1, 2, 3, 4, 5];
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);
