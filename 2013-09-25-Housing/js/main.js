function area_circle(radius)
{
  return Math.PI * radius * radius;
}

function volume_cylinder(radius, depth)
{
  return area_circle(radius) * depth;
}

function cuft_to_gallons(cubic_feet)
{
  return 7.48052 * cubic_feet;
}

var rooms = []
var name = prompt('Name of a room to add to your house? (Entering no text will exit)');

while(name)
{
  var room = {};
  room.name = name;
  room.windows_in_room = parseInt(prompt('Number of windows in the room?'));
  room.dimen1 = parseInt(prompt('Length of the room, in feet?'));
  room.dimen2 = parseInt(prompt('Width of room, in feet?'));
  rooms.push(room);
  name = prompt('Name of a room to add to your house? (Entering no text will exit)');
}

var diameter = parseInt(prompt('Diameter of pool, in feet?'));
var depth = parseInt(prompt('Depth of pool, in feet)?'));

var total_rooms = rooms.length;
var sum_windows = 0;
var total_area = 0;
var total_cost = 0;

for(var i = 0; i < rooms.length; i++)
{
  sum_windows += rooms[i].windows_in_room;
  total_area += (rooms[i].dimen1 * rooms[i].dimen2);
}

var windows_cost = sum_windows * 250;
var rooms_cost = total_area * 200;
var gallons = cuft_to_gallons(volume_cylinder(diameter/2, depth));
var pool_cost = gallons * 0.25;
var total_cost = windows_cost + rooms_cost + pool_cost;

console.log('Your total number of rooms: ' + total_rooms);
console.log('Your total number of windows: ' + sum_windows);
console.log('Your total square footage: ' + total_area);
console.log('Your total window cost: ' + windows_cost);
console.log('Your total house cost, excluding pool and windows: ' + rooms_cost);
console.log('Your total pool cost: ' + pool_cost);
console.log('Your total cost, including pool and windows, is ' + total_cost);