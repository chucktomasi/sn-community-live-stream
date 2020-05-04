var qa = new GlideAggregate('x_66238_budget_item');
qa.addAggregate('SUM', 'spend');
qa.groupBy('quarter');
qa.query();

while (qa.next()) {
	var rowObj = {};
	rowObj.quarter = qa.getValue('quarter');
	rowObj.spend = parseFloat(qa.getAggregate('SUM', 'spend'));

	var quarterGr = new GlideRecord('x_66238_budget_quarter');
	if (quarterGr.get('quarter', rowObj.quarter)) {
		rowObj.budget = parseFloat(quarterGr.getValue('budget'));
	}
	rowObj.difference = rowObj.budget - rowObj.spend;

	rowObj.sys_id = v_query.getSysId();
	// v_table.addRow(rowObj);
	gs.info(JSON.stringify(rowObj))
}