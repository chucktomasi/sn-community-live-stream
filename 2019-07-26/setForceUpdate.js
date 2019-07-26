var userGr = new GlideRecord('sys_user');
userGr.get('62826bf03710200044e0bfc8bcbe5df1');
gs.info(userGr.getDisplayValue());
gs.info('old updated date=' + userGr.sys_updated_on.getDisplayValue() + ' -- ' +
userGr.getValue('sys_mod_count'));
userGr.setForceUpdate(true); // update the updated time and count even if nothing changes
userGr.update();
gs.info('new updated date=' + userGr.sys_updated_on.getDisplayValue() + ' -- ' +
userGr.getValue('sys_mod_count'));
