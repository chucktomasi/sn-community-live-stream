// Determine if a table has extensions or not) (true=has extensions, false=no extensions)

var list = [
    'task',
    'incident',
    'cmdb_ci_cluster_node',
    'sys_user',
    'table_not_found'
];

for (var i = 0; i < list.length; i++) {
    gs.info(list[i] + '-->' + new TableUtils(list[i]).hasExtensions());
}
