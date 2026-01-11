// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// SUBMISSION: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/836388945/

// DONE !

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]) {
  // [1,2,2,2,3,3,3,3,4,4,4];         // always sorted !
  // [1,2,3,4,_,_,_,_,_]        // ans
  let i = 0;
  let k = 0; // count as per ques.
  while (i < nums.length) {
    // 1. current and current ke baad vala equal nahi hain ( mtlb nums[i] unique hai );
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i]; // 2. toh usko inplace change krdo.
      k++; // 3. count badhado.
    }
    i++; // 4. yeh toh badhega loop ke liye.
  }
  console.log("k is ", k);
  return [k, nums];
};

const nums = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4];
const result = removeDuplicates(nums);

console.log("result without dups => ", result);

/* OLD APPROACH ( almost ) ==> here what i did was just taken the count but that count was not accurate
    as it was 
*/

var removeDuplicatesOld = function (nums: number[]) {
  // [1,2,2,2,3,3,3,3,4,4,4];         // always sorted !
  // [1,2,3,4,_,_,_,_,_]        // ans
  let i = 0;
  let k = 0; // count as per ques.
  while (i < nums.length) {
    // current and current ke baad vala current hi hain ??
    if (nums[i] == nums[i + 1]) {
      i++;
    }
    k++;
    i++;

    // nahi toh aage badh.
  }
  console.log("k is ", k);
  return k;
};
