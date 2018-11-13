/* OLD WAY ---
var gr2 = new GlideRecord("u_cmdb_ci_addons");
gr2.addQuery('sys_id', gr1.u_parent);
gr2.query();
if (gr2.next())
--- */

/* Shortcut way...
*/
var gr2 = new GlideRecord('u_cmdb_ci_addons');
if (gr2.get(gr1.getValue('u_parent')))
