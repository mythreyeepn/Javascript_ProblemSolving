/**Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index. */

var findMiddleIndex = function (nums) {
  var psum = [];
  var n = nums.length;
  var findMiddleIndex = -1;
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
      return (findMiddleIndex = j);
    }
  }

  return findMiddleIndex;
};
