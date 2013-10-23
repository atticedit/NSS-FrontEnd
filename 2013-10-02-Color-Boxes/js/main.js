// some of this I typed in as we did the lab, other parts straight from github.com/chyld since my virtual machine was hanging during the in-class lab

$(document).ready(initialize);

function initialize()
{
  $('#colorbutton').click(makeColorBoxes);
  $('#clearinput').click(clearInput);
  $('#clearboxes').click(clearBoxes);
  $('#colorstring').focus();
}

function clearBoxes()
{
  $('#boxes').empty();
  clearInput();
}

function clearInput()
{
  $('#colorstring').val('');
  $('#colorstring').focus();
}

function makeColorBoxes()
{
  var colorstring = $('#colorstring').val();
  var colors = colorstring.split(', ');
  for(var i = 0; i < colors.length; i++)
  {
    var $color = $('<div>');
    $color.addClass('box');
    $color.text(colors[i]);
    $color.css('background-color', colors[i]);

    $('#boxes').append($color);
  }
}