(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var list = [];
    var sys_id = request.queryParams.sys_id.toString();
	
	var cmdbGr = new GlideRecord('cmdb');
	cmdbGr.addQuery('sys_id', sys_id);
	cmdbGr.addQuery('install_status', 'IN', '1,6'); // adjust as needed
	cmdbGr.query();
	
	while (cmdbGr.next()) {
		var obj = {};
		obj.sys_id = cmdbGr.getUniqueValue();
		obj.ci_name = cmdbGr.getDisplayValue();
		obj.ci_name = cmdbGr.getTableName();
		
		list.push(obj);
	}
	
	response.setStatus(200);
	response.setBody(list);

})(request, response);