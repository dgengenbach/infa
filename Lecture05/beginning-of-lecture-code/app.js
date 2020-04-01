(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
$scope.name = "David";
$scope.sayHello = function () {
  return  "Hello Coursera";
};
});

})();
