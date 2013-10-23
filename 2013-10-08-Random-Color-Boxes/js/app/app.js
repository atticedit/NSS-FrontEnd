'use strict';

// Comments in this file document the differences between this file, which is
// Chyld's code, and the code I'd managed to write in the time he gave us,
// which is saved in app.workbench.js.

$(document).ready(initialize);

// I used var timer = 0; (which apparently works too)
var timer;

// I had this
function initialize(){
  $(document).foundation();
  $('#start').click(start);
  $('#stop').click(stop);
}

  // I had this, other than that when we stopped working to see Chyld's code
  // I had just moved the timer out of the createBoxes function
  // and into its own start function, but hadn't finished.
  // So the lines handling delay were still in the createBoxes function,
  // and that obviously wasn't going to work -- mostly because delay would
  // remain undefined in the start function and would be pointless in the other.
function start(){
  var delay = $('#delay').val();
  delay = parseFloat(delay, 10) * 1000;
  timer = setInterval(createBoxes, delay);
}

function createBoxes(){
  // Had this
  var dimensions = $('#dimensions').val();
  // Needed to add the parameters here, because you have to specify the delimiter as
  // you split. This was a particular sticking point, where I couldn't figure out how
  // to parseInt the second position of dimensions.split() so that I would get the
  // number rather than NaN.
  dimensions = dimensions.split(', ');
  // Don't even need to use parseInt because it will go into the css as a string
  var width = dimensions[0];
  var height = dimensions[1];

  // Missed the syntax: needed Math.floor wrapped around math.Random
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  // Had this (other than that Chyld and I used different variable names)
  var alpha = Math.random();
  //Had this other than weirdly declaring it as rgb even though I was using the alpha
  var rgba = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';

  // Had this
  var $box = $('<div>');
  $box.addClass('box');
  // Had a different syntax I modeled on an online reference for combining multiple css
  // declarations in one [property?], and I hadn't gotten it working yet. With some
  // tweaks it might be another successful way.
  $box.css('width', width).css('height', height).css('background-color', rgba);
  // Had this (other than that I was choosing to append, which as Chyld says just
  // isn't as visually satisfying)
  $('#colors').prepend($box);
}

// Had this
function stop(){
  clearInterval(timer);
}
