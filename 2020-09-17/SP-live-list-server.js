(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	// Running from a c.server.update()

	data.table = {
		"name"   : options.table_name || 'incident',
		"filter" : options.filter || '',
		"label"  : options.label || 'Unlabeled',
		"fields" : options.fields || 'name,active',
		"list"  : []
	};
	
	data.answer = "";
	data.table.fieldList = data.table.fields.split(',');
	data.table.fieldLabels = [];

	var gr = new GlideRecord(data.table.name);
	gr.addEncodedQuery(data.table.filter);

	// Load up the labels for these fields
	for (var i = 0; i < data.table.fieldList.length; i++) {
		data.table.fieldLabels.push(gr.getElement(data.table.fieldList[i]).getLabel());
	}

	gr.query();

	while (gr.next()) {
		var obj = {};
		for (var j = 0; j < data.table.fieldList.length; j++) {
			var f = data.table.fieldList[j];
			obj[f] = gr.getDisplayValue(f);
		}
		data.table.list.push(obj);
	}
	
})();