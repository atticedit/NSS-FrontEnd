// 10/9/13 11:55 AM version
//
// *******unfinished*******
//
// this version is what I had in progress when we reached the end of the time Chyld had
// given us to create rows from the database rather than directly from the values entered.
//
// I started the lab going through the existing code methodically to make sure I understood
// it, so was very slow to implement changes. It's missing many of the steps and has some
// things in the middle of being moved around.
//
// I also had trouble with the console error message "Uncaught TypeError: Cannot call
// method 'push' of undefined", which popped up a lot. There didn't seem to be any
// problem with the code, and when similar things were happening for me or others
// yesterday refreshing the page and trying again would get rid of it. Not this time.
//
// The one part I thoroughly thought through and implemented is tiny but gratifying:
// I saw that the add function should just send the data to Firebase and that's it,
// so my code is identical to Chyld's. I had started on the task of figuring out what
// functions should exist for handling the rest of the steps, and wasn't yet decided
// on whether the remaining steps could all be in the receivedDbData function or
// whether I wanted a separate function to create the rows.
//
//

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

  // **************add the rows here from db's items******************
  var row = '<tr><td class="name"></td><td class="count"></td><td class="value"></td><td class="room"></td><td class="condition"></td><td class="date"></td></tr>';
  var $row = $(row);

  // want to take the value grabbed by the line above where name was defined and
  // put it into the row but not through string concatenation
  $row.children('.name').text(Δdb.children('name'));
  $row.children('.count').text(Δdb.children('count'));
  $row.children('.value').text(Δdb.children('value'));
  $row.children('.room').text(Δdb.children('room'));
  $row.children('.condition').text(Δdb.children('condition'));
  $row.children('.date').text(Δdb.children('date'));

  $('#items').append($row);

  // //
  // if (inventory.items){
  //   console.log('yes there are items');
  // } else {
  //   console.log('no there are not items');
  //   items = [];
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

// currently each time add runs it creates a row and populates it with
// the values in each field
// -----------------
// I'll want to change it to send the data to db
// -----------------
// update: done
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

  items.push(item);
  Δitems.set(items);
}