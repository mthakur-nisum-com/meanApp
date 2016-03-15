define(['js/app'], function(app) {
    app.controller('departmentController', ['$scope', '$http', function($scope, $http) {
        $scope.showImage = false;
        $http({
            method: 'GET',
            url: '/get/departments'
        }).success(function(data) {
            console.log("departments", data);
            $scope.showImage = true;
            $scope.allDepts = data;
        }).error(function() {
            alert("error");
        });

    }]);
});
