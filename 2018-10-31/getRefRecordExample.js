var incGr = new GlideRecord('incident');
incGr.addQuery('active', true);
incGr.query();

while (incGr.next()) {
    // Old way
    //var usr = new GlideRecord('sys_user');
    //if (usr.get(incGr.getValue('caller_id'))) {
        // do something with user rec
    //}

    // New way
    var usr = incGr.caller_id.getRefRecord();
    // Check to make sure it was a good read (i.e. caller_id wasn't null)
    if (usr.isValidRecord()) {
        // Do something with user rec
        gs.info(incGr.getValue('number') + ' ' + usr.getDisplayValue());
    }
}