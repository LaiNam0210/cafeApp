angular.module('app', [
  'templates',
  'app.home',
  'app.topnav',
  'app.footernav',
  'ui.router',
  'ui.bootstrap',
  'ngSanitize',
  'ngResource',
  'placeholders',
  'app.export',
  'app.category',
  'app.currentBill',
  'app.product',
  'myService',
])

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
})

.run(function run() {

})

.controller('AppCtrl', function AppCtrl($scope, $state) {

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams,
    fromState, fromParams) {
    var pageTitle = toState.data.pageTitle;
    if (typeof pageTitle == 'string') {
      $scope.pageTitle = toState.data.pageTitle + ' | Blank Project';

    } else if (typeof pageTitle == 'function') {
      $scope.pageTitle = pageTitle(toParams) + ' | Blank Project';

    } else {
      $scope.pageTitle = 'Blank Project';
    }
  });
});
