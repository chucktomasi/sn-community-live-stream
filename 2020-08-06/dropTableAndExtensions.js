// Drop a table and all extensions
// Ex: u_drop_base is the top level
// u_drop_ext1 is extended from u_drop_base
// u_drop_ext2 is extended from u_drop_base
// Note the table name is in the method, not the constructor

new TableUtils().dropTableAndExtensions('u_drop_base');