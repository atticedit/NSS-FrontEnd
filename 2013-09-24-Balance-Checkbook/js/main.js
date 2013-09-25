var name = prompt("Hi Fatpockets. What\'s your name?");
// prompt for the initial balance, and convert the string to a floating point number
var initial = parseFloat(prompt("How much money do you have in your account?"));

// set the initial balance
var balance = initial;

// prompt for the first deposit
var deposit1 = parseFloat(prompt("How much would you like to deposit today?"));

// add the first deposit
balance += deposit1;

var deposit2 = parseFloat(prompt("I'm going to need a little more from you. How much more do you have that I can take?"));

balance += deposit2;

var deposit3 = parseFloat(prompt("Just so you start feeling like an ATM, how much more can I get from you right now?"));

balance += deposit3;

var withdrawal1 = parseFloat(prompt("Now I'll let you get some of your money out. How much would you like right now?"));

// subtract the first withdrawal
balance -= withdrawal1;

var withdrawal2 = parseFloat(prompt("For a limited time, I'll give you another chance at your own money. How much?"));

balance -= withdrawal2;

var withdrawal3 = parseFloat(prompt("Is there some other small amount you'd like to withdraw? Hint: I'm going to need you to do this."));

balance -= withdrawal3;

if(balance < 0)
  // give an alert in case of negative balance, in the process subtract a $50 overdraft fee, and round the number to 2 decimal places using a method Mike Kunkel looked up
  alert("Check this out, " + name + ": You're the lucky recipient of an overdraft fee of $50. That leaves you with a balance of $" + (balance - 50).toFixed(2) + ".")
else
  // give an alert in case of positive balance, and round the number to 2 decimal places
  alert("Check this out, " + name + ":   You have a balance of $" + balance.toFixed(2) + ".");


// balance += (deposits - withdraws);
// balance -= (balance < 0) ? 50 : 0;