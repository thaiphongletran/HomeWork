var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/components/home/homeView.html'

        })

    .otherwise({
        redirectTo: '/home'
    });


}]);

myApp.controller('showSubjectCtrl', function($scope, $http) {
    var url = 'assets/db/Subjects.js';
    $http.get(url)
        .then(function successCallback(respone) {

            $scope.nextSubject = function() {
                console.log()

            }
            $scope.subjects = respone.data;


        }, function errorCallback(respone) {
            console.log(respone);
        });
    $scope.numberDisplay = 6;
});


/*Login*/

myApp.controller('logincontroller', function($scope, $http) {
    $scope.submit = function() {
        var status = "false";

        angular.forEach($scope.mydata, function(item) {
            if ((item.username == $scope.username) && (item.password == $scope.password)) {
                status = "true";

            }
        });

        if (status == "true") {
            window.location.href = 'index.html';
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu. Vui lòng đăng nhập lại!!");

        }
    };
    $scope.mydata;
    $http.get("assets/db/Students.js")
        .then(function(response) {
            $scope.mydata = response.data;
        });
});