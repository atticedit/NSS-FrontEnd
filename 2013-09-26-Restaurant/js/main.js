var dishes = [];
var categories = [];

var name = prompt('Enter the name of a dish, or return an empty field to exit');

while(name)
{
  var dish = {};
  dish.name = name;
  dish.category = prompt('What menu heading does it fall under?');
  dish.ingredients = prompt('List the ingredients, separated by commas:');
  dish.cost = parseInt(prompt('What does it cost? (Don\'t enter dollar signs)'));
  dish.cal = parseInt(prompt('How many calories does it contain?'));
  dishes.push(dish);
  if (categories.indexOf(dish.category) == -1)
  {
    categories.push(dish.category);
  }
  name = prompt('Enter the name of a dish, or return an empty field to exit');
}

var total_cal = 0;
var total_cost = 0;

for(var i = 0; i < dishes.length; i++)
{
  total_cal += dishes[i].cal;
  total_cost += dishes[i].cost;
}

function average(total)
{
  return total / dishes.length;
}

var avg_cal = average(total_cal);
var avg_cost = average(total_cost);

for(var i = 0; i < categories.length; i++)
{
  var category = categories[i]
  console.log(category + ": ");
  for(var j = 0; j < dishes.length; j++)
  {
    if (category == dishes[j].category) {
      console.log('  -' + dishes[j].name + " (" + dishes[j].ingredients + ") $" + dishes[j].cost + " (" + dishes[j].cal + " calories)");
    }
  }
}

console.log('Total number of dishes: ' + dishes.length);
console.log('Total number of types of dish: ' + categories.length);
console.log('Total calorie count of the dishes: ' + total_cal);
console.log('Total cost of the dishes: ' + total_cost);
console.log('Average calorie count of a dish: ' + avg_cal);
console.log('Average cost of a dish: ' + avg_cost);