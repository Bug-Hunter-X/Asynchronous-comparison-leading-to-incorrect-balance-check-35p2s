async function checkBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    const balanceNum = parseFloat(web3.utils.fromWei(balance, 'ether'));
    if (balanceNum < 10) {
      // Correctly handle the case where the balance is less than 10
      console.log('Balance is less than 10 ETH');
    } else {
      console.log('Balance is greater than or equal to 10 ETH');
    }
  } catch (error) {
    console.error('Error checking balance:', error);
  }
}

// ... later in the code ...

await checkBalance(address); // Correctly await the promise