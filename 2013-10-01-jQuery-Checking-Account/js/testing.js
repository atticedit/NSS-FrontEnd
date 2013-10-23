// test( '<name of function>', function() {
//   deepEqual(<actual value>, <expected value>, 'what this test is doing');
//   deepEqual(<actual value>, <expected value>, 'testing this function with different arguments');
// });

test( 'handle_deposit', function() {
  deepEqual(handle_deposit(1000, 50), 1050, 'depositing an amount');
});

test( 'handle_withdrawal', function() {
  deepEqual(handle_withdrawal(1000, 50), 950, 'withdrawing an amount');
});