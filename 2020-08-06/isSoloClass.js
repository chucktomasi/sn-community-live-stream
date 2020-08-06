// Determines if a table is a solo class,
// meaning it has no extensions and not extended from anything else

var list = [
    'task',
    'incident',
    'cmdb_ci',
    'cmdb',
    'cmdb_ci_cluster_node',
    'sys_user',
    'table_not_found'
];

for (var i = 0; i < list.length; i++) {
    gs.info(list[i] + '-->' + new TableUtils(list[i]).isSoloClass());
}
