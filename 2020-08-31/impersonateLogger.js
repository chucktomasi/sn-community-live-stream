// Log each time someone does an impersonation

var impGr = new GlideRecord('u_impersonate_log');

// If this user already has a log entry, update it
if (impGr.get('u_user', event.parm1)) {

    var count = parseInt(impGr.getValue('u_count'), 10);
    if (!count) {
        count = 1;
    } else {
        ++count;
    }
    impGr.setValue('u_count', count);
    impGr.update();

} else { // create a new one
    impGr.newRecord();
    impGr.setValue('u_user', event.parm1);
    impGr.setValue('u_count', 1);
    impGr.insert();
}