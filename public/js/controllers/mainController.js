define(['js/app'], function(app) {
    app.controller('mainController', ['$scope', '$http', function($scope, $http) {


        $scope.message = "Message from HomeCtrl";

        $scope.showImage = false;

        $http({
            method: 'GET',
            url: '/get/departments'
        }).success(function(data) {
            console.log("departments", data);
            $scope.allDepts = data;
        }).error(function() {
            alert("error");
        });

        $http({
            method: 'GET',
            url: '/get/groups'
        }).success(function(data) {
            console.log("groups", data);
            $scope.groups = data;
        }).error(function() {
            alert("error");
        });

        $http({
            method: 'GET',
            url: '/get/employees'
        }).success(function(data) {
            console.log("employees", data);
            $scope.showImage = true;
            $scope.employees = data;
        }).error(function() {
            alert("error");
        });

        var deptIds = [];
        $scope.getSelectedGroups = function(selectedItem) {
            console.log(selectedItem.deptId);
            var cdeptId = selectedItem.deptId;
            var currentIndex = deptIds.indexOf(cdeptId);
            if (currentIndex == -1) {
                deptIds.push(cdeptId);
            } else {
                deptIds.splice(currentIndex, 1);
            }
        }

        $scope.getGroups = function() {
            console.log(deptIds);
            if (deptIds.length) {
                $http({
                    method: 'GET',
                    params: {
                        ids: deptIds
                    },
                    url: '/get/actionresult/dept'
                }).success(function(data) {
                    console.log("groups", data);
                    $scope.groups = data;
                }).error(function() {
                    alert("error");
                });
            }
        }

        var groupIds = [];
        $scope.getSelectedEmployees = function(selectedItem) {
            console.log(selectedItem.grpId);
            var cdeptId = selectedItem.grpId;
            var currentIndex = groupIds.indexOf(cdeptId);
            if (currentIndex == -1) {
                groupIds.push(cdeptId);
            } else {
                groupIds.splice(currentIndex, 1);
            }
        }

        $scope.getEmployees = function() {
            console.log(groupIds);
            if (groupIds.length) {
                $http({
                    method: 'GET',
                    params: {
                        ids: groupIds
                    },
                    url: '/get/actionresult/emps'
                }).success(function(data) {
                    console.log("emps", data);
                    $scope.employees = data;
                }).error(function() {
                    alert("error");
                });
            }
        }
        var displayEmps = [];


        $scope.getSelectedEmps = function(selectedItem) {
            console.log(selectedItem.empId);
            var cdeptId = selectedItem.empId;
            var currentIndex = displayEmps.indexOf(cdeptId);
            if (currentIndex == -1) {
                displayEmps.push(cdeptId);
            } else {
                displayEmps.splice(currentIndex, 1);
            }
        }

        $scope.displayEmployees = function() {
            var dispEmployees = $scope.employees;
            var dispGroups = $scope.groups;
            var dispDepts = $scope.allDepts;

            var filterWithGroups = [];
            for (var et = 0; et < dispEmployees.length; et++) {
                for (var etc = 0; etc < dispGroups.length; etc++) {
                    if (dispEmployees[et].grpId == dispGroups[etc].grpId) {
                        filterWithGroups.push(dispEmployees[et]);
                        filterWithGroups[et].groupName = dispGroups[etc].grpName;
                        for (var k = 0; k < dispDepts.length; k++) {
                            if (dispGroups[etc].deptId == dispDepts[k].deptId) {
                                filterWithGroups[et].deptName = dispDepts[k].deptName;
                            }
                        }
                    }
                }
            }

            for (var j = 0; j < filterWithGroups.length; j++) {
                var eId = filterWithGroups[j].empId;
                if (displayEmps.indexOf(eId) == -1) {
                    filterWithGroups.splice(j, 1);
                }
            }

            console.log(">>>>", filterWithGroups);
            $scope.filterWithGroups = filterWithGroups;
        }


    }]);
});
