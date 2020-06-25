// Find log entries from today where someone has printed

var tLogGr = new GlideRecord('syslog_transaction');

var q = 'sys_created_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()';
q += '^urlLIKEsysparm_media=print';
q += '^table!=syslog_transaction^ORtable=NULL^table!=NULL';

tLogGr.addEncodedQuery(q);
tLogGr.query();

while (tLogGr.next()) {
	
	// Create a Print Log entry for each one found
	var pLogGr = new GlideRecord('u_print_log');
	pLogGr.newRecord();

    pLogGr.setValue('u_table', tLogGr.getValue('table'));
    pLogGr.setValue('u_url', tLogGr.getValue('url'));
    pLogGr.setValue('u_type', tLogGr.getValue('type'));

	var usrGr = new GlideRecord('sys_user');
	if (usrGr.get('user_name', tLogGr.getValue('sys_created_by'))) {
		pLogGr.setValue('u_user', usrGr.getUniqueValue());
	}
	
	pLogGr.insert();
	
}