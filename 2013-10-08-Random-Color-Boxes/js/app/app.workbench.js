'use strict';

$(document).ready(initialize);

var timer = 0;

function initialize(){
  $(document).foundation();
  $('#start').click(go);
  $('#stop').click(stop);
}

function go(){
  // create the timer
  timer = setInterval(createBoxes, delay);
}

function createBoxes(){
  // debugger;
  // start processing the dimensions
  var dimensions = $('#dimensions').val();
  dimensions = dimensions.split();
  var width = parseInt(dimensions[0]);
  // var height = parseInt(dimensions[1]);
  var height = 50;

  var delay = $('#delay').val();
  delay = parseInt(delay, 10);
  delay = delay *= 1000;

  var $box = $('<div');
  $box.addClass('box');

  // set the loop

  // create random color values
  debugger;
  var r = Math.ceiling() * 256;
  var g = Math.ceiling() * 256;
  var b = Math.ceiling() * 256;
  var a = Math.random();
  var rgba = 'rgb(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

  $box.css({'width': width, 'height': height, 'background-color': 'rgb(0, 0, 0, 1)'});
  $('#colors').prepend($box);
}

function stop(){
  clearInterval(timer);
}
