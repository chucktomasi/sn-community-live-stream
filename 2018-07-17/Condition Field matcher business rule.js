(function executeRule(current, previous /*null when async*/) {

	gs.info("BR: Action Lookup started");

	var act = new GlideRecord('x_snc_dash_button_action');
	act.addQuery('active', true);
	act.query();

	gs.info("BR: Action Lookup: count=" + act.getRowCount() + ' button=' + current.button.getDisplayValue());

	while (act.next()) {

		var match = GlideFilter.checkRecord(current, act.getValue('conditions'));

		if (match) {
			var advanced = act.getValue('advanced') == 1;

			if (advanced) {
				var evaluator = new GlideScopedEvaluator();
				var hit  = {
								'button' : {
									'sys_id' : current.getValue('sys_id'),
									'display_value' : current.button.getDisplayValue()
								},
							   'click_type' : current.getValue('click_type'),
							   'voltage' : current.getValue('voltage')
								
						  };
				evaluator.putVariable('hit', hit);
				evaluator.evaluateScript(act, 'script');
				gs.info('BR Action Lookup : script run');
			} else {
				var rec = new GlideRecord(act.getValue('table'));
				rec.newRecord();
				rec.applyEncodedQuery(act.getValue('field_values'));
				rec.insert();
				gs.addInfoMessage('Record created: ' + rec.getDisplayValue());

			}

			createActionHitM2M(current.getValue('sys_id'), act.getValue('sys_id'));

		}

	}

	function createActionHitM2M(hitID, actionID) {

		var m2m = new GlideRecord('x_snc_dash_m2m_action_hits');
		m2m.initialize();
		m2m.button_action = actionID;
		m2m.button_hit = hitID;
		m2m.insert();
	}

})(current, previous);