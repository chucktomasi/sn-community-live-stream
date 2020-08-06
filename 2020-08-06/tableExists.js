// Check if a table exists
var tu = new TableUtils("incident");
gs.info("Does 'incident' exist? " + tu.tableExists());

var tu = new TableUtils("my_table");
gs.info("Does 'my_table' exist? " + tu.tableExists());