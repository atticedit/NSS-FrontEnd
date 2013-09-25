// prompt for each test of the 10 test scores and parse the output as a float
var score1 = parseFloat(prompt('Enter the first score:'));
var score2 = parseFloat(prompt('Enter the second score:'));
var score3 = parseFloat(prompt('Enter the third score:'));
var score4 = parseFloat(prompt('Enter the fourth score:'));
var score5 = parseFloat(prompt('Enter the fifth score:'));
var score6 = parseFloat(prompt('Enter the sixth score:'));
var score7 = parseFloat(prompt('Enter the seventh score:'));
var score8 = parseFloat(prompt('Enter the eighth score:'));
var score9 = parseFloat(prompt('Enter the ninth score:'));
var score10 = parseFloat(prompt('Enter the tenth score:'));

// pause the script in the browser to run line-by-line
debugger;

// define the initial value of sum as 0
var sum = 0;
// add each score to sum, to arrive at the sum of all test scores
sum += score1;
sum += score2;
sum += score3;
sum += score4;
sum += score5;
sum += score6;
sum += score7;
sum += score8;
sum += score9;
sum += score10;

// define mean as sum divided by the number of scores
var mean = sum / 10;

// define the initial value of sum_squares as 0
var sum_squares = 0;
// add the square of each score to sum_squares, to arrive at the sum of the squares of each test score
sum_squares += Math.pow(score1,2);
sum_squares += Math.pow(score2,2);
sum_squares += Math.pow(score3,2);
sum_squares += Math.pow(score4,2);
sum_squares += Math.pow(score5,2);
sum_squares += Math.pow(score6,2);
sum_squares += Math.pow(score7,2);
sum_squares += Math.pow(score8,2);
sum_squares += Math.pow(score9,2);
sum_squares += Math.pow(score10,2);

// define std_dev as the square root of sum_squares
var std_dev = Math.sqrt(sum_squares / 10);

// output the mean and standard deviation
console.log('The mean is: ' + mean);
console.log('The standard deviation is: ' + std_dev);