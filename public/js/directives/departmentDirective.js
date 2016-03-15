define(['directives/directiveModule','jquery'], function (directiveModule,$) {
	directiveModule.directive('departmentDirective', ["$location","$rootScope", function($location, $rootScope){	
		
		return {	
			restrict: "A",			
			link: function(scope, elem, attrs) {
			}
		}		
	}]);
	
});

