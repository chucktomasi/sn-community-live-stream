/*
 * !!! WARNING: THIS SCRIPT IS DESIGNED TO
 * !!! FAIL IN GLOBAL SCOPE. IT WILL RENAME
 * !!! ALL YOUR CIs TO 'hello'. IT IS MEANT
 * !!! FOR DEMONSTRATION PURPOSES ONLY
 */
var ci = new GlideRecord('cmdb_ci');
ci.addQuery('name', '*ANNIE-IBM');
ci.query();
gs.info(ci.getRowCount());
while (ci.next()) {
   ci.name = 'hello';
   ci.update();
}