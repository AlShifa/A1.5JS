var mainModule = angular.module('myApp.view2',['ngRoute']);
mainModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view/view2.html',
        controller:'v2Ctrl'
    });
}]);
mainModule.controller('v2Ctrl',function($scope) {
    $scope.firstName= "Hi";
    $scope.lastName= "Manazir";
});