var p1 = [];
var p2 = [];

var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var a_squared = 0;
var b_squared = 0;
var distance = 0;

// ran out of time during the lab, so I had just started placing things in a loop
// the next line is just the start of things
// while()

x1 = parseFloat(prompt('What is the x coordinate of point 1?'));
y1 = parseFloat(prompt('What is the y coordinate of point 1?'));
x2 = parseFloat(prompt('What is the x coordinate of point 2?'));
y2 = parseFloat(prompt('What is the y coordinate of point 2?'));

p1 = [x1,y1];
p2 = [x2,y2];
a_squared = a_squared += Math.pow((p1[0] - p2[0]), 2);
b_squared = b_squared += Math.pow((p1[1] - p2[1]), 2);

distance = Math.sqrt(a_squared + b_squared);

alert('The distance between point 1 and point 2 is: ' + distance);