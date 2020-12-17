// Better way to get values from a loop

var list = []; // Place to store results
var incGr = new GlideRecord('incident');
incGr.orderBy('number');
incGr.setLimit(10);
incGr.query();

while (incGr.next()) {
    gs.info(incGr.getValue('number') + ' typeof=' + typeof incGr.getValue('number'));
    list.push(incGr.getValue('number'));
}

gs.info('\nResults=\n' + list.join('\n'));