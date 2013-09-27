var dishes = [];
var categories = [];

var name = prompt('Enter the name of a dish, or return an empty field to exit');

while(name)
{
  var dish = {};
  dish.name = name;
  dish.category = prompt('What type of dish is it?');
  dish.ingredients = prompt('List the ingredients, separated by commas:');
  dish.cost = parseInt(prompt('What does it cost:'));
  dish.cal = parseInt(prompt('How many calories does it contain?'));
  dishes.push(dish);
  if (categories.indexOf(dish.category) == -1)
  {
    categories.push(dish.category);
  }
  name = prompt('Enter the name of a dish, or return an empty field to exit');
}

for(var i = 0; i < categories.length; i++)
{
  var category = categories[i]
  console.log(category + ":");
  for(var j = 0; j < dishes.length; j++)
  {
    if (category == dishes[j].category) {
      console.log('-' + dishes[j].name);
    }
  }
}