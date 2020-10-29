(function() {
  /* populate the 'data' object */
  /* e.g., data.table = $sp.getValue('table'); */

	var id = $sp.getParameter('sysparm_id');
	
	var clientGr = new GlideRecord(Constants.CLIENT_TABLE);
	clientGr.get(id);
	
	data.client = {
		"id" : clientGr.getUniqueValue(),
		"first_name" : clientGr.getValue('first_name'),
		"last_name" : clientGr.getValue('last_name'),
		"email" : clientGr.getValue('email'),
		"phone" : clientGr.getValue('phone'),
		"active" : clientGr.getValue('active') == "1"
	};
	
})();