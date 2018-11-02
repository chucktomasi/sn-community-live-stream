(function () {  

    var userGr = new GlideRecord('sys_user'); 
    if (userGr.get('user_name', event.parm1)) {
        var count = parseInt(userGr.getValue('u_login_count'), 10);
        ++count;
        userGr.setValue('u_login_count', count);
        userGr.update();
    }
})();  