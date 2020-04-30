function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading) {
		g_form.addInfoMessage('This message runs while loading.');
		// Some people put a return statement here to bail out to only run
		// this section onLoad and nothing more. Not this time!
	} else {
		g_form.addInfoMessage('This message runs while field is changed');
	}
	g_form.addInfoMessage('This message runs for onChange and onLoad');
}