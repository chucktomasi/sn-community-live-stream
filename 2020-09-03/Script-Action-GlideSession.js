var u = new GlideRecord('sys_user');
u.addQuery('user_name', event.parm1);
u.query();
u.next();
var cr = new Program().canReadCode(u.getUniqueValue());
gs.info('user=' + event.parm1 + ' u=' + u.getUniqueValue() + ' canReadCode=' + cr);
gs.getSession().putClientData('program_manager', cr);
