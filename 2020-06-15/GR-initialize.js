// Create a new record with GlideRecord().initialize()
var empGr = new GlideRecord(Constants.EMPLOYEE_TABLE);
empGr.initialize();

// Inspect data via Xplore
user_data.emp = empGr;