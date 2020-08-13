(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

	// Running from a c.server.update()
	if (input) {
		console.log('server: answer=' + input.answer);
	}
	
	data.userName = gs.getUserDisplayName();
	data.table = {
		"list" : []
	};
	data.answer = "";
	
	var courseGr = new GlideRecord(Constants.COURSE_TABLE);
	courseGr.addQuery('active', true);
	courseGr.orderBy('name');
	courseGr.query();
	
	while (courseGr.next()) {
		var obj = {};
		obj.name = courseGr.getValue('name');
		// console.log(obj.name);
		obj.order = courseGr.getValue('order');
		
		data.table.list.push(obj);
	}
	// gs.info(JSON.stringify(data.table.list, null, 4));
})();