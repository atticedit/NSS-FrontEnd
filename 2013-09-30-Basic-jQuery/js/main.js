$(document).ready(initialize);

// function alert_me ()
// {
//   alert('you have alerted me');
// }

function change_div_text()
{
  var name = $('#name').val();
  var color = $('#color').val();
  $('#b').text(name).css('background-color', color);
}

function age_verification()
{
  var age = parseInt($('#age').val());
  if(age < 21) {
    $('#age_div').text('Sorry, you can\'t drink!');
    $('#age_div').css('background-color', 'red');}
  else {
    $('#age_div').text('You can drink!');
    $('#age_div').css('background-color', 'green');}
}

// Chyld's version:
// function age_verification()
// {
//   var age = $('#age').val();
//   age = parseInt(age);

//   if(age < 21) {
//     $('#age_div').text('Sorry, you can\'t drink!');
//     $('#age_div').css('background-color', 'red');}
//   else {
//     $('#age_div').text('You can drink!');
//     $('#age_div').css('background-color', 'green');}
// }

function initialize() {
  // $('#clicker').click(alert_me);
  $('#clicker').click(change_div_text);
  $('#age_check').click(age_verification);
  // $('div').css('background-color', 'red');
  // $('div').css('font-size', '25px');
  // $('div').css('color', 'yellow');

  // var color = prompt('What color?');
  // $('div').css('background-color', color);
  // var size = prompt('What font size?');
  // $('div').css('font-size', size);

  // $('#a').addClass('funny');

  // var selector = prompt('Which div?');
  // var cls = prompt('Class to add?');
  // var new_text = prompt('What would you like to say?');
  // $(selector).addClass(cls);
  // $(selector).text(new_text);

  // var selector_to_hide = prompt('Which node do you want to hide?');
  // $(selector_to_hide).hide();
}