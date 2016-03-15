define(['js/app'], function (app) {
	console.log(app);
    app.factory('Notes', ['$resource', function($resource) {
		return $resource('/notes/:id', null,
		    {
		        'update': { method:'PUT' }
		    });
	}]);
}); 

