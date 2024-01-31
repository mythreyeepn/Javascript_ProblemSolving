const CheckForPalindrome = (inputstring) => {
  let i = 0;
  let j = inputstring.length - 1;
  while (i <= j) {
    if (inputstring[i] !== inputstring[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(CheckForPalindrome("madam"));
