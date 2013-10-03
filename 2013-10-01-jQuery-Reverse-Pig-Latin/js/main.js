$(document).ready(initialize);

function pig_latin(string)
{
  return string.slice(1) + string[0] + 'ay';
}

function reverse_order_pig_latinize(string)
{
  debugger;

  var step1 = string.split(', ');
  var step2 = step1.reverse();
  for(var i = 0; i <step2.length; i++)
    step2[i] = pig_latin(step2[i]);
  var new_string = step2.join('; ');
  return new_string;
}

function initialize()
{
  $('#convert').click(conversion);
}

function conversion()
{
  var original = $('#original').val();
  var intermediate = reverse_order_pig_latinize(original);
  $('#result').val(intermediate);
}