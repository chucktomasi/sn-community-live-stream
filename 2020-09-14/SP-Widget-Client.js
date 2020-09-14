api.controller=function($scope, $http) {
	/* widget controller */
	var c = this;

	$scope.getInfo = function(parm) {
		console.log('parm=' + parm);

		$http({
			method  : "GET",
			url     : "/api/x_66238_cls323/instance/info?parm=" + parm,
			headers : {"Content-type" : "application/json"}
			
		}).then(function success(response) {
			c.data.text = response.data.result.answer;
			
		}, function failure(response) {
			// console.log('response=' + JSON.stringify(response, null, 4));
			var msg = response.data.result.answer;
			spUtil.addErrorMessage(msg);
		});

	}
};