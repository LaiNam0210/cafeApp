var myService = angular.module('myService', []);

myService.factory('$SharedData', function() {

  var sharedData = {};

  sharedData.Bill = {};
  sharedData.info = {};
 // sharedData.user = {};

  sharedData.items = {};
  sharedData.listPlus = {};

  sharedData.addPlus = function(id, plus) {
    if (!sharedData.listPlus[id]) {
      sharedData.listPlus[id] = {};
    }
    sharedData.listPlus[id][plus._id] = plus;
    sharedData.items[id].finalPrice += plus.price;
  };
  sharedData.removePlus = function(id, plus) {
    if (!sharedData.listPlus[id]) {
      return;
    }
    delete sharedData.listPlus[id][plus._id];
    sharedData.items[id].finalPrice -= plus.price;

  };
  sharedData.deleteItem = function(item) {
    if (!sharedData.items[item._id]) {
      return;
    }
    delete sharedData.items[item._id];
  };

  sharedData.addItem = function(item) {

    if (sharedData.items[item._id]) {
      return;
    }
    sharedData.items[item._id] = item;
    sharedData.items[item._id].finalPrice = sharedData.items[item._id].price;
    sharedData.items[item._id].showBody = false;
    sharedData.items[item._id].up = false;
    sharedData.items[item._id].down = true;
  };
  sharedData.getItems = function() {
    return sharedData.items;
  };
  sharedData.getBill = function() {
    sharedData.Bill.items = sharedData.items;
    sharedData.Bill.totalPrice = sharedData.getBillPrice();
    sharedData.Bill.info = sharedData.info;
    return sharedData.Bill;
  };

  sharedData.getBillPrice = function() {
    var totalPrice = 0;
    for (var pro in sharedData.items) {
      totalPrice += sharedData.items[pro].finalPrice;
    }
    return totalPrice;
  };
  return sharedData;
});
