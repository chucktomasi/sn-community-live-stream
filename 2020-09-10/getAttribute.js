// Example: 
var inc = new GlideRecord("incident");
inc.query();
inc.next();
gs.info(inc.caller_id.getAttribute('some_attribute'));

// 
var gr = new GlideRecord('x_66238_cls323_todo');
gr.initialize();
gs.info(gr.assignment_group.getBooleanAttribute('tree_picker'));
gs.info(gr.assignment_group.getAttribute('my_attribute'));