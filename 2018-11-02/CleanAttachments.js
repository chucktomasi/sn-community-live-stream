var attachGr = new GlideRecord('sys_attachment');
attachGr.query();
var patt = /^ZZ_YY(.+)/;

while (attachGr.next()) {
    var tableName = attachGr.getValue('table_name');
    var match = tableName.match(patt);
    if (match) {
        // This is an attachment field
        tableName = match[1];
        // gs.info('tableName1=' + tableName1);
    }

    var recId = attachGr.getValue('table_sys_id');

    var recGr = new GlideRecord(tableName);
    if (!recGr.get(recId)) {
        gs.info(tableName + '.' + recId + ' not found');
        // attachGr.deleteRecord();
    }

}