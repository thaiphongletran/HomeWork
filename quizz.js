var myApp = angular.module('myApp', []);
myApp.controller('maincontroller',['$scope', '$http', function($scope, $http){
    var url = "ADAV.js";
    $http.get(url).success(function(response) {
        $scope.ADAV = response;
    });
}]);