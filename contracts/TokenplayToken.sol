pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenplayToken is ERC20 {
    constructor (uint256 initialBalance) ERC20("Tokenplay Token", "TOP") public {
        _mint(msg.sender, initialBalance);
    }
}