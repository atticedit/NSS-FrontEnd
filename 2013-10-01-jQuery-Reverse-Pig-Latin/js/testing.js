// test( '<name of function>', function() {
//   deepEqual(<actual value>, <expected value>, 'what this test is doing');
//   deepEqual(<actual value>, <expected value>, 'testing this function with different arguments');
// });

test( 'pig_latin', function() {
  deepEqual(pig_latin('hello'), 'ellohay', 'pig latin should work');
});

test( 'word_order_reverse', function() {
  deepEqual(word_order_reverse('this is fun'), 'fun is this', 'order of words should be reversed');
});

test( 'gip', function() {
  deepEqual(gip('this is fun'), 'unfay siay histay', 'words are pigged and order of words is reversed');
});