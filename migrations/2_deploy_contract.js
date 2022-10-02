const TokenplayToken = artifacts.require('./TokenplayToken.sol');

module.exports = async function(deployer) {
  const initialBalance = web3.utils.toWei('1000000');
  await deployer.deploy(TokenplayToken, initialBalance);
};
