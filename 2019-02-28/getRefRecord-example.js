// Classic example of getting a related record
// if you don't know how to use getRefRecord()

var incGr = new GlideRecord('incident');
incGr.get('number', 'INC0000016');

// Retrieve the caller record info
// var userGr = new GlideRecord('sys_user');
// userGr.get(incGr.getValue('caller_id'));

// Short hand notation for the same above
userGr = incGr.caller_id.getRefRecord();