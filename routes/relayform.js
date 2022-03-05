var express = require('express');
var router = express.Router();
const Mustache = require('mustache');
const path = require('path')
const fs = require("fs");
const template_path = path.join(__dirname, '../public/contracts/contract_template.mustache');
const template = fs.readFileSync(template_path).toString();

router.get('/viewcode', function(req, res, next) {
  const transaction = req.query
  const formatted_transaction = JSON.stringify(transaction, null, 2);
  const code = Mustache.render(template, transaction);
  res.render('viewcode', { title: 'Metamaskjs', code: code, data: formatted_transaction});
});

module.exports = router;
