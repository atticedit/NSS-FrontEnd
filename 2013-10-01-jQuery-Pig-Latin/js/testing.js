// test( '<name of function>', function() {
//   deepEqual(<actual value>, <expected value>, 'what this test is doing');
//   deepEqual(<actual value>, <expected value>, 'testing this function with different arguments');
// });

test( 'pig_latin', function() {
  deepEqual(pig_latin('hello'), 'ellohay', 'pig latin should work');
});