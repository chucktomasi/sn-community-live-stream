api.controller=function($scope, $window, $http, spUtil, $location) {
	/* widget controller */
	var c = this;
	
	c.submit = function(myClient) {

		$http({
			method : "POST",
			url : "/api/x_66238_cls323/client/upsert",
			headers : {"Content-type" : "application/json"},
			data : myClient

		}).then(function success(response) {

			spUtil.addTrivialMessage('Updated')
			
			$location.path('/sp');
			$location.search({'id' : 'cls_list'});
			$location.replace();

		}, function failure(response) {
			spUtil.addErrorMessage('Severe error');
			console.log('response=' + JSON.stringify(response, null, 4));
		});

	}

	c.goBack = function() {
		$window.history.back();
	}
};