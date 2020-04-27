// Better way...

// Define the fields to copy
var fieldList = [
	'name', 'order', 'description', 'short_description', 'assigned_to'
];

// Get all the template records
var templateGr = new GlideRecord(Constants.TEMPLATE_TASK_TABLE);
templateGr.query();

// For each record found...
while (templateGr.next()) {

	// Create a new target record
	var todoGr = new GlideRecord(Constants.TODO_TABLE);
	todoGr.newRecord();

	// Copy all the defined fields
	for (var i = 0; i < fieldList.length; i++) {
		var f = fieldList[i];
		todoGr.setValue(f, templateGr.getValue(f));
	}
        
	todoGr.video = videoGr.getUniqueValue(); // link it to the parent video record

	// Create the new target record
	todoGr.insert();
}