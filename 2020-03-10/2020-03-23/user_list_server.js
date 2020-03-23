(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	data.name = 'Chuck';
	// gs.addInfoMessage('data.name=' + data.name);

	data.list = [];

	var userGr = new GlideRecord('sys_user');
	userGr.orderBy('name');
	userGr.setLimit(5);
	userGr.query();

	while (userGr.next()) {
		var obj = {
			"name" : userGr.getDisplayValue(),
			"id" : userGr.getUniqueValue(),
			"user_name" : userGr.getValue('user_name')
		};

		gs.info(JSON.stringify(obj));

		data.list.push(obj);
	}
})();