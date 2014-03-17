angular.module('app.home', [
  'ui.router'
])

.config(function config($locationProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        main: {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        },
        header: {
          templateUrl: 'com/topnav.tpl.html'
        },
        footer: {
          templateUrl: 'com/footernav.tpl.html'
        }
      },
      data: {}
    });
})

.controller('HomeCtrl', function($scope, $resource, $modal, $SharedData) {

  var Cat = $resource('/api/category');
  var Item = $resource('/api/item');


  $scope.Items = $SharedData.items;
  Cat.get({}, function(doc) {
    $scope.categories = doc;
  });

  Item.get({}, function(doc) {
    $scope.items = doc;
  });

  $scope.clickCategory = function(item) {
    var options = {};
    if (item.catid !== 0) {
      options.search_catid = item.catid;
    }

    Item.get(
      options, function(doc) {
        $scope.items = doc;
      });
  };

  $scope.exportbill = function() {
    var exportbill = $modal.open({
      templateUrl: 'modal/exportbill.tpl.html',
    });
  };

  // $scope.bitems = bitems;
  $scope.addItem = function(item) {
    console.log('addItem-Home');
    $SharedData.addItem(item);
  };

});
