// Take a look at what is the value of a list field
var incGr = new GlideRecord('incident');
incGr.orderBy('number');
incGr.query();

while (incGr.next()){
    gs.info(incGr.getValue('number') + '-->' + incGr.getValue('watch_list'));
}