var admins = ["aileen.mottern","alejandro.mascall"];
for(var i = 0; i < admins.length; i++) {
  var gr = new GlideRecord('sys_user_grmember');
  gr.addEncodedQuery('user.user_name=' + admins[i] + '^group.name=Service Desk');
  gr.query();
  gs.debug(gr.hasNext());
  if (!gr.hasNext()){
    // try to get the user record by user_name to track the sys_id
    var usrGr = new GlideRecord('sys_user');
    if (!usrGr.get('user_name', admins[i])) {
      // User not found by user_name
      gs.error('Cannot find user: ' + admins[i]);
      continue;
    }

    // Now build the new record in sys_user_grmember
    var memGr = new GlideRecord('sys_user_grmember');
    gs.debug('adding users');
    memGr.newRecord();
    memGr.user = usrGr.getValue('sys_id');
    memGr.group.setDisplayValue('Service Desk') ;
    memGr.setWorkflow(false);
    gs.debug(gr.insert());
  }
}