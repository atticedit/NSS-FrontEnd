'use strict';

$(document).ready(initialize);

function initialize(){
  $('#add').click(addRow);
                                        // look inside the table (the parent element that we know exists) for something with class rsvp, and when that's clicked run the rsvp function
  $('table').on('click', '.rsvp', rsvp);
  $('table').on('click', '.nuke', nuke);
  $('table').on('click', '.up, .down', move);
}

function move(){
  var $moveButton = $(this);
  var buttonClass = $moveButton.attr('class');
  var $tr = $moveButton.parent().parent();
  if(buttonClass === 'up'){
    var $upTo = $tr.prev();
    $upTo.before($tr);
    // alert("Move yourself up, Bob.");
    // move the entire row up one position
  } else {
    var $downTo = $tr.next();
    $downTo.after($tr);
    // alert("Move yourself down, you lazy bastard. Cripes, Bob.");
    // move the entire row down one position
  }
}

function nuke(){
  var $button = $(this);
  var $tr = $button.parent().parent();
  $tr.remove();
}

function rsvp(){
                                        // added an alert just after creating the function to see if things work so far
  // alert('hey!');
  var $button = $(this);
                                        // could be $button.sibling() instead of $button.prev() if we wanted
  var $textbox = $button.prev();
  var text = $textbox.val();
  var items = text.split(', ');
  var name = items[0];
  var food = items[1];
  // debugger;

  var $namebox = $button.parent().prev().prev();
  var $foodbox = $button.parent().prev();
  $namebox.text(name);
  $foodbox.text(food);

                                        // attempt at adding a nuke button (I got stuck on selecting the wrong thing so didn't get that far)
  // var $nuker = $('<td>');
  // $nuker.addClass('unreply');
  // var $unreply = $('<input>');
  // $unreply.attr('type', 'button');
  // $unreply.val('unreply');
  // $('table').children().append($nuker);
  // $nuker.append($unreply);
}

function addRow(){
  var $tr = $('<tr>');
  var $name = $('<td>');
  $name.addClass('name');
  var $food = $('<td>');
  $food.addClass('food');
  var $ctrl = $('<td>');
  $ctrl.addClass('ctrl');
  var $nuke = $('<td>');
  $nuke.addClass('nuke');
  var $move = $('<td>');
  $move.addClass('move');

  var $input = $('<input>');
                                        // don't want to give these a class because each dynamically generated input would have the same class
  $input.attr('type', 'text');

                                        // buttons can all have same class, because all will be identical
  var $button = $('<input>');
  $button.attr('type', 'button');
                                        // set the text displaying on the button (could actually use attr instead of val)
  $button.val('RSVP!');
                                        // add the class
  $button.addClass('rsvp');

  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('Nuke!');
  $nukeButton.addClass('nuke');

  var $upButton = $('<input>');
  $upButton.attr('type', 'button');
  $upButton.val('Move Up!');
  $upButton.addClass('up');

  // var $upButton = $('<input>');
  // $upButton.attr('type', 'button');
  // $upButton.val('Move Up!');
  // $upButton.addClass('up');

  var $downButton = $('<input>');
  $downButton.attr('type', 'button');
  $downButton.val('Move Down!');
  $downButton.addClass('down');

                                        // programmatically building a DOM tree in JS
  $ctrl.append($input, $button);
  $nuke.append($nukeButton);
  $move.append($upButton, $downButton);
  $tr.append($name, $food, $ctrl, $nuke, $move);
  $('table').append($tr);

                                        // as soon as you click you focus on the text box
  $input.focus();
}