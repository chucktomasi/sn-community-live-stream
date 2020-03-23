function(spUtil) {
  /* widget controller */
  var c = this;
	
	spUtil.addTrivialMessage('data.name=' + c.data.name);
	// debugger;
	c.data.count = '0';
	console.log('c.data=' + JSON.stringify(c.data, null, 4));
}