var userGr = new GlideRecord('sys_user');
userGr.addEncodedQuery('last_loginRELATIVELE@dayofweek@ago@45^active=true');
userGr.query();
gs.info(userGr.getRowCount() + ' users found > 45 days');

while (userGr.next()) {
    userGr.setValue('active', false);
    userGr.update()
}