// version consolidating cashBalance, stockBalance, and totalBalance into db.balance

'use strict';

//Firebase Schema
var Δdb;
var Δbalance;
var Δcash;
var Δstocks;

//Local Schema
var db = {};
db.balance.cash = 0;
db.balance.stocks = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://ls-stock-market.firebaseio.com/');
  Δbalance = Δdb.child('balance');
  Δcash = Δdb.balance.child('cash');
  Δstocks = Δdb.balance.child('stocks');
  getStockQuote();
  $('#setCash').click(setCash);
  Δcash.on('value', cashBalanceChanged);
}

// function requestQuote(symbol, fn){
//   var data = {symbol: symbol};
//   $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
// }

function cashBalanceChanged(snapshot){
  db.balance.cash = snapshot.val();
  $('#cashBalance').text('Cash Balance: $' + db.balance.cash + '.00');
}

function setCash(){
  db.balance.cash = parseInt($('#cash').val(), 10);
  Δcash.set(db.balance.cash);
}

function getStockQuote(){
  var data = {symbol: 'AAPL'};
  $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, receivedQuote);
}

function receivedQuote(data, textStatus, jqXHR){
  console.log(data);
  console.log(textStatus);
  console.log(jqXHR);
}