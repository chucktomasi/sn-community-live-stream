g_form.getParameter('sys_id') // - DOES NOT WORK!
g_form.getParameter('sys_uniqueValue') // - DOES NOT WORK!
gel('sys_uniqueValue').value // - DOES NOT WORK!
g_form.getUniqueValue();

// This works only because rowSysId is defined and has a valid sys_id
// even though the UI action may not be a list UI action
// gel() is ignored and doesn't work anyway
var sysId = typeof rowSysId == 'undefined' ? gel('sys_uniqueValue').value : rowSysId;

// Example how it's called.
function openBoard() {
	var sysId = typeof rowSysId == 'undefined' ? gel('sys_uniqueValue').value : rowSysId;
	var url = new GlideURL('jeopardy');
	url.addParam('id', 'jeopardy_board');
	url.addParam('game_id', sysId);
	g_navigation.open(url.getURL(), "_blank");

}