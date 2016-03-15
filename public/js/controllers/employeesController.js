define(['js/app'], function(app) {
    app.controller('employeesController', ['$scope', '$http', function($scope, $http) {

        $scope.showImage = false;

        $http({
            method: 'GET',
            url: '/get/employees'
        }).success(function(data) {
            console.log("emps", data);
            $scope.showImage = true;
            $scope.employees = data;
        }).error(function() {
            alert("error");
        });

    }]);
});
