/**Find the second largest number in the array */
let max = 0;
let secondMax = 0;
let arr = [4, 12, 56, 34, 76, 36, 66, 71];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > secondMax && arr[i] !== max) {
    secondMax = arr[i];
  }
}
console.log(max, secondMax);
