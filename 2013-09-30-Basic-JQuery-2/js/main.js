$(document).ready(initialize);

function initialize()
{
  $('#button1').click(change_green);
  $('#name_btn').click(count_chars);
}

function change_green()
{
  $('#green').css('background-color', 'green');
}

function count_chars()
{
  var chars = $('#name_txt').val();
  $('#name_div').text(chars.length);
}

// function count_chars()
// {
//   var chars = ($('#name_txt').val()).length;
//   $('#name_div').text(chars);
// }