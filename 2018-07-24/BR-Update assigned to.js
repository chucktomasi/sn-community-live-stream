(function executeRule(current, previous /*null when async*/) {

    // Condition: gs.isInteractive() && current.assigned_to.changes()

	var taskUtil = new TaskUtil();
	
	gs.info('BR: Update task: 10: assigned_to changed');

	// Ex: Assigned Chuck --> (empty), delete Chuck's task
	// Ex: Assigned Chuck --> Abel, delete Chuck's task, create Abel's
	// Ex: Assigned (empty) --> Chuck, create Chuck's
	if (!previous.assigned_to.nil()) {

		gs.info('BR: Update task: 20: previous was not nil - queing delete request');
		taskUtil.lockTask(previous);
		var taskObj = {
			"assigned_to" : {
				"sys_id" : previous.getValue('assigned_to'),
				"display_value" : previous.assigned_to.getDisplayValue()
			},
			"todoist_task_id" : previous.getValue('todoist_task_id')
		};
		var taskObjStr = JSON.stringify(taskObj);

		gs.eventQueue('x_snc_technow.delete_task', null, taskObjStr, '');

	}

	if (!current.assigned_to.nil()) {

		gs.info('BR: Update task: 30: current is not nil() - queuing create request');
		taskUtil.lockTask(current);
		gs.eventQueue('x_snc_technow.update_task', current, 'create', '');

	}

})(current, previous);