var Program = Class.create();
Program.prototype = {
    initialize: function() {
    },
	
	canReadCode : function(userID) {
		
		var answer = false;
		var uRoleGr = new GlideRecord('sys_user_has_role');
		uRoleGr.addQuery('user', userID);
		uRoleGr.addQuery('role.name', 'x_66238_cls323.program_manager');
		uRoleGr.query();
		
		if (uRoleGr.hasNext()) {
			answer = true;
		}

		return answer;
		
	},

    type: 'Program'
};