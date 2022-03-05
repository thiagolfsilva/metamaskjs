//File to test solidity compilation, not in use for the ExpressJS app
const Mustache = require('mustache');
const solc = require('solc');

const transaction = {
    "sender":"0xaf02a5c42F30816B0Ae6663f5623ceca1C6C3e31",
    "recipient":"0x3A84DbB7b745Eb84F931536d8DBEd6aFEc354Ee0",
    "token_address":"0xcfd53099E741bfE9ED4e757bbA9B93c5cb3e37e2",
    "amount":"3"
}

const fs = require("fs");

const path = "../contracts/contract_template.mustache";

const template = fs.readFileSync(path).toString();

const dynamic = Mustache.render(template, transaction);

var input = {
    language: 'Solidity',
    sources: {
      'dynamic.sol': {
        content: dynamic
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);
  
  // `output` here contains the JSON output as specified in the documentation
  for (var contractName in output.contracts['dynamic.sol']) {
    console.log(
      contractName +
        ': ' +
        output.contracts['dynamic.sol'][contractName].evm.bytecode.object
    );
  }


/*fs.readFile(path, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  }) */


/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metamaskjs' });
});

module.exports = router;
*/