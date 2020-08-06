// Get All Extensions - includes current table
// Effectively looks "down" the tree for tables that are extended from this one
// Note: this returns a Java array and requires j2js to convert to a JavaScript array

var list = [
    'incident',
    'cmdb_ci_server',
    'sys_user',
    'table_not_found'
];

for (var i = 0; i < list.length; i++) {
    gs.info(list[i] + '-->' + new TableUtils(list[i]).getAllExtensions());
}
