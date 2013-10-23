$(document).ready(initialize);

function initialize()
{
  $('#calculate').click(conversion);
}

function number_to_integers(count)
{
  // debugger;
  var integers = _.range(1, count+1);
  // var $count = count;
  // for(var i = 1; i < count.length; i++)
  // {
  //   var $position = $count.text[i];
  //   integer_count.push($position);
  // }
    // integer_count.push($count[i]);
  return integers;
}

function integers_to_multiplied_integers(integers, multiplier)
{
  var output_array = [];
  for(var i = 0; i < integers.length; i++)
  {
    var output_count = integers[i] * multiplier;
    output_array.push(output_count);
  }
  return output_array;
}

function sum_of_string_elements(multiplied_integers)
{

}

function conversion()
{
  // debugger;
  var original = $('#original').val();
  var input_array = original.split(', ');
  var count = parseInt(input_array[0]) ;
  var multiplier = parseInt(input_array[1]);
  var integers = number_to_integers(count);
  // var integers = ['1', '2', '3', '4', '5', '6'];
  var multiplied_integers = integers_to_multiplied_integers(integers, multiplier);
  var output_string = multiplied_integers.join('+');
  var sum = sum_of_string_elements(multiplied_integers);
  // var sum_of_string_elements = 45;
  $('#result').val(output_string + '=' + sum_of_string_elements);
}