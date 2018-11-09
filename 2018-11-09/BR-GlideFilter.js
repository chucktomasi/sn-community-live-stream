(function executeRule(current, previous /*null when async*/) {

	gs.info("BR: State Lookup started");
	
	var ruleGr = new GlideRecord('x_snc_cls_state_rule');
	ruleGr.addQuery('active', true);
	ruleGr.orderBy('order');
	ruleGr.query();

	gs.info("BR: State Lookup: count=" + ruleGr.getRowCount() + ' event=' + episodeGr.getDisplayValue());

	while (ruleGr.next()) {

		var match = GlideFilter.checkRecord(episodeGr, ruleGr.getValue('condition'));
		
		if (match) {
			current.setValue('state', ruleGr.getValue('state'));
			return;
		}

	}

})(current, previous);