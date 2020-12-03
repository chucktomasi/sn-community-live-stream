(function runMailScript(
					 /* GlideRecord */ current,
					/* TemplatePrinter */ template,
					/* Optional EmailOutbound */ email,
					/* Optional GlideRecord */ email_action,
					/* Optional GlideRecord */ event) {

	var list = [];
	var hostGr = new GlideRecord('x_orb_technow_m2m_episode_host');
	hostGr.orderBy('order');
	hostGr.addQuery('episode', current.getUniqueValue());
	hostGr.query();
	
	while (hostGr.next()) {
		list.push(hostGr.host.getDisplayValue());
	}
	
	if (list.length == 0) {
		template.print('The TechNow team');
	} else {
		template.print(list.join(', '));
	}

})(current, template, email, email_action, event);