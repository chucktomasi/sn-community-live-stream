// Display the tasks and their parent course values

var taskGr = new GlideRecord('x_66238_cls323_task');
taskGr.query();

while (taskGr.next()) {
	gs.info(taskGr.getDisplayValue() + ' -- ' + taskGr.getValue('course'));
}