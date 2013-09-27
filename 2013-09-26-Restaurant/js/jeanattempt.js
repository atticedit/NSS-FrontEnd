var categories = {};

var name = prompt('Enter the name of a dish, or return an empty field to exit');

while(name)
{
  var dish = {};
  dish.name = name;
  dish.category = prompt('What type of dish is it?');
  dish.ingredients = prompt('List the ingredients, separated by commas:');
  dish.cost = parseInt(prompt('What does it cost:'));
  dish.cal = parseInt(prompt('How many calories does it contain?'));

  var category = dish.category;
  if (!categories[category]) {
    categories[category] = [];
  }

  categories[category].push(dish);
  conole.log(categories.length);

  name = prompt('Enter the name of a dish, or return an empty field to exit');
}

for(var category in categories) {
  console.log('category: ' + category);
  var dishesincategory = categories[category];
  for (var dish in dishesincategory) {
    console.log('dish: ' + dish.name);
  }
}