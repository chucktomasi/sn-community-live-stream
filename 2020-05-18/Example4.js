// Example 4: Test dot-walked variables
var id = 'd260c1a0db730010d5cc61ca0b961990';
var gr = new GlideRecord(Constants.EMPLOYEE_TABLE);
gr.get(id);

if (gr.inspector.manager.department) {
	gs.info('Department set');
} else {
	gs.info('Department not set');
}