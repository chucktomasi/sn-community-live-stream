// Get the 'root' base table name
var list = [
    'incident',
    'u_drop_it',
    'cmdb_ci_ip_router',
    'no_real_table'
];

for (var i = 0; i < list.length; i++) {
    gs.info(list[i] + '->' + new TableUtils(list[i]).getAbsoluteBase());
}
