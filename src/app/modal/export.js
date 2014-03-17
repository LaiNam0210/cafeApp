angular.module('app.export', [])

.directive('exportBill', function($resource, $SharedData) {

  function link(scope, element, attrs) {

    var Customer = $resource('/api/customer');
    var User = $resource('/api/user');
    scope.info = {};
    $SharedData.info = scope.info;

    scope.getNames = function(name) {
      var options = {};
      options.search_name = name;
      return Customer.get(options).$promise.then(function(res) {
        return res.data;
      });
    };
    scope.selectMatch = function(item) {
      scope.info.customer = item;
    };
    scope.getUserNames = function(name) {
      var options = {};
      options.search_name = name;
      return User.get(options).$promise.then(function(res) {
        return res.data;
      });
    };
    scope.selectUserMatch = function(item) {
      scope.info.user = item;
    };

  }

  return {
    restrict: 'A',
    templateUrl: 'modal/exportbill.tpl.html',
    link: link,
    scope: {}
  };
})

;
