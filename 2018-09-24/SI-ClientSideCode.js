var ClientSideCode = Class.create();
ClientSideCode.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	
	getRecordID : function() {
		
		var num = this.getParameter('sysparm_number');
		
		var id = new ServerSideCode().getRecordSysID(num);
		
		return id;
	},

    type: 'ClientSideCode'
});