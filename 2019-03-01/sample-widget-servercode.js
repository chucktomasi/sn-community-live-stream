(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

	var itemGr = new GlideRecord('x_snc_cls2_table');
	itemGr.query();
	
	if (itemGr.next()) {
		data.item = {};
		data.item.sys_id = itemGr.getUniqueValue();
		data.item.name = itemGr.getValue('name');
		data.item.description = itemGr.getValue('description');
		data.item.email = itemGr.getValue('email');
	} else {
		gs.addErrorMessage('Error: Cannot get an item');
	}
})();