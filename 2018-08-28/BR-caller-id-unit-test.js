var incGr = new GlideRecord('incident');
// incGr.autoSysFields(false);
incGr.newRecord();
incGr.short_description = 'Unit test';
incGr.insert();