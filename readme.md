## Description

Connect to Metamask, send transactions and create contracts

This is a proof of concept, aiming at testing the components of creating an application that brings general purpose smart contract functionality to technical users. The parts implemented so far include:
1. Connecting to a metamask wallet
2. Generating a custom smart contract from a template using user input

The contract implemented is a relay smart contract, we set the sender, recipient, token_address and amount in the smart contract. First the sender calls the send_tokens function to deposit the set amount into the contract. Then, the recipient calls get_tokens to get the tokens. Only sender and recipient can call send_tokens and get_tokens respectively.
1. Contracts living in public/contracts
2. Instance tested on Ropsten at https://ropsten.etherscan.io/address/0xc7f7f967ed19cc45ca62997a6ccac3a09337580e

Next steps include

1. Form validation
2. Compiling the contract and uploading to the blockchain through metamask 

## Running the code

`node app.js`
