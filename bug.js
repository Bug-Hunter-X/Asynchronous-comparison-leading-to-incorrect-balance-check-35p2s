function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// ... later in the code ...

if (getBalance() < 10) {
  // This will always be false because the balance is a promise and not a number
}