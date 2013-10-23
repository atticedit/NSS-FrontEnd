// 10/9/13 3:57 PM version
//
// *******unfinished*******
//
// reflects new code in progress from the in-class exercise to add a box displaying
// total cost

'use strict';

var Δdb;
var Δitems;
var items = [];
var sum = 0;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#add').click(add);
  $('#save').click(save);

  Δdb = new Firebase('https://ls-inventory.firebaseio.com/');
  // sets up an internal node, a child of db called items. It's an array, so this
  // is worth doing because it allows you to talk to things within it
  Δitems = Δdb.child('items');
  // sets up a listener, where we'll be notified initially of the existing data and
  // then subsequently of any changes to db.
  Δdb.once('value', receiveDb);
  Δitems.on('child_added', childAdded);
}

function childAdded(snapshot){
  var item = snapshot.val();
  items.push(item);
  createRow(item);

  var itemtotal = _____;
  sum += itemtotal;
  updateTotalCost(item);
}

function receiveDb(snapshot){
  var inventory = snapshot.val();
  // sets the value of the div with id of person to the value at db's fullname location
  $('#person').val(inventory.fullName);
  $('#address').val(inventory.address);

  var itemtotal = _____;
  sum += itemtotal;
  updateTotalCost(item);

  // items = [];

  // now unnecessary
  // -------------------------------
  // for(var property in inventory.items){
  //   var item = inventory.items[property];
  //   items.push(item);
  // }

  // these lines are now unnecessary because this function will only get called once,
  // when page loads, in which case items will be empty
  // -------------------------------
  // // finds the first child of #items that's a tr (which is the header) and detaches it
  // var $header = $('#items tr:first-child').detach();
  // // empties items and then appends the header
  // $('#items').empty().append($header);
  // // creates a loop that will call a function for as many times as there are children
  // // of items (meaning for as many items as there are / as many rows as we need)

  // now unnecessary
  // -------------------------------
  // for(var i = 0; i < items.length; i++){
  //   createRow(items[i]);
  // }
}

function save(){
  var fullName = $('#person').val();
  var address = $('#address').val();
  var inventory = {};
  inventory.fullName = fullName;
  inventory.address = address;

  Δdb.update(inventory);
}

function add(){
  var name = $('#name').val();
  var count = $('#count').val();
  var value = $('#value').val();
  var room = $('#room').val();
  var condition = $('#condition').val();
  var date = $('#date').val();

  var item = {};
  item.name = name;
  item.count = count;
  item.value = value;
  item.room = room;
  item.condition = condition;
  item.date = date;

  Δitems.push(item);
}

function createRow(item){
  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  $row.children('.name').text(item.name);
  $row.children('.count').text(item.count);
  $row.children('.value').text(item.value);
  $row.children('.room').text(item.room);
  $row.children('.condition').text(item.condition);
  $row.children('.date').text(item.date);

  $('#items').append($row);
}

function makeCurrency(number){
  return '$' + number + '.00';
}

function displayTotalCost(){
  $('#totalcost').append(makeCurrency(sum));
}