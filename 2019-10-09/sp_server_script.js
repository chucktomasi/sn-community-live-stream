(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

	data.table = [];
	var incGr = new GlideRecord('incident');
	incGr.orderBy('number');
	incGr.query();
	
	while (incGr.next()) {
		var obj = {};
		obj.short_description = incGr.getValue('short_description');
		obj.number = incGr.getValue('number');
		data.table.push(obj);
	}
})();