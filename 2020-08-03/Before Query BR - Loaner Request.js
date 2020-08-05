(function executeRule(current, previous /*null when async*/) {
	
	current.addQuery('requested_for', gs.getUserID());
	
})(current, previous);