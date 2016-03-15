define(['js/app'], function(app) {
    app.controller('groupsController', ['$scope', '$http', function($scope, $http) {
        $scope.showImage = false;
        $http({
            method: 'GET',
            url: '/get/groups'
        }).success(function(data) {
            console.log("groups", data);
            $scope.showImage = true;
            $scope.groups = data;
        }).error(function() {
            alert("error");
        });

    }]);
});
