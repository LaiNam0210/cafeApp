angular.module('app.category', [])

.config(function config($locationProvider, $stateProvider) {
    $stateProvider
        .state('category', {
            url: '/category',
            views: {
                main: {
                  controller: 'CategoryCtrl',
                  templateUrl: 'category/category.tpl.html'
                },
                header: {
                  templateUrl: 'com/topnav.tpl.html'
                },
                footer: {
                  templateUrl: 'com/footernav.tpl.html'
                }
            },
            data: {
                title: 'Danh mục'
            }
        });
})


.controller('CategoryCtrl', function($scope) {
  mockup($scope);
  // console.log('CategoryCtrl');

});


function mockup($scope) {
  $scope.Categories = [{
    id: 'cafe',
    name: 'Cafe'
  }, {
    id: 'sua',
    name: 'Sữa'
  }, {
    id: 'tra',
    name: 'Trà'
  }, {
    id: 'sinhto',
    name: 'Sinh tố'
  }];

  $scope.Products = {
    'cafe': [
      {
        name: 'Capuchino'
      },
      {
        name: 'Espresso'
      }
    ],
    'sua': [
      {
        name: 'Vinamilk'
      }, {
        name: 'TH Truemilk'
      }
    ],
    'tra': [
      {
        name: 'C2'
      }, {
        name: '0 Độ'
      }
    ],
    'sinhto': [
      {
        name: 'Dâu'
      }, {
        name: 'Bơ'
      }
    ]
  };
}
