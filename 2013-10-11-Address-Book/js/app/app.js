'use strict';

//Firebase Schema
var Δdb;
var Δpeople;

//Local Schema
var db = {};
db.people = [];

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  Δdb = new Firebase('https://ls-address-book.firebaseio.com/');
  Δpeople = Δdb.child('people');
  $('#add').click(add);
  Δpeople.on('child_added', personChanged);
}

function add(){
  var name = $('#name').val();
  var address = $('#address').val();
  var web = $('#web').val();
  var email = $('#email').val();
  var photo = $('#photo').val();

  var person = {};
  person.name = name;
  person.address = address;
  person.web = web;
  person.email = email;
  person.photo = photo;

  Δpeople.push(person);
}

function personChanged(snapshot){
  console.log('personChanged function has been called.');
  var person = snapshot.val();
  db.people.push(person);
  createCard(person);
}

function createCard(person){
  console.log('createCard function has been called.');
  var card = '<ul class="small-3 columns"><li class="photo"></li><li class="name"></li><li class="address"></li><a class="web" href=http://' + person.web + '></a><a class="email" href="mailto:' + person.email + '"></a></ul>';
  var $card = $(card);

  $card.children('.photo').css('background-image', 'url(' + person.photo + ')').css('background-color', 'gray').css('background-size', 'cover');
  $card.children('.name').text(person.name);
  $card.children('.address').text(person.address);
  $card.children('.web').text(person.web);
  $card.children('.email').text(person.email);

  $('#cards').prepend($card);
}