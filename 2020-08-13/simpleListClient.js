api.controller=function($scope) {
  /* widget controller */
  var c = this;
	console.log('client started');
	
	$scope.showOrder = function(num) {
		
		c.data.answer = num;
		console.log('showOrder(): num=' + num);
		c.server.update();
	}
};