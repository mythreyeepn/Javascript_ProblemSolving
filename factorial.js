const factorialCalc = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n * factorialCalc(n - 1);
  }
};

const factorialResult = (n) => {
  return factorialCalc(n);
};

console.log(factorialResult(5));
