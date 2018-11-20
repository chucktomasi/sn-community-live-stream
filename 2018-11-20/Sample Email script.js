(function runMailScript(/* GlideRecord */ current, /* TemplatePrinter */ template,
										   /* Optional EmailOutbound */ email, /* Optional GlideRecord */ email_action,
										   /* Optional GlideRecord */ event) {

	template.print("Hello, world!");
	var userID = event.parm1.toString();
	var userGr = new GlideRecord('sys_user');
	if (userGr.get(userID)) {
		template.print('Logged in user is: ' + userGr.getDisplayValue());
	}


})(current, template, email, email_action, event);