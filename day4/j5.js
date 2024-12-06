function atmWithdrawal(balance, amount) {
  if (amount % 10 !== 0) {
    return " Amount must be a multiple of 10.";
  }
  if (amount > 500) {
    return " Maximum withdrawal amount is 500.";
  }
  if (amount > balance) {
    return "Insufficient balance.";
  }
  return "Withdrawal successful.";
}
const balance = 1000;
const amountToWithdraw = 420;
const result = atmWithdrawal(balance, amountToWithdraw);
console.log(result);