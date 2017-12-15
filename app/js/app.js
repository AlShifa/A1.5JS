var mainModule = angular.module('myApp', ['ngRoute']);
mainModule.config(['$routeProvider', function ($routeProvider) {
    console.log('55555555555');
    $routeProvider.when('/', {
        templateUrl: 'index.html'
    }).when('/view1', {
        templateUrl: 'app/view/view1.html',
        controller:'v1Ctrl'
    }).when('/view2', {
        templateUrl: 'app/view/view2.html',
        controller:'v2Ctrl'
    }).when('/view3', {
        templateUrl: 'app/view/view3.html',
        controller:'v3Ctrl'
    }).when('/view4', {
        templateUrl: 'app/view/view4.html',
        controller:'v4Ctrl'
    });
}]);
