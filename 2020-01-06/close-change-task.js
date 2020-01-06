(function executeRule(current, previous /*null when async*/) {

    var taskGr = new GlideRecord('change_task');
    taskGr.addQuery('change_request', current.getUniqueValue());
    taskGr.addQuery('active', true);
    taskGr.query();

    while (taskGr.next()) {
        taskGr.state = 7; // Set this to whatever you want
        taskGr.active = false;
        taskGr.update();
    }
})(current, previous);