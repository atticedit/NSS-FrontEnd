// var first_name = prompt("What is your given name?");
// var last_name = prompt("What is your last name?");
// var full_name = first_name + ' ' + last_name;
// var age = prompt("What is your age?");
// age = parseInt(age);
// var gender = prompt("What is your gender?");
// var bday_month = prompt("What month were you born in?");
// var current_month = prompt("What month is it right now?");

// debugger;

var test1 = prompt("What was your score for Test 1?");
test1 = parseFloat(test1);

var test2 = prompt("What was your score for Test 2?");
test2 = parseFloat(test2);

var test3 = prompt("What was your score for Test 3?");
test3 = parseFloat(test3);

var sum = 0;
sum += test1;
sum += test2;
sum += test3;

var average = sum / 3;

if(average < 70)
  console.log('you failed');
else if((average >= 70) && (average < 80))
  console.log('you made a C');
else if((average >= 80) && (average < 90))
  console.log('you made a B');
else
  console.log('you made an A');

// var average = (test1 + test2 + test3) / 3;

// console.log("Your full name is: " + full_name);
// console.log("The average of your test scores is: " + average);

// var null_variable = null, undefined_variable;

// if((first_name == 'lars') && (last_name == 'soderkvist'))
//   console.log('hey, i recognize you!');

// if((gender == 'female') && (age >= 21))
//   console.log('free drinks, ladies night! woot!');
// else if((gender == 'male') && (age >= 21))
//   console.log('looks like you are buying!');
// else
//   console.log('not old enough to drink or indeterminate gender');

// var can_have_cake = (current_month == bday_month);
// var cake = (current_month == bday_month) ? "chocolate" : "dirt";
// console.log("Marie Antoinette says that you are eating " + cake + ".");

// switch(bday_month)
// {
//   case 'january':
//     console.log('you are a capricorn');
//     break;
//   case 'february':
//     console.log('you are a pisces');
//     break;
//   default:
//     console.log('you are not of this world, godspeed!');
// }