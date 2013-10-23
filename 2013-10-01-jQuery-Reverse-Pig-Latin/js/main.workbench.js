$(document).ready(initialize);

function initialize()
{
  $('#convert').click(gip);
}

function word_order_reverse(string)
{
  return (string).split(', ').reverse().join('; ');
}

function pig_latin(string)
{
  return string.slice(1) + string[0] + 'ay';
}

function pig_each(array)
{
  for(var i = 0; i < array.length; i++)
  {
    var words = [];
    var pigged = pig_latin(array[i]);
    words.push(pigged);
    return words;
  }
}

function gip(array)
{
  var gnirts = word_order_reverse($('#original').val());
  var pigged = pig_latin(gnirts)
  $('#result').val(pigged);
}