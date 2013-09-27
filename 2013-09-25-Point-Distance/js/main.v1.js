var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var a_squared = 0;
var b_squared = 0;
var distance = 0;

x1 = parseFloat(prompt('What is the x coordinate of point 1?'));
y1 = parseFloat(prompt('What is the y coordinate of point 1?'));
x2 = parseFloat(prompt('What is the x coordinate of point 2?'));
y2 = parseFloat(prompt('What is the y coordinate of point 2?'));

a_squared = a_squared += Math.pow((x1 - x2),2);
b_squared = b_squared += Math.pow((y1 - y2),2);

distance = Math.sqrt(a_squared + b_squared);

alert('The distance between point 1 and point 2 is: ' + distance);