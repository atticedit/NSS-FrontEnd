test( "Filter Even Numbers", function() {
  var numbers = _.range(10);
  var expected = _.range(0, 10, 2);
  deepEqual(filter_evens(numbers), expected, "array should be filtered down to even numbers");
});

test( "Filter Odd Numbers", function() {
  var numbers = _.range(10);
  var expected = [1, 3, 5, 7, 9];
  deepEqual(filter_odds(numbers), expected, "array should be filtered down to odd numbers");
});

test( "Filter Short Strings", function() {
  var strings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encyclopedia'];
  var expected = ['a', 'the', 'cat'];
  deepEqual(filter_short_strings(strings), expected, "words should be under 4 characters");
});

test( "Filter Long Strings", function() {
  var strings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encyclopedia'];
  var expected = ['hello', 'there', 'elephant', 'encyclopedia'];
  deepEqual(filter_long_strings(strings), expected, "words should be over 3 characters");
});

test( "Filter Medium Strings", function() {
  var strings = ['hello', 'there', 'a', 'the', 'cat', 'elephant', 'encyclopedia'];
  var expected = ['the', 'cat'];
  deepEqual(filter_medium_strings(strings), expected, "words should be more than 2 and less than 5 characters");
});

test( "Filter 'A' Strings", function() {
  var strings = ['apple', 'hello', 'there', 'a', 'the', 'cat', 'Aardvark', 'elephant', 'encyclopedia'];
  var expected = ['apple', 'a', 'Aardvark'];
  deepEqual(filter_a_strings(strings), expected, "strings should begin with a or A");
});


test( "Find a String", function() {
  var strings = ['apple', 'hello', 'there', 'a', 'the', 'cat', 'Aardvark', 'elephant', 'encyclopedia'];
  deepEqual(find_string(strings, 'elephant'), 'elephant', "should find the elephant in the array");
  deepEqual(find_string(strings, 'Aardvark'), 'Aardvark', "should find the Aardvark in the array");
  deepEqual(find_string(strings, 'cat'), 'cat', "should find the cat in the array");
});

test( "Find a String Ending in a particular letter", function() {
  var strings = ['dog', 'cats', 'lion', 'tigers'];
  deepEqual(find_string_ending_letter(strings, 's'), 'cats', "should find the first word ending in s");
  deepEqual(find_string_ending_letter(strings, 'z'), undefined, "should not find a word ending in z");
});