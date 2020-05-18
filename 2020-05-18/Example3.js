// Example 3: Use empty string to set it back to null?
var id = 'd260c1a0db730010d5cc61ca0b961990';
var gr = new GlideRecord(Constants.EMPLOYEE_TABLE);
gr.get(id);

// Force state variable to a string every time
var state = gr.getValue('state') || '';
gs.info('State + >>' + state + '<< ' + typeof state);

if (!state) {
	gs.info('State is falsey');
} else {
	gs.info('State is truthy');
	gr.setValue('state', '');
	gr.update();
}