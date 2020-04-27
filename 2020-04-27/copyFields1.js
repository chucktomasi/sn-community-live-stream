// Inefficient and inflexible way to copy fields

// Get all the template records
var templateGr = new GlideRecord(Constants.TEMPLATE_TASK_TABLE);
templateGr.query();

// For each record found...
while (templateGr.next()) {

	// Create a new target record
	var todoGr = new GlideRecord(Constants.TODO_TABLE);
	todoGr.newRecord();

	// Copy all the defined fields
	todoGr.name = templateGr.name;
    todoGr.description = templateGr.description;
    todoGr.order = templateGr.order;
    todoGr.assigned_to = templateGr.assigned_to;
    todoGr.short_description = templateGr.short_description;
        
	todoGr.video = videoGr.getUniqueValue(); // link it to the parent video record

	// Create the new target record
	todoGr.insert();
}