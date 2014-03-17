angular.module('app.footernav', [])

.directive('footerNav', function($SharedData) {

  function link(scope, element, attrs) {

    scope.delivery = function() {
      console.log('delivery', $SharedData.getBill());
    };
    scope.payment = function() {
      console.log('abc');
      console.log($SharedData.getBill());
    };
  }

  return {
    restrict: 'A',
    templateUrl: 'com/footernav.tpl.html',
    link: link,
    scope: true
  };
})

;
