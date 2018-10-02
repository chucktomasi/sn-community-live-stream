var incGr = new GlideRecord('incident');
incGr.get('9c573169c611228700193229fff72400');

gs.info(incGr.time_worked.getDisplayValue());
gs.info(incGr.getValue('time_worked'));