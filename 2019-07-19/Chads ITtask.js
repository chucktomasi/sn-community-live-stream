createITTask: function(currentGr, event, assignment_group, priority) {
	var debug = false;
	var script_source = 'createITTask';

	var ittask = new GlideRecord('u_it_task');
	ittask.newRecord();

	var sid = gs.getUserID(); // needs to be a system

	ittask.u_requested_by = sid;
	ittask.u_requested_for = sid;
	ittask.short_description = email.subject.toString();
	ittask.description = email.body_text;
	ittask.assignment_group = assignment_group;
	ittask.priority = priority;
    var itId = ittask.insert();

	var attach_query = new GlideRecord('sys_attachment');
	attach_query.addQuery('table_sys_id', currentGr.getUniqueValue());
	attach_query.query();
	while (attach_query.next()) {
		attach_query.table_name = 'u_it_task';
		attach_query.table_sys_id = itID;
		attach_query.update();
	}
	