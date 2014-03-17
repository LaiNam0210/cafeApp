angular.module('app.topnav', [])

.directive('topNav', function() {

  function link(scope, element, attrs) {
    console.log('console.log');
    // scope.turnOff = function(){
    //   alert('wtf');
    // };
  }

  return {
    restrict: 'A',
    templateUrl: 'com/topnav.tpl.html',
    link: link,
    scope: true
  };
})

;
