(function runMailScript(/* GlideRecord */ current, /* TemplatePrinter */ template,
          /* Optional EmailOutbound */ email, /* Optional GlideRecord */ email_action,
          /* Optional GlideRecord */ event) {

    var courseGr = new GlideRecord(Constants.COURSE_TABLE);
	courseGr.addQuery('program', current.getUniqueValue());
	courseGr.query();
	
	if (courseGr.getRowCount() == 0) {
		template.print('No courses found for this program<br/>');
	} else {
		while (courseGr.next()) {
			template.print(courseGr.getDisplayValue() + '<br/>');
		}
	}
	

})(current, template, email, email_action, event);