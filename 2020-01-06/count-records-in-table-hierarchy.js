var tu = new TableUtils('cmdb_ci');
var tables = tu.getTableExtensions();
var list = tables.toArray();
gs.info('length=' + list.length);
for (var i = 0; i < list.length; i++) { 
	var gr = new GlideAggregate(list[i]);
	gr.addAggregate('COUNT');
	gr.query();
	if (gr.next()){
		var classCount = gr.getAggregate('COUNT');
		gs.print(list[i] + ' ' + classCount);
	}
}