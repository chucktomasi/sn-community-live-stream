var siam_system_and_roles = Class.create();
siam_system_and_roles.prototype = {
    initialize: function() {
    },

	siam_sys_func: function() { //Declare a function inside our class.
		var answer = []; //Create Array to hold sys list
		
		//Retrieve passed parameters in client script
		var userID = gs.getUserID();
		gs.log('user is', m);
		var roleGr = new GlideRecord('sys_user_has_role');
		roleGr.addQuery('user', userID);
		roleGr.query();
		while (roleGr.next()) {
			var sysGr = new GlideRecord('u_siam_systems');
			sysGr.query();
			while (sysGr.next()) {
                var roleName = roleGr.getValue('name');
                var sysName = sysGr.getValue('name');
                if (roleName.indexOf(sysName) >= 0)
    				answer.push(sysGr.getValue('sys_id'));
			}
		}
	
		return 'sys_idIN' + answer.join(',');
	}
});

    type: 'siam_system_and_roles'
};