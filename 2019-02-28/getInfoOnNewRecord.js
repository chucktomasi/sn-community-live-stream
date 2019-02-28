var incGr = new GlideRecord('incident');
incGr.newRecord();
gs.info('sys_id=' + incGr.getUniqueValue());
gs.info('dv=' + incGr.getDisplayValue());
gs.info('number=' + incGr.getValue('number'));
