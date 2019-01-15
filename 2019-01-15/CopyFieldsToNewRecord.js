// Copy the current record to a new one
var newGr = new GlideRecord('YOUR_TABLE_HERE');  // UPDATE THE TABLE NAME!!!
newGr.newRecord();
// Array of fields to Copy - modify as needed
var fieldList = [
    'short_description',
    'description',
    'priority'
    ];

// Copy the field values from current to newGr
for (var i = 0; i < fieldList.length; i++) {
    var fieldName = fieldList[i];
    newGr.setValue(fieldName, current.getValue(fieldName));
}
newGr.insert(); // Create the record
action.setRedirectURL(newGr);