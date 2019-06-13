var currentID = current.getUniqueValue(); // Get the sys_id of the current record

// Go through the related table records
// and get all records that point to the current

var relGr = new GlideRecord('cmdb_ci');
relGr.addQuery('parent', currentID);
relGr.query();

while (relGr.next()) {
    // Do something here
}