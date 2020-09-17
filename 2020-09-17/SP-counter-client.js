api.controller=function($scope, spUtil) {
	/* widget controller */
	var c = this;
	
	spUtil.recordWatch($scope, c.data.tableName, c.data.filter, function(response) {

		// Returns the data inserted or updated on the table 
		console.log(response.data);   
		c.server.update();
		
	});
};