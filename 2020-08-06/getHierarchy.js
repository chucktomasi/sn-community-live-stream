// Get the list of all tables participating in the heirarchy of the specified table
// Effectively does a getTables() to "walk up" the tree,
// Then does getAllExtensions() to "walk down" the tree
// Note: this returns a Java array and requires j2js to convert to a JavaScript array

var list = [
    'incident',
    'cmdb_ci_server',
    'sys_user',
    'table_not_found'
];

for (var i = 0; i < list.length; i++) {
    gs.info(list[i] + '-->' + new TableUtils(list[i]).getHierarchy());
}
