/** Find the first repeated elemnet in the string */
function findFirstRepeated(string) {
  let array = string.split("");
  let obj = {};
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      return array[i];
    } else {
      obj[array[i]] = 1;
    }
  }
  return false;
}

console.log(findFirstRepeated("Abcdefgb"));
