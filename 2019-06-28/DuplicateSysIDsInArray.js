
var customIncLocUsers = [];

var userGR = new GlideRecord('sys_user');
userGR.addEncodedQuery('location=57fd7b993790200044e0bfc8bcbe5d19');
userGR.query();
while (userGR.next()) {
    customIncLocUsers.push(userGR.sys_id); 
}

gs.info('\n' + customIncLocUsers.join('\n'));