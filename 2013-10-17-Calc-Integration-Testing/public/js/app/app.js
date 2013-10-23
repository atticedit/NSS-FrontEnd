'use strict';

$(document).ready(initialize);

function initialize(fn, flag){
  if(!canRun(flag)) {return;}

  $(document).foundation();
  $('#calculate').click(clickCalculate);
  $('#getSum').click(clickGetSum);
  $('#getProduct').click(clickGetProduct);
  // $('#removeNegatives').click(clickremoveNegatives);
  // $('#removePositives').click(clickremovePositives);
  $('#history').on('click', '.remove', clickRemove);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickCalculate(){
  // this approach doesn't clear the text inputs, so the test fails
  //
  // var op1 = parseInt($('#op1').val());
  // var op2 = parseInt($('#op2').val());
  // var operator = $('#operator').val();

  $('#result').empty();

  var op1 = getValue('#op1');
  var op2 = getValue('#op2');
  var operator = getValue('#operator');

  // this approach just isn't necessary when you can use eval
  //
  // if(operator === '*'){
  //   var result = op1 * op2;
  // }
  // if(operator === '/'){
  //   var result = op1 / op2;
  // }
  // if(operator === '+'){
  //   var result = op1 + op2;
  // }
  // if(operator === '-'){
  //   var result = op1 - op2;
  // }

  var computation = op1 + operator + op2;
  var result = eval(computation);

  // var $span = $('<span>');
  // $span.text(result);
  // $('#result').text($span);

  htmlUpdateResult(result);
  htmlUpdateHistory(op1, op2, operator, result);
  // return focus to #op1
  // _____________
}

function clickRemove(){
  $(this).parent().remove();
}

function clickGetSum(){
  // var results = [];
  // results =
  // var sum = _.reduce(results, function(memo, num){ return memo + num; }, 0);
  var sum = _.reduce([5, 6, 1], function(memo, num){ return memo + num; }, 0);
  $('#sum').val(sum);
}

function clickGetProduct(){
  var results = [];
  $('#history > li > .result').each(function(){
    var result = parseFloat($('#history > li > .result'));
    results.push(result);
  });

  var product = _.reduce(results, function(memo, num){ return memo * num; }, 1);
  // var product = _.reduce([5, 6, 1], function(memo, num){ return memo * num; }, 1);
  $('#product').val(product);
  // debugger;
}

function clickremoveNegatives(){
  // $(li with #result having negative value).addClass(negative);
  // $('.negative').parent().remove();
  $('span.result:contains(“-”)').parent().remove();
}

function clickremovePositives(){
  // $(li with #result having positive value).addClass(positive);
  // $('.positive').parent().remove();
  $('span.result').not(':contains(“-”)').parent().remove();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

// stops initialize function from running multiple times, since Qunit
// erases the DOM after each test
function canRun(flag){
  var isQunit = $('#qunit').length > 0;
  var isFlag = flag !== undefined;
  var value = isQunit && isFlag || !isQunit;
  return value;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlUpdateResult(result){
  $('#result').val(result);
}

function htmlUpdateHistory(op1, op2, operator, result){
  // var instance;
  // instance = computation + "=" + result;
  // var $instance = $('<li>' + instance + '</li>');
  // // $instance.text(instance);
  // debugger;
  // $('#history').append($instance);

  var $li = $('<li>');

  var $op1 = $('<span>');
  $op1.addClass('op1');
  $op1.text(op1);

  var $op2 = $('<span>');
  $op2.addClass('op2');
  $op2.text(op2);

  var $operator = $('<span>');
  $operator.addClass('operator');
  $operator.text(operator);

  var $equal = $('<span>');
  $equal.addClass('equal');
  $equal.text('=');

  var $result = $('<span>');
  $result.addClass('result');
  $result.text(result);

  var $remove = $('<span>');
  $remove.addClass('remove');
  $remove.text('[REMOVE]');

  $li.append($op1, ' ', $operator, ' ', $op2, ' ', $equal, ' ', $result, '  ', $remove);
  $('#history').prepend($li);

  // var $li = $("<li>" + op1 + " " + operator + " " + op2 + " = " + result + "</li>");

}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}