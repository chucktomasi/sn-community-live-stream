// Get sample user
// Chuck Tomasi = 46c9e158a9fe198101d44d0d22cb640d
var userGr = new GlideRecord('sys_user');

if (!userGr.get('user_name', 'chuck.tomasi')) {
    gs.error('Could not get user');
}

// Simple GlideRecord Query
var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.addQuery('active', true);
incGr.orderBy('caller_id');
// incGr.addEncodedQuery('priority!=1^ORpriority=^caller_id=7a82abf03710200044e0bfc8bcbe5d27^NQpriority=1^active=true^caller_id=0a826bf03710200044e0bfc8bcbe5d7a');
incGr.setLimit(1);
incGr.query();

gs.info('encoded query=' + incGr.getEncodedQuery());
gs.info(incGr.getRowCount() + ' records retrieved');

// Check for at least one record
/*
if (incGr.hasNext()) {
    gs.info('Yes, we have a record');
} else {
    gs.info('no, we have no records matching that');
}

if (incGr.next()) {
    gs.info(incGr.getValue('number'));
}

gs.info(typeof incGr.number);
gs.info(typeof incGr.getValue('number'));
*/

// Go through all records found matching above query
var list = [];
while (incGr.next()) {
    var id = incGr.getUniqueValue();
    list.push(id);
}
gs.info('list=' + list.join('\n'));