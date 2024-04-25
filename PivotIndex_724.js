/**   LEET CODE 724
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  var psum = [];
  var n = nums.length;
  var pivotIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      psum[i] = nums[i];
    } else {
      psum[i] = psum[i - 1] + nums[i];
    }
  }
  for (let j = 0; j < nums.length; j++) {
    let lSum = j == 0 ? 0 : psum[j - 1];
    let rSum = j == n - 1 ? 0 : psum[n - 1] - psum[j];
    if (lSum === rSum) {
      return pivotIndex = j;
    }
  }

  return pivotIndex;
};
