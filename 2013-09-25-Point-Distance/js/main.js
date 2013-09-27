// Chyld's version live-coded at the end of the lab

var points = [];

for(var i = 0; i < 2; i++)
{
  var point = {};
  point.x = parseInt(prompt('X coordinate?'));
  point.y = parseInt(prompt('Y coordinate?'));
  points.push(point);
}

debugger;

var a = points[0].x - points[1].x;
var b = points[0].y - points[1].y;

var distance = Math.sqrt(a*a + b*b);