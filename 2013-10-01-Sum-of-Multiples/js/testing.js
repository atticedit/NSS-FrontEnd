// test( '<name of function>', function() {
//   deepEqual(<actual value>, <expected value>, 'what this test is doing');
//   deepEqual(<actual value>, <expected value>, 'testing this function with different arguments');
// });

test('number_to_integer_count', function() {
  deepEqual(number_to_integer_count(5), [1, 2, 3, 4, 5], 'converts a positive integer to an array of integers from 1 to that number');
});

test('integer_count_to_output_array', function() {
  deepEqual(integer_count_to_output_array([1, 2, 3, 4, 5], 3), [3, 6, 9, 12, 15], 'converts array to one with each element multiplied by 3');
});