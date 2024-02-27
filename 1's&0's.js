/** In the given array of 1's nd 0's move all the ones to the left and the all the )'s to the right */
var array = [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0];

let i = 0;
let j = array.length - 1;
while (i <= j) {
  if (array[i] === 1 && array[j] === 0) {
    i = i + 1;
    j = j - 1;
  } else if (array[i] === 0 && array[j] === 1) {
    //swap
    let c = array[i];
    array[i] = array[j];
    array[j] = c;
    i = i + 1;
    j = j - 1;
  } else if (array[i] === 0 && array[j] === 0) {
    j = j - 1;
  } else if (array[i] === 1 && array[j] === 1) {
    i = i + 1;
  }
}
console.log(array);
