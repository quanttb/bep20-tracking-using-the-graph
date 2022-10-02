const TokenplayToken = artifacts.require('./TokenplayToken.sol');

module.exports = async function(deployer) {
  const oneEther = web3.utils.toWei('1');
  const twoEther = web3.utils.toWei('2');
  const token = await TokenplayToken.deployed();
  console.log('Token address:', token.address);
  let accounts = await web3.eth.getAccounts();
  await token.transfer(accounts[1], oneEther);
  await token.transfer(accounts[2], twoEther);
};
