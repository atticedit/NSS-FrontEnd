'use strict';

module('Integration Testing', {setup: setupTest, teardown: teardownTest});

function setupTest(){
  turnHandlersOff();
  turnHandlersOn();
  // Reset Global Variables Here
  db.products = [];
  db.customers = [];
  db.orders = [];
  // Clean Out Test Database Here
  Δdb.remove();
}

function teardownTest(){
}

test('Add Product', function(){
  expect(12);


  $('#product-image').val('ipad-air.png');
  $('#product-name').val('iPad Air');
  $('#product-weight').val('1.0');
  $('#product-price').val('499.00');
  $('#product-off').val('10');
  $('#add-product').trigger('click');

  equal(db.products.length, 1, 'products array should have 1 element');
  ok(db.products[0].id, 'id should be populated');
  ok(db.products[0] instanceof Product, 'product should be an instance of Product');
  equal(db.products[0].image, 'ipad-air.png', 'product should have an image');
  equal(db.products[0].name, 'iPad Air', 'product should have a name');
  equal(db.products[0].weight, 1.0, 'product should have a weight');
  Qunit.close(db.products[0].salePrice(), 449.1, 1, 'product should have a sale price');

  // testing for 2 rows because 1 will be static and 1 should just have been added programmatically
  equal($('#products > tr').length, 2, 'should be 2 rows in table');
  // checking the 2nd row because that's the first added dynamically
  equal($('#products > tr:nth-child(2) > td').length, 6, 'should be 6 columns in table');
  // only your data should get the class product-name, so can target this 1 first dynamic row
  equal($('#products .product-name').text(), 'iPad Air', 'name column should be populated');
  equal($('#products .product-sale').text(), '$449.10', 'sale column should be populated');
  equal($('#products .product-image img').attr('src'), '/img/ipad-air.png', 'image column should be populated');

});




// test('<name-of-feature>', function(){
//   expect(1);

//   equal('actual-result', 'expected-result', 'description of assertion');
//   ok('result-that-is-true-or-false', 'description of assertion');
//   deepEqual('actual-result', 'expected-result', 'description of assertion');
// });

// asyncTest('<name-of-feature>', function(){
//   expect(1);
// });

// asyncTest('<name-of-feature>', function(){
//   expect(1);
// });
