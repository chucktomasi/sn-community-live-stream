(function runMailScript(/* GlideRecord */ current,
                        /* TemplatePrinter */ template,
						/* Optional EmailOutbound */ email,
                        /* Optional GlideRecord */ email_action,
						/* Optional GlideRecord */ event) {

    var output = [];
	var wl = current.getValue('watch_list');
	var wlArr = wl.split(',');
    for (var i = 0; i < wlArr.length; i++) {
        var userGr = new GlideRecord('sys_user');
        userGr.get(wlArr[i]);
        output.push(userGr.getValue('first_name'));
    }

    template.print(output.join(','));

})(current, template, email, email_action, event);