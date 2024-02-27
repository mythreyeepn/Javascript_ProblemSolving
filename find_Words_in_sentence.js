/**Find the words in a given sentence */
const str =
  "set of words that is complete in itself typically containing a subject";

let wordsArray = [];
let word = "";
for (let i = 0; i <= str.length; i++) {
  if (str[i] !== " ") {
    if (i === str.length) {
      wordsArray.push(word);
      word = "";
    } else {
      word += str[i];
    }
  } else {
    wordsArray.push(word);
    word = "";
  }
}
console.log(wordsArray);
