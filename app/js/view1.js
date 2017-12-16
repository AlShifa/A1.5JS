var mainModule = angular.module('myApp.company', ['ngRoute', 'ngGrid','ui.bootstrap.contextMenu']);
mainModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/company', {
        templateUrl: 'view/view1.html',
        controller: 'v1Ctrl'
    });
}]);
mainModule.controller('v1Ctrl', function ($scope, $http,ContextMenuEvents) {
    $scope.firstName2 = "John";
    $scope.lastName2 = "PAPA";
    $scope.compDetailsRecord    = [];
    var request = {
        method: 'get',
        url: 'js/companyDetails.json',
        dataType: 'json',
        contentType: "application/json"
    };

    $http(request).then(function (jsonData) {
        $scope.compDetailsRecord = jsonData;
    }), function (error) {
        console.log('error');
    };
    $scope.player = {
        gold: 100
    };

    $scope.showHiddenOption = false;

    $scope.items = [
        { name: 'Small Health Potion', cost: 4},
        { name: 'Small Mana Potion', cost: 5 },
        { name: 'Iron Short Sword', cost: 12 }
    ];

    $scope.menuOptions = function (item) {
        console.log('&&&&&&&&&&&');
        return [
            [function ($itemScope) {
                console.log($itemScope);
                return 'ALL';
            }, function ($itemScope) {
                // Action
            }]
        ];
    };

    $scope.menuOptions = [
        [function ($itemScope, $event, modelValue, text, $li) {
            return $itemScope.item.name;
        }, function ($itemScope, $event) {
            // Action
        }, function($itemScope, $event, modelValue, text, $li) {
            // Enable or Disable
            return true; // enabled = true, disabled = false
        }]
    ];

});
