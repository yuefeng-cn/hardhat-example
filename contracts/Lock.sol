// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    uint public balance;
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    function add() public {
        balance += 1;
    }
    
    function getBalance() public view returns (uint) {
        return balance;
    }
}
