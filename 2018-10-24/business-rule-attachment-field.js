// Use a display BR to find out if attachment field has a value
(function executeRule(current, previous /*null when async*/) {

	g_scratchpad.document = current.getValue('document');

})(current, previous);