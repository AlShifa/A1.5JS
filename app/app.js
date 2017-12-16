angular.module('myApp', ['ngRoute','myApp.company']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    //$routeProvider.otherwise({redirectTo: '/view1'});
}]);
