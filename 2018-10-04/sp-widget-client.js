function($scope) {
  /* widget controller */
  var c = this;
	
	c.submit = function() {
		
		c.server.update();
	}
}