	var attGr = new GlideRecord('sys_attachment');
	attGr.addQuery('table_name', 'x_snc_jeopardy_card');
//     attGr.addEncodedQuery('table_sys_idIN' + cardListText); // Did not work
	attGr.addQuery('table_sys_id', 'IN', cardListText);  // Did work!
	attGr.query();
	// gs.info('** Attachment count=' + attGr.getRowCount());
	// gs.info('** Attachment query=' + attGr.getEncodedQuery());
	while (attGr.next()) {
		attList.push(attGr.getValue('sys_id'));
	}
