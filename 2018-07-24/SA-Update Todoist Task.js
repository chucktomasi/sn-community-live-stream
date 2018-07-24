(function (current, previous /*null when async*/) {

	var todoistREST = new TodoistREST();
	var taskUtil    = new TaskUtil();
	var action      = event.parm1.toString();
	
	gs.info('Starting script action: action=' + action + ' ' + typeof action);
	gs.info('Starting script action: current.sys_id=' + current.getValue('sys_id'));
	
	switch (action) {
		case 'complete':
			todoistREST.closeTask(current);
			break;
			
		case 'reopen':
			todoistREST.reopenTask(current);
			break;
			
		case 'update':
			todoistREST.updateTask(current);
			break;
			
		case 'create':
			todoistREST.createTask(current);
			break;
	}

})(current, previous);