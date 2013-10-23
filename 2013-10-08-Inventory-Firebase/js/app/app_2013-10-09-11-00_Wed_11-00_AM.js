// 10/9/13 11:00 AM version
// this project as it existed before our pre-lunch lab to create
// rows from the database rather than directly from the values entered

'use strict';

var Δdb;
var Δitems;
var items;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#save').click(save);
  $('#add').click(add);

  Δdb = new Firebase('https://ls-inventory.firebaseio.com/');
  // sets up an internal node, a child of db called items. It's an array, so this
  // is worth doing because it allows you to talk to things within it
  Δitems = Δdb.child('items');
  // sets up a listener, where we'll be notified initially of the existing data and
  // then subsequently of any changes to db.
  Δdb.on('value', receivedDbData);
}

function receivedDbData(snapshot){
  console.log('receivedDbData is being called.');
  var inventory = snapshot.val();
  // sets the value of the div with id of person to the value at db's fullname location
  $('#person').val(inventory.fullName);
  $('#address').val(inventory.address);

  if (inventory.items){
    console.log('yes there are items');
  } else {
    console.log('no there are not items');
    items = [];
  }
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

  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  // want to take the value grabbed by the line above where name was defined and
  // put it into the row but not through string concatenation
  $row.children('.name').text(name);
  $row.children('.count').text(count);
  $row.children('.value').text(value);
  $row.children('.room').text(room);
  $row.children('.condition').text(condition);
  $row.children('.date').text(date);

  var item = {};
  item.name = name;
  item.count = count;
  item.value = value;
  item.room = room;
  item.condition = condition;
  item.date = date;

  $('#items').append($row);

  items.push(item);
  Δitems.set(items);
}