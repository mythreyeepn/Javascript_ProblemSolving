/** Find 2 numbers pairs  in an array whose sum is equal to the target given  */
var arr = [2, 7, 11, 15];
var sum = 9;
var mainArray = [];

let Obj1 = {};
for (var i = 0; i < arr.length; i++) {
  Obj1[arr[i]] = i;
}
for (var x = 0; x < arr.length; x++) {
  if (Obj1[sum - arr[x]] && Obj1[sum - arr[x]] !== x) {
    let t = [];
    t.push(arr[x], sum - arr[x]);
    Obj1[sum - arr[x]] = false;
    mainArray.push(t);
  }
}
console.log(mainArray);
