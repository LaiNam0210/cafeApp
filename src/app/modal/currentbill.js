angular.module('app.currentBill', [])

.directive('currentBill', function($resource, $SharedData) {

  function link(scope, elem, attrs) {
    var Pluss = $resource('/api/plus');

    scope.items = $SharedData.items;
    scope.listPlus = $SharedData.listPlus;

    Pluss.get({}).$promise.then(function(doc) {
      scope.Plus = doc.data;
    });

    scope.selectAction = function(id, selectedPlus) {
      $SharedData.addPlus(id, selectedPlus);
    };

    scope.Up = function(id) {
      console.log(scope.items[id]);
      scope.items[id].showBody = false;
      scope.items[id].up = false;
      scope.items[id].down = true;
    };
    scope.Down = function(id) {
      console.log(id, scope.items);
      scope.items[id].showBody = true;
      scope.items[id].up = true;
      scope.items[id].down = false;
    };
    scope.removePlus = function(itemId, plus) {
      $SharedData.removePlus(itemId, plus);
    };
    scope.deleteItem = function(item) {
      $SharedData.deleteItem(item);
    };

  }
  return {
    restrict: 'A',
    templateUrl: 'modal/currentbill.tpl.html',
    link: link,
    scope: {
    },
  };
});
