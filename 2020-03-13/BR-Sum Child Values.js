(function executeRule(current, previous /*null when async*/) {

	// Sum the values of the child records related to this parent
	var childGa = new GlideAggregate('child_table');
	childGa.addAggregate('SUM', 'integer_field');
	childGa.addQuery('parent', current.parent);
	childGa.query();

	var sum = 0;

	while (childGa.next()) {
		sum += parseInt(childGa.getAggregate('SUM', 'integer_field'), 10);
	}

	gs.info('sum=' + sum);
	

	// Update the parent
	var parentGr = current.parent.getRefRecord();
	parentGr.setValue('sum_field', sum);
	parentGr.update();

})(current, previous);