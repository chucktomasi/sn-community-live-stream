(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

	data.tableName = options.tableName || 'incident';
	data.filter = options.filter || '';
	data.label = options.label;
	data.count = -1;
	
	var ga = new GlideAggregate(data.tableName);
	ga.addAggregate('COUNT');
	if (data.filter) {
		ga.addEncodedQuery(data.filter);
	}
	
	ga.query();
	
	if (ga.next()) {
		data.count = parseInt(ga.getAggregate('COUNT'), 10);
	}
	
})();
