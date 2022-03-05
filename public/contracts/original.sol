// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

interface IERC20 {
  function totalSupply() external view returns (uint256);
  function balanceOf(address who) external view returns (uint256);
  function allowance(address owner, address spender)
    external view returns (uint256);
  function transfer(address to, uint256 value) external returns (bool);
  function approve(address spender, uint256 value)
    external returns (bool);
  function transferFrom(address from, address to, uint256 value)
    external returns (bool);
  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );
  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );
}

contract Relay {
    address public sender = 0xaf02a5c42F30816B0Ae6663f5623ceca1C6C3e31;
    address public recipient = 0x3A84DbB7b745Eb84F931536d8DBEd6aFEc354Ee0;
    address public token_address = 0xcfd53099E741bfE9ED4e757bbA9B93c5cb3e37e2;
    bool public available = false;
    uint public amount = 2 * 10 ** 18;

    function send_tokens() public {
        require(msg.sender == sender);
        IERC20 token = IERC20(token_address);
        token.transferFrom(sender, address(this), amount);
        available = true;
    }

    function get_tokens() public {
        require(msg.sender == recipient);
        IERC20 token = IERC20(token_address);
        token.transfer(recipient, amount);
        available=false;
    }
}