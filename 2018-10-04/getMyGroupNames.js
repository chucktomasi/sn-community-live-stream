function getMyGroupNames() {

    var answer = [];
    var sugrm = new GlideRecord('sys_user_grmember');
    sugrm.addQuery('user', gs.getUserID());
    sugrm.query();

    while (sugrm.next()) {
        answer.push(sugrm.group.getDisplayValue());
    }

    return answer;
}