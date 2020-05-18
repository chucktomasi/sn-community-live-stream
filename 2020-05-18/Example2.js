// Example 2: State is a null object, but still cannot be set
var id = 'd260c1a0db730010d5cc61ca0b961990';
var gr = new GlideRecord(Constants.EMPLOYEE_TABLE);
gr.get(id);

var state = gr.getValue('state');
gs.info('State + >>' + state + '<< ' + typeof state);

if (!state) {
	gs.info('State is falsey');
} else {
	gs.info('State is truthy');
	gr.setValue('state', null);
	gr.update();
}