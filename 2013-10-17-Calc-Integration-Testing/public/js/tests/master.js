'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  initialize(null, true);
}

function teardownTest(){
}

test('Calculate 2 numbers', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  deepEqual($('#op1').val(), '', 'op1 should be blank');
  deepEqual($('#op2').val(), '', 'op2 should be blank');
  deepEqual($('#operator').val(), '', 'operator should be blank');
  deepEqual($('#result').val(), '6', 'result should be 6');
});

test('Paper Trail', function(){
  expect(13);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 1, 'should be 1 lis');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 2, 'should be 2 lis');
  deepEqual($('#history > li:first-child > span').length, 6, 'should be 6 spans');
  ok($('#history > li:first-child > span:first-child').hasClass('op1'), 'first span has class of op1');
  ok($('#history > li:first-child > span:nth-child(2)').hasClass('operator'), 'second span has class of operator');
  ok($('#history > li:first-child > span:nth-child(3)').hasClass('op2'), 'third span has class of op2');
  ok($('#history > li:first-child > span:nth-child(4)').hasClass('equal'), 'fourth span has class of equal');
  ok($('#history > li:first-child > span:nth-child(5)').hasClass('result'), 'fifth span has class of result');
  deepEqual($('#history > li:first-child > span.op1').text(), '7', 'top row op1 should have value of 7');
  deepEqual($('#history > li:first-child > span.op2').text(), '8', 'top row op2 should have value of 8');
  deepEqual($('#history > li:first-child > span.operator').text(), '*', 'top row operator should have value of *');
  deepEqual($('#history > li:first-child > span.equal').text(), '=', 'top row equal should have value of =');
  deepEqual($('#history > li:first-child > span.result').text(), '56', 'top row result should have value of 56');
});

test('Remove a line from history', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('5');
  $('#op2').val('2');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  deepEqual($('#history > li').length, 3, 'before a row is removed, should be 3 lis')
  deepEqual($('#history > li:first-child > span.result').text(), '3', 'before a row is removed, top row result should have value of 3');

  $('#history > li:first-child > .remove').trigger('click');

  deepEqual($('#history > li').length, 2, 'after a row is removed, should be 2 lis')
  deepEqual($('#history > li:first-child > span.result').text(), '56', 'after a row is removed, top row result should have value of 56');
});

test('Give rows in history alternating background colors', function(){
  expect(4);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('7');
  $('#op2').val('8');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('5');
  $('#op2').val('2');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  deepEqual($('#history > li:first-child').css('background-color'), 'rgb(28, 28, 28)', 'before a row is removed, first row should have gray background');
  deepEqual($('#history > li:nth-child(2)').css('background-color'), 'rgb(230, 230, 230)', 'before a row is removed, second row should have white background');

  $('#history > li:first-child > .remove').trigger('click');

  deepEqual($('#history > li:first-child').css('background-color'), 'rgb(28, 28, 28)', 'after a row is removed, first row should have gray background');
  deepEqual($('#history > li:nth-child(2)').css('background-color'), 'rgb(230, 230, 230)', 'after a row is removed, second row should have white background');
});

test('Sum the results values in the history', function(){
  expect(1);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  $('#getSum').trigger('click');

  deepEqual($('#sum').val(), '12', 'sum should be 12');
});

test('Multiply the results values in the history', function(){
  expect(1);

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  $('#getProduct').trigger('click');

  deepEqual($('#product').val(), '30', 'product should be 30');
});

test('Remove the rows in the history with negative results values', function(){
  expect(2);

  $('#op1').val('-3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('-3');
  $('#op2').val('2');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  $('#removeNegatives').trigger('click');

  deepEqual($('#history > li').length, 1, '2 rows with negative results should be gone');
  deepEqual($('#history > li:first-child > span.result').val(), '6', 'after rows are removed, first row result should have value of 6');

});

test('Remove the rows in the history with positive results values', function(){
  expect(2);

  $('#op1').val('-3');
  $('#op2').val('2');
  $('#operator').val('+');
  $('#calculate').trigger('click');

  $('#op1').val('3');
  $('#op2').val('2');
  $('#operator').val('*');
  $('#calculate').trigger('click');

  $('#op1').val('-3');
  $('#op2').val('2');
  $('#operator').val('-');
  $('#calculate').trigger('click');

  $('#removePositives').trigger('click');

  deepEqual($('#history > li').length, 2, '1 row with positive results should be gone');
  deepEqual($('#history > li:nth-child(2) > span.result').val(), '-1', 'after rows are removed, second row result should have value of -1');
});

// it turns out we didn't need to use asyncTest for this, as Chyld had initially thought,
// so I refactored
//
// asyncTest('Calculate 2 numbers', function(){
//   expect(4);

//   $('#op1').val('3');
//   $('#op2').val('2');
//   $('#operator').val('*');

//   $('#result').on('DOMChanged', function(){
//     deepEqual($('#op1').val(), '', 'op1 should be blank');
//     deepEqual($('#op2').val(), '', 'op2 should be blank');
//     deepEqual($('#operator').val(), '', 'operator should be blank');
//     deepEqual($('#result').text(), '6', 'result should be 6');
//     start();
//   });

//   $('#calculate').trigger('click');
// });

// asyncTest('Paper Trail', function(){
//   expect(1);

//   $('#op1').val('3');
//   $('#op2').val('2');
//   $('#operator').val('+');
//   $('#calculate').trigger('click');

//   $('#op1').val('7');
//   $('#op2').val('8');
//   $('#operator').val('*');

//   $('#history').on('DOMChanged', function(){
//     deepEqual($('#history > li').length, 2, 'should be 2 lis');
//     start();
//   });

//   $('#calculate').trigger('click');
// });