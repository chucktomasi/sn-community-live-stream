// Get the list of all tables that extend this one
// Same as getAllTableExtensions() minus the current table
// Note: this returns a Java array and requires j2js to convert to a JavaScript array

var list = [
    'task',
    'cmdb_ci_cluster_node',
    'sys_user',
    'table_not_found'
];

for (var i = 0; i < list.length; i++) {
    gs.info(list[i] + '-->' + new TableUtils(list[i]).getTableExtensions());
}
