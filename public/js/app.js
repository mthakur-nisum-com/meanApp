define(['angularAMD', 'angular-route'], 

    function(angularAMD) {

    var app = angular.module("webapp", ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", angularAMD.route({
                templateUrl: 'js/views/showall.html',
                controller: 'mainController',
                controllerUrl: 'js/controllers/mainController'
            }))
            .when("/departments", angularAMD.route({
                templateUrl: 'js/views/departments.html',
                controller: 'departmentController',
                controllerUrl: 'js/controllers/departmentController'
            }))
            .when("/groups", angularAMD.route({
                templateUrl: 'js/views/groups.html',
                controller: 'groupsController',
                controllerUrl: 'js/controllers/groupsController'
            }))
            .when("/employees", angularAMD.route({
                templateUrl: 'js/views/employees.html',
                controller: 'employeesController',
                controllerUrl: 'js/controllers/employeesController'
            }))
            .otherwise({
                redirectTo: "/"
            });
    });

    return angularAMD.bootstrap(app);
});
