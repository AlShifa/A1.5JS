var mainModule = angular.module('myApp', ['ngRoute']);

mainModule.controller('v4Ctrl',function($scope) {
    console.log('Call controller4');
    $scope.firstName3= "John333";
    $scope.lastName3= "Doe333";

    $scope.callFunction4 =function(){
        console.log('test ');
    }
});

