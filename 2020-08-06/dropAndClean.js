// Drop a table and clean up references
// This includes removing the reference fields from other tables!!!
// Example: u_drop_and_clean is referenced from u_ref_drop_and_clean.u_drop_and_clean_ref
// Note the table name is in the method, not the constructor

var tu = new TableUtils();
tu.dropAndClean('u_drop_and_clean');