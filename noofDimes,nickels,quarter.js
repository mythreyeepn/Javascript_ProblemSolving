/** Find the numbers of coins you can give basing on the amount given  */
var remainingAmnt = 182;
let coinsObj = {
  quarters: 25,
  dime: 10,
  nickel: 5,
  cent: 1,
};
let countObj = {};

for (let coin in coinsObj) {
  countObj[coin] = Math.floor(remainingAmnt / coinsObj[coin]);
  remainingAmnt = remainingAmnt % coinsObj[coin];
}
console.log(countObj);
