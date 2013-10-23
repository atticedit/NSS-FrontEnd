'use strict';

//Firebase Schema
var Δdb;
var ΔcashBalance;
var ΔstocksValue;

//Local Schema
var db = {};
db.cashBalance = 0;
db.stocksValue = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://ls-stock-market.firebaseio.com/');
  ΔcashBalance = Δdb.child('cashBalance');
  ΔstocksValue = Δdb.child('stocksValue');
  // getStockQuote();
  $('#setCashBalance').click(setCashBalance);
  ΔcashBalance.on('value', cashBalanceChanged);
}

// function requestQuote(symbol, fn){
//   var data = {symbol: symbol};
//   $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
// }

function setCashBalance(){
  db.cashBalance = parseInt($('#initialFunds').val(), 10);
  ΔcashBalance.set(db.cashBalance);
  $('#setupFunds').remove();
}

function cashBalanceChanged(snapshot){
  db.cashBalance = snapshot.val();
  $('#cashBalance').text(db.cashBalance + '.00');
}

// function getStockQuote(){
//   var data = {symbol: 'AAPL'};
//   $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, receivedQuote);
// }

// function receivedQuote(data, textStatus, jqXHR){
//   console.log(data);
//   console.log(textStatus);
//   console.log(jqXHR);
// }

// Chyld's code blocks
// *************************************************************
//
// // This is the function I used to purchase a stock
//
// function purchase(){
//   var symbol = $('#symbol').val();
//   var quantity = $('#quantity').val();
//   quantity = parseInt(quantity, 10);

//   requestQuote(symbol, function(data, textStatus, jqXHR){
//     var quote = data.Data;

//     if(quote.LastPrice * quantity <= db.balance.cash){
//       db.balance.cash -= quote.LastPrice * quantity;
//       db.balance.stock += quote.LastPrice * quantity;
//       db.balance.total = db.balance.cash + db.balance.stock;
//       Δbalance.set(db.balance);

//       var stock = {};
//       stock.symbol = symbol;
//       stock.purchasePrice = quote.LastPrice;
//       stock.quantity = quantity;
//       Δstocks.push(stock);
//     }

//     $('#symbol').val('');
//     $('#quantity').val('');
//   });
// }
//
// // This is the function that asks for a stock price
//
// function requestQuote(symbol, fn){
//   var data = {symbol: symbol};
//   $.getJSON('http://dev.markitondemand.com/Api/Quote/jsonp?callback=?', data, fn);
// }