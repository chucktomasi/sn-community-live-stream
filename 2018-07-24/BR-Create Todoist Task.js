(function executeRule(current, previous /*null when async*/) {

    // Condition: gs.isInteractive() && !current.assigned_to.nil()

	var taskUtil = new TaskUtil();
	
	new taskUtil.lockTask(current);
	new TodoistREST().createTask(current);

})(current, previous);