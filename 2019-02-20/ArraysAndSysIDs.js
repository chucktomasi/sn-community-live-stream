var userGr = new GlideRecord('sys_user');
userGr.addEncodedQuery('last_loginRELATIVELE@dayofweek@ago@45^active=true');
userGr.query();
gs.info(userGr.getRowCount() + ' users found > 45 days');

var list = [];
gs.info('query=');
while (userGr.next()) {
    gs.info(userGr.sys_id);
    // Getting a sys_id the wrong way
    // list.push(userGr.sys_id);
    // Getting a sys_id the 'lame way'
    // list.push(userGr.sys_id + '');
    // The slightly less lame way
    // list.push(userGr.sys_id.toString());
    // The good way
    // list.push(userGr.getValue('sys_id));
    // An alternate good way
    list.push(userGr.getUniqueValue());
}

gs.info('list=');
for (var i = 0; i < list.length; i++) {
    gs.info(list[i]);
}