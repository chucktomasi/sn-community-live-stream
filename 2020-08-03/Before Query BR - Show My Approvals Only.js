(function executeRule(current, previous /*null when async*/) {

	// Add to conditions field
	// !gs.hasRole('admin') && !gs.hasRole('approval_admin')

	current.addQuery('approver', gs.getUserID());

})(current, previous);