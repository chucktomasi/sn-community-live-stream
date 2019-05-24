var inc = new GlideRecord('incident');
inc.get('number', 'INC0009004');
var val1 = inc.calendar_duration.dateNumericValue();
gs.info('dur=' + val1);
inc.calendar_duration.setDateNumericValue(val1 + 60000);
gs.info('dur=' + inc.calendar_duration.getDisplayValue());

/* Example from developer API docs
var gdt = new GlideDateTime("2011-12-07 08:00:00");
gdt.addSeconds(60);
gs.print(gdt.getValue());
*/