// Example 4 - Client callable script include InstanceAjax()
// Depends on Script Include: Instance()

var InstanceAjax = Class.create();
InstanceAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	
	getInfo : function() {
		
		var fx = this.getParameter('sysparm_fx');
		if (!fx) {
			return 'error';
		}
		var str = '';
		var inst = new Instance().getInfo(fx);
		
		return str;
	},

    type: 'InstanceAjax'
});