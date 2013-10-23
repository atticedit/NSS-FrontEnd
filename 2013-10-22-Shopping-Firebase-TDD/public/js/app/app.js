'use strict';

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

// Firebase Schema
var Δdb;
var Δproducts = Δdb.child('products');
// var Δcustomers = Δdb.child('customers');
// var Δorders = Δdb.child('orders');

// Local Schema (defined in keys.js)
db.products = [];

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}

  $(document).foundation();
  initializeDatabase();
  turnHandlersOn();
}

// -------------------------------------------------------------------- //
// ---------------------- CLASSES DEFINED HERE ------------------------ //
// -------------------------------------------------------------------- //

function Product(image, name, price, off, weight){
  this.image = image;
  this.name = name;
  this.price = price;
  this.off = off;
  this.weight = weight;
  this.salePrice = function(){
    var x = parseFloat(this.price, 10);
    var y = (100 - parseFloat(this.off, 10)) / 100;
    return x * y;
  };
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initializeDatabase(){
  Δdb = new Firebase(db.keys.firebase);

  Δproducts.on('child_added', dbProductAdded); // do I need to pass snapshot here?
  // Δcustomers.on('child_added', dbCustomerAdded);
  // Δorders.on('child_added', dbOrderAdded);
}

function turnHandlersOn(){
  $('#add-product').on('click', clickAddProduct);
}

function turnHandlersOff(){
  $('#add-product').off('click');
}

// -------------------------------------------------------------------- //
// ---------------------------- clicks -------------------------------- //
// -------------------------------------------------------------------- //

function clickAddProduct(){
  var image = getValue('#product-image');
  var name = getValue('#product-name');
  var price = getValue('#product-price', parseFloat);
  var off = getValue('#product-off', parseFloat);
  var weight = getValue('#product-weight', parseFloat);
  var product = new Product(image, name, price, off, weight);
  delete product.salePrice;
  Δproducts.push(product);
}

// -------------------------------------------------------------------- //
// --------------------------- database ------------------------------- //
// -------------------------------------------------------------------- //

function dbProductAdded(snapshot){
  var product = snapshot.val();
  db.products.push(product);
  htmlAddProduct(product);
}

// -------------------------------------------------------------------- //
// ------------------------------ HTML -------------------------------- //
// -------------------------------------------------------------------- //

function htmlAddProduct(product){
  var productRow = '<tr>';
  var $productRow = $(productRow);
  $productRow.children('#product-image').css('background-image', 'url(' + product.image + ')').css('background-color', 'gray').css('background-size', 'cover');
  $productRow.children('#product-name').text(product.name);

  $('#products').append($productRow);

}

// -------------------------------------------------------------------- //
// ------------------------ utility functions ------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !== undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
