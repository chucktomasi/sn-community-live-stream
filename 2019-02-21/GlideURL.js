	var sysId = typeof rowSysId == 'undefined' ? gel('sys_uniqueValue').value : rowSysId;
	var url = new GlideURL('jeopardy');
	url.addParam('id', 'j_home');

	g_navigation.open(url.getURL(), "_blank");
