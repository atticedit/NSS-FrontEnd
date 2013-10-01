function add_three(n)
{
  return n += 3;
}

function square(n)
{
  return n*n;
}

function area(l, w)
{
  return l*w;
}

function volume(l, w, d)
{
  return area(l, w) * d;
}

// function power(b, p)
// {
//   for(var i = 0; i < p; i++)
//   {
//     var B = b;
//     return B*b;
//   }
// }

function power(base, exp)
{
  var product = 1;
  for(var i = 0; i < exp; i++)
    product *= base;
  return product;
}

function greeting(salutation, name)
{
  return salutation + ', ' + name + '!'
}

function pig_latin(string)
{
  return string.slice(1) + string[0] + 'ay';
}

function pig_greeting(salutation, name)
{
  return pig_latin(salutation) + ', ' + pig_latin(name) + '!';
}

// function pig_sentence(sentence)
// {
//   var words = sentence.split(' ');
//   for(var i = 0; i <words.length; i++)
//   {
//     var pigged_sentence = [];
//     var pigged = pig_latin(words[i]);
//     pigged_sentence.push(' ' + pigged);
//   }
//   return pigged_sentence;
// }

function pig_sentence(sentence)
{
  var words = sentence.split(' ');
  var pig_word = [];
  for(var i = 0; i <words.length; i++)
    pig_word.push(pig_latin(words[i]));
  return pig_word.join(' ');
}