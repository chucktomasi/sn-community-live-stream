var delGr = new GlideRecord('sc_cat_item_user_criteria_mtom');
// Add delGr.addQuery() statements here if needed
delGr.query();
// Check to see if you get the right number
// of records before making this live
gs.info(delGr.getRowCount() + ' records found');
// Uncomment this to make it delete all records
delGr.deleteMultiple();