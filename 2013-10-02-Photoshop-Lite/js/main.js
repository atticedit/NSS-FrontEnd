'use strict';

$(document).ready(initialize);

function initialize(){
  $('#add_color').click(addColor);
  // $('parent_selector').on('name of event', 'child selector', name_of_function);
  $('#add_box').click(addBoxes);
  $('#colors').on('click', '.box', colorPaletteClicked);
  $('#boxes').on('mouseover', '.pxl', canvasMouseOver);
}

function canvasMouseOver(){
  var $canvas = $(this);
  var brushColor = $('#brush').css('background-color');
  $canvas.css('background-color', brushColor);
}

function colorPaletteClicked(){
  var $box = $(this);
  var color = $box.css('background-color');
  $('#brush').css('background-color', color);
}

function addColor(){
  var color = $('#color').val();
  var $colors = $('<div>');
  $colors.addClass('box');
  $colors.css('background-color', color);

  $('#colors').prepend($colors);
  clearInputAndFocus();
}

function addBoxes(){
  // debugger;
  var amount = $('#amount').val();
  amount = parseInt(amount, 10);
  for(var i = 0; i < amount; i++)
  {
    var $canvas = $('<div>');
    $canvas.addClass('pxl');
    // var color = :
    // $canvas.css('background-color', '#33ff66');
    $('#boxes').append($canvas);
  }
}

function clearInputAndFocus(){
  $('#color').val('');
  $('#color').focus();
}