// test('<name of function>', function() {
//   deepEqual(<actual value>, <expected value>, 'what this test is doing');
//   deepEqual(<actual value>, <expected value>, 'testing this function with different arguments');
// });

test('pig_latin', function() {
  deepEqual(pig_latin('hello'), 'ellohay', 'pig latin should work');
});

test('reverse_order_pig_latinize', function() {
  deepEqual(reverse_order_pig_latinize('this, is, fun'), 'unfay; siay; histay', 'words are pigged; word order reversed; semicolons instead of commas');
});