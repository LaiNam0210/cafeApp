angular.module('app.product', [])

.config(function config($locationProvider, $stateProvider) {
  $stateProvider
    .state('product', {
      url: '/product',
      views: {
        main: {
          controller: 'productCtrl',
          templateUrl: 'product/product.tpl.html'
        },
        header: {
          templateUrl: 'com/topnav.tpl.html'
        },
        footer: {
          templateUrl: 'com/footernav.tpl.html'
        }
      },
      data: {
        title: 'Product'
      }
    });
})

.controller('productCtrl', function($scope, $resource) {
  var Cat = $resource('/api/category');
  var Item = $resource('/api/item');
  var newItem = {};
  var objectSelect = {};
  var options = {};
  $scope.categories = [];

  //initial state
  firstState($scope);
  refreshCategory($scope, Cat, options);
  refreshItem($scope, Item, options);

  mockup($scope);

  $scope.Edit = function() {
    console.log('Edit');
    $scope.editted = !$scope.editted;
  };

  $scope.Editted = function() {
    console.log('Editted');
  };

  //refresh state
  $scope.Filter = function(cat) {
    console.log('filter', cat);
    var options = {};

    if (cat === null) {
      return;
    }
    if (cat.catid !== 0) {
      objectSelect.filter = cat.catid;
      options.search_catid = cat.catid;
    }
    refreshItem($scope, Item, options);
  };
  $scope.addItem = function(item) {
    console.log('add', item, objectSelect);
    if (!item || !objectSelect.filter) {
      return;
    }

    var options = {};
    item.catid = objectSelect.filter;
    options.search_catid = objectSelect.filter;
    //POST new Category

    Item.save(item, function(res) {
      refreshItem($scope,Item,options);
    });
  };

  $scope.EditChoice = function(choice, item) {

    var options = {};
    if (choice === 'Edit') {
      //TODO:
      return;
    }

    options.search_catid = objectSelect.filter;
    if (choice === 'Delete') {
      $resource('/api/item/' + item._id).delete({},
        function(res) {
          refreshItem($scope,Item, options);
        });
      return;
    }
  };

  $scope.Option = function(opt) {

    if (opt === 'TimCreated') {
      $scope.orderby = 'dateCreated';
      return;
    }

    if (opt === 'Alphabet') {
      $scope.orderby = 'name';
    }

    if (opt === 'Price') {
      $scope.orderby = 'price';
    }
  };
});

function mockup(scope) {
  scope.caret = [
    'Delete',
    'Edit',
  ];
  scope.Options = ['TimeCreated', 'Alphabet', 'Price'];
}

function refreshCategory($scope, Cat, opt) {
  Cat.get(opt, function(res) {
    if (!res.data) {
      return;
    }
    $scope.categories = res.data;
  });
}

function refreshItem($scope, Item, opt) {
  Item.get(opt, function(res) {
    if (!res.data) {
      return;
    }
    $scope.items = res;
  });
}

function firstState($scope) {
  $scope.editted = false;
}
