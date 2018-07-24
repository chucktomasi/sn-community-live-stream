(function executeRule(current, previous /*null when async*/) {

    // Condition: gs.isInteractive()  && !current.assigned_to.nil()
    
	new TaskUtil().lockTask(current);
	
	// Note: changes(), changesTo(), and changesFrom() don't work in Async
	//       REST calls cannot be made in after
	// Solution: Use in an after and send current.sys_id to an event to run script action

	if (current.active.changesTo(false)) {
		gs.eventQueue('x_snc_technow.update_task', current, 'complete', '');
	}

	if (current.active.changesTo(true)) {
		gs.eventQueue('x_snc_technow.update_task', current, 'reopen', '');
	}

	if (current.text.changes()) {
		gs.eventQueue('x_snc_technow.update_task', current, 'update', '');
	}

})(current, previous);