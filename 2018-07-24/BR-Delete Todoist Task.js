(function executeRule(current, previous /*null when async*/) {

    // Condition: gs.isInteractive()  && !current.assigned_to.nil()

	var taskUtil = new TaskUtil();
	
	new taskUtil.lockTask(current);
	var obj = {
		"assigned_to" : {
			"sys_id" : current.getValue('assigned_to'),
			"display_value" : current.assigned_to.getDisplayValue()
		},
		"todoist_task_id" : current.getValue('todoist_task_id')
	};
	var objStr = JSON.stringify(obj);

	gs.eventQueue('x_snc_technow.delete_task', null, objStr, '');

})(current, previous);