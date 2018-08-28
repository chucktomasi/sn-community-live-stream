(function executeRule(current, previous /*null when async*/) {
 
    var usr = new GlideRecord('sys_user');
   
    if (usr.get('user_name', current.getValue('sys_created_by'))) {
        current.caller_id = usr.getValue('sys_id');
    }

})(current, previous);
