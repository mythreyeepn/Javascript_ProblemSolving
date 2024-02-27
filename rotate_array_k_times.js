/** Rotate an array k times  */
var arr = [1, 2, 3, 4, 5];
var k = 3;

function reverse(arr, i, j) {
  while (i <= j) {
    var c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
    i++;
    j--;
  }

  return arr;
}

arr = reverse(arr, 0, arr.length - 1);
arr = reverse(arr, 0, k - 1);
arr = reverse(arr, k, arr.length - 1);
console.log(arr);
