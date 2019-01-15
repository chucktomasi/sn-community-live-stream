// Create your own sys_id
// For demonstration purposes only - don't do this in a production system!
try {
    var repGr  = new GlideRecord('x_66238_cls_repair');
    repGr.newRecord();
    repGr.sys_id = 'bar';
    repGr.category = 'BAR';
    repGr.insert();
} catch (e) {
    gs.error('Uh-oh: ' + e.message);
}