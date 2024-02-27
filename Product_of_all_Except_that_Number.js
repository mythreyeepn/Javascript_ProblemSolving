/** Find the product of all numbers except that particular number in an array */
var nums = [1, 2, 3, 4, 5];
function getProductExcept() {
  var leftArray = [nums[0]];
  var RightArray = [];
  RightArray[nums.length - 1] = nums[nums.length - 1];
  var productArray = [];
  for (var i = 1; i < nums.length; i++) {
    leftArray[i] = leftArray[i - 1] * nums[i];
  }
  for (var j = nums.length - 2; j >= 0; j--) {
    RightArray[j] = RightArray[j + 1] * nums[j];
  }
  for (var m = 0; m <= nums.length - 1; m++) {
    if (m === 0) {
      productArray[m] = RightArray[m + 1];
    } else if (m === nums.length - 1) {
      productArray[m] = leftArray[m - 1];
    } else {
      productArray[m] = leftArray[m - 1] * RightArray[m + 1];
    }
  }
  return productArray;
}
console.log(getProductExcept());
