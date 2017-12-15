var mainModule = angular.module('myApp', ['ngRoute']);
mainModule.controller('v2Ctrl',function($scope) {
    console.log('444');
    $scope.firstName2= "John222";
    $scope.lastName2= "Doe222";
});