$(document).ready(initialize)
;
function initialize()
{
  $('#pig').click(piggifier);
}

function pig_latin(string)
{
  return string.slice(1) + string[0] + 'ay';
}

function piggifier()
{
  var word = $('#word').val();
  var pigged = pig_latin(word);
  $('#result').text(pigged);
}